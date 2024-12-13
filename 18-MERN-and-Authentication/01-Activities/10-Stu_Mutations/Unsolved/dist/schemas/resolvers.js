import { School, Class, Professor } from '../models/index.js';
const resolvers = {
    Query: {
        schools: async () => {
            return await School.find({}).populate('classes').populate({
                path: 'classes',
                populate: 'professor'
            });
        },
        classes: async () => {
            return await Class.find({}).populate('professor');
        },
        class: async (_parent, args) => {
            return await Class.findById(args.id);
        },
        professors: async () => {
            return await Professor.find({}).populate('classes');
        }
    },
    Mutation: {
        addSchool: async (_parent, { name, location, studentCount }) => {
            return await School.create({ name, location, studentCount });
        },
        updateClass: async (_parent, { id, building }) => {
            return await Class.findOneAndUpdate({ _id: id }, { building });
        }
    }
};
export default resolvers;
