const {v4: uuid} = require('uuid');

exports.Mutation = {
    createCategory: (parent, {input}, {categories}) => {
        const { name } = input;

        const newCategory = {
            id: uuid(),
            name
        }

    categories.push(newCategory);

    return newCategory;
    },

    createJob : ( parent, {input}, {jobs}) => {
        const { title,company, description,role, amount, location, categoryId } = input;
        const addNewJob = {
            id: uuid(), 
             title, company, description,role, amount, location, categoryId 
        }

        jobs.push(addNewJob);

        return addNewJob;
    }
} 