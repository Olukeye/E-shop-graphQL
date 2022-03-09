
exports.Job = {
    // list category related to a job
    category:({categoryId}, args, {categories}) => {
        return categories.find((category) => category.id === categoryId);
    }
}