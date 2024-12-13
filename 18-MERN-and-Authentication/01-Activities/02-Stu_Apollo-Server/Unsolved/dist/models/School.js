import { Schema, model } from 'mongoose';
const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
    },
    studentCount: {
        type: Number,
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
const School = model('School', schoolSchema);
export default School;
