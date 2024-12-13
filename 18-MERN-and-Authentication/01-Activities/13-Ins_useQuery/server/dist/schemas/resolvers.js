import { Profile } from '../models/index.js';
const resolvers = {
    // ! Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
    Query: {
        profiles: async () => {
            return await Profile.find();
        },
        profile: async (_parent, { profileId }) => {
            return await Profile.findOne({ _id: profileId });
        },
    },
    Mutation: {
        addProfile: async (_parent, { name }) => {
            return await Profile.create({ name });
        },
        addSkill: async (_parent, { profileId, skill }) => {
            return await Profile.findOneAndUpdate({ _id: profileId }, {
                $addToSet: { skills: skill },
            }, {
                new: true,
                runValidators: true,
            });
        },
        removeProfile: async (_parent, { profileId }) => {
            return await Profile.findOneAndDelete({ _id: profileId });
        },
        removeSkill: async (_parent, { profileId, skill }) => {
            return await Profile.findOneAndUpdate({ _id: profileId }, { $pull: { skills: skill } }, { new: true });
        },
    },
};
export default resolvers;
