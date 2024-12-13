import { School, Class, Professor } from '../models/index.js';

// TODO: Define an interface for the class resolver arguments
// Define types for the arguments
interface ClassArgs {
  id: string;
}

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

    // TODO: Add a new resolver for a single Class object

    class: async (_parent: unknown, args: ClassArgs) => {
      return await Class.findById(args.id).populate('professor');
    },

    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  },
};

export default resolvers;
