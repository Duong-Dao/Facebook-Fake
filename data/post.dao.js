const posts = require("./index").db("facebook_demo").collection("posts");

const ObjectId = require("mongodb").ObjectId;

const Add = async (data) => {
    console.log(data);
};

const getAll = async () => {
    const cursor = await posts.find();
    return cursor.toArray();
};

const getById = async (id) => {
    return await posts.findOne({ _id: ObjectId(id) });
};

const updateById = async (id, data) => {
    console.log(await posts.findOne({ _id: ObjectId(id) }));
};

const deleteById = async (id) => {
    return await posts.deleteOne({ _id: ObjectId(id) });
};


module.exports = { Add, getAll, getById, updateById, deleteById };