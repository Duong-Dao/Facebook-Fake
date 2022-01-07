const { Add, getAll, getById, updateById, deleteById } = require("../data/post.dao");

//

const createPost = async (data) => {

};

const getPosts = async () => {
    return await getAll();
};


const getPostById = async (id) => {
    return await getById(id);
};


const updatePost = async (id, data) => {
    return await updateById(id, data);
};

const deletePost = async (id) => {
    return await deleteById(id);
};


module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
