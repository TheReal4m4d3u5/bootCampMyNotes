import db from '../config/connection.js';
import { School, Class, Professor } from '../models/index.js';
import cleanDb from './cleanDb.js';
import schoolData from './schoolData.json' assert { type: 'json' };
import classData from './classData.json' assert { type: 'json' };
import professorData from './professorData.json' assert { type: 'json' };
// Reusable function to assign classes to schools
const assignClassesToSchools = async (classes, schools) => {
    for (const newClass of classes) {
        const tempSchool = schools[Math.floor(Math.random() * schools.length)];
        tempSchool.classes.push(newClass._id);
        await tempSchool.save();
    }
};
// Reusable function to assign professors to classes
const assignProfessorsToClasses = async (classes, professors) => {
    for (const newClass of classes) {
        const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
        newClass.professor = tempProfessor._id;
        await newClass.save();
    }
};
const seedDatabase = async () => {
    try {
        await db();
        await cleanDb();
        // bulk create each model
        const schools = await School.insertMany(schoolData);
        const classes = await Class.insertMany(classData);
        const professors = await Professor.insertMany(professorData);
        await assignClassesToSchools(classes, schools);
        await assignProfessorsToClasses(classes, professors);
        console.log('Database seeded successfully');
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedDatabase();
