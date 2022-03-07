const { jobs} = require('../db');

exports.Category = {
    jobs: (parent, args, context) => {   
        const categoryId = parent.id;
        return jobs.filter((job) => job.categoryId === categoryId);
    }  
};