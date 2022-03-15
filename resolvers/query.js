const {db} = require('../db');

exports.Query = { 
    // get all jobs
    jobs: (parant, args, {db})=> {
        return db.jobs;
    },
    // get single job
    job: (parant, args, {db})=> {
        const {id} = args;
        // find job from [ jobs ] where jobID matches searched job
        return job =  db.jobs.find((job) => job.id === id);
    },
    // List Categories
categories: (parant, args, {db}) => db.categories,
    category:(parant, args, {db}) => {
        const {id} = args;
        return category = db.categories.find((category) => category.id === id)
    }
}