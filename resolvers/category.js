
exports.Category = {
    //  list related jobs Under a category
    jobs: ({id: categoryId}, args, {db}) => {   
        return db.jobs.filter((job) => job.categoryId === categoryId);
    }  
};