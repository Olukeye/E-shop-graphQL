
exports.Category = {
    //  list related jobs Under a category
    jobs: ({id: categoryId}, args, {jobs}) => {   
        return jobs.filter((job) => job.categoryId === categoryId);
    }  
};