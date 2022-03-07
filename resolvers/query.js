const {jobs, categories} = require('../db');

exports.Query = {
    hello: () => {
        return "Hello GraghQL" 
    }, 
    // get all jobs
    jobs: (parant, args, context)=> {
        return jobs
    },
    // get single job
    job: (parant, args, context)=> {
        const {id} = args;
        // find job from [ jobs ] where jobID matches searched job
        return job =  jobs.find((job) => job.id === id);
    },
    // List Categories
    categories: (parant, args, context) => categories,
    category:(parant, args, context) => {
        const {id} = args;
        return category = categories.find((category) => category.id === id)
    }
}