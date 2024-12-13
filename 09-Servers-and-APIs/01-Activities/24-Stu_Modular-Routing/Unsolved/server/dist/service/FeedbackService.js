import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';
class Feedback {
    constructor(email, feedbackType, feedback, feedback_id) {
        this.email = email;
        this.feedbackType = feedbackType;
        this.feedback = feedback;
        this.feedback_id = feedback_id;
    }
}
class FeedbackService {
    async read() {
        return await fs.readFile('db/feedback.json', {
            flag: 'a+',
            encoding: 'utf8',
        });
    }
    async write(feedback) {
        return await fs.writeFile('db/feedback.json', JSON.stringify(feedback, null, '\t'));
    }
    async getFeedback() {
        return await this.read().then((feedback) => {
            let parsedFeedback;
            // If feedback isn't an array or can't be turned into one, send back a new empty array
            try {
                parsedFeedback = [].concat(JSON.parse(feedback));
            }
            catch (err) {
                parsedFeedback = [];
            }
            return parsedFeedback;
        });
    }
    async addFeedback(email, feedbackType = 'Complaint', feedback) {
        if (!email || !feedback) {
            throw new Error('Feedback and email cannot be blank');
        }
        // Add a unique id to the feedback using uuid package
        const newFeedback = {
            email: email,
            feedbackType: feedbackType,
            feedback: feedback,
            feedback_id: uuidv4(),
        };
        // Get all feedbacks, add the new feedback, write all the updated feedbacks, return the newFeedback
        return await this.getFeedback()
            .then((feedback) => {
            return [...feedback, newFeedback];
        })
            .then((updatedFeedback) => this.write(updatedFeedback))
            .then(() => newFeedback);
    }
}
export default new FeedbackService();
