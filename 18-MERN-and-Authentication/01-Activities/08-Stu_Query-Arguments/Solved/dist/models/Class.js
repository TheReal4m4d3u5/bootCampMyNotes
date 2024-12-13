import { Schema, model } from 'mongoose';
const classSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    building: {
        type: String,
        required: true,
    },
    creditHours: {
        type: Number,
        required: true,
        min: 1,
    },
    professor: {
        type: Schema.Types.ObjectId,
        ref: 'Professor',
    },
}, {
    timestamps: true,
});
const Class = model('Class', classSchema);
export default Class;
