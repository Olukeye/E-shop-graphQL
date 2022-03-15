
exports.Job = {
    // list category related to a job
    category:({categoryId}, args, {db}) => {
        return db.categories.find((category) => category.id === categoryId);
    }
}