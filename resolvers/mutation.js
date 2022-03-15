const {v4: uuid} = require('uuid');
const { Job } = require('./job');

exports.Mutation = {
    createCategory: (parent, {input}, {db}) => {
        const { name } = input;

        const newCategory = {
            id: uuid(),
            name
        }

    db.categories.push(newCategory);

    return newCategory;
    },

    deleteCategory: (parent, {id}, {db}) => {
        db.categories = db.categories.filter((category) => category.id !== id);
        // delete product attached to category aswell
        db.jobs = db.jobs.map((job) => {
            if(job.categoryId === id) return {
                ...job,
                categoryId: null
            }
        })

        return true;
    },


    createJob : ( parent, {input}, {db}) => {
        const { title,company, description,role, amount, location, categoryId } = input;
        const addNewJob = {
            id: uuid(), 
             title, company, description,role, amount, location, categoryId 
        }

        db.jobs.push(addNewJob);

        return addNewJob;
    },

    deleteJob:(parent, {id}, {db}) => {
        db.jobs = db.jobs.filter((job) => job.id !== id );
        return true;
    }
} 