const {v4: uuid} = require('uuid');

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

    createJob : ( parent, {input}, {db}) => {
        const { title,company, description,role, amount, location, categoryId } = input;
        const addNewJob = {
            id: uuid(), 
             title, company, description,role, amount, location, categoryId 
        }

        db.jobs.push(addNewJob);

        return addNewJob;
    }
} 