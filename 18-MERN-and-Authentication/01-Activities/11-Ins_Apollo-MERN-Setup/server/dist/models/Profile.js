import { Schema, model } from 'mongoose';
const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    skills: [
        {
            type: String,
            trim: true,
        },
    ],
});
const Profile = model('Profile', profileSchema);
export default Profile;
