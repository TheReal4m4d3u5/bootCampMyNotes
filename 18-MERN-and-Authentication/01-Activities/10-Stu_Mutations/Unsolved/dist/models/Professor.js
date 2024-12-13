import { Schema, model } from 'mongoose';
const professorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    studentScore: {
        type: Number,
    },
    officeHours: {
        type: String,
        required: true,
    },
    officeLocation: {
        type: String,
        required: true,
    },
    classes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Class',
        },
    ],
}, {
    timestamps: true,
});
const Professor = model('Professor', professorSchema);
export default Professor;
