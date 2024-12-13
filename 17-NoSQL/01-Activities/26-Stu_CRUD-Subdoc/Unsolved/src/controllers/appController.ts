import { Application, User } from '../models/index.js';
import { Request, Response } from 'express';


  // TODO: Add comments to the functionality of the getApplications method
  //getApplications function (retrieving application data).
  // handles the retrieval of all application records from the database
  export const getApplications = async (_req: Request, res: Response) => {
    try {
      // Attempt to retrieve all applications from the Application model
      const applications = await Application.find(); // applications is an array
      res.json(applications);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // TODO: Add comments to the functionality of the getSingleApplication method
  // This method handles the retrieval of a single application record by its unique ID
  export const getSingleApplication = async (req: Request, res: Response) => {
    try {
      
      // Retrieve the application using the application ID from the request parameters
      const application = await Application.findOne({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with that ID' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

// TODO: Add comments to the functionality of the createApplication method
// find a user and add an application
  export const createApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.create(req.body); // application instance document
      const user = await User.findOneAndUpdate( 
        { _id: req.body.userId }, 
        { $addToSet: { applications: application._id } }, // push to applications array 
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      }

      res.json('Created the application 🎉');
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }
  
  // TODO: Add comments to the functionality of the updateApplication method
  // This method handles updating an existing application record by its unique ID
  export const updateApplication = async (req: Request, res: Response) => {
    try {
      // Find the application by ID and update it with the new data from the request body
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId }, // filter where
        { $set: req.body }, //update
        { runValidators: true, new: true }  //options
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }

  // TODO: Add comments to the functionality of the deleteApplication method
  // This method handles deleting an application record by its unique ID and removing its reference from the associated user
  export const deleteApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndDelete({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      // after delete update user
      const user = await User.findOneAndUpdate(
        { applications: req.params.applicationId },
        { $pull: { applications: req.params.applicationId } }, //remove element from array with the value that matches
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created but no user with this id!',
        });
      }

      res.json({ message: 'Application successfully deleted!' });
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

   // TODO: Add comments to the functionality of the addTag method
   // This method handles adding a new tag to an existing application by its unique ID
  export const addTag = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $addToSet: { tags: req.body } },
        { runValidators: true, new: true } // make sure that when creating or updating that it follows the schema 
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  // TODO: Add comments to the functionality of the addTag method
  // This method handles removing a specific tag from an existing application by the application and tag IDs
  export const removeTag = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId }, // find the application working with the model 
        { $pull: { tags: { tagId: req.params.tagId } } },  // modify the array working with the model
        { runValidators: true, new: true } // make sure it fits the schema 
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

