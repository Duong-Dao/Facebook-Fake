const posts = require("./index").db("facebook_demo").collection("posts");

const ObjectId = require("mongodb").ObjectId;

const Add = async (data) => {
    let result = await posts.insertOne(data);
    return result;
};

const getAll = async () => {
    const cursor = await posts.find();
    return cursor.toArray();
};

const getById = async (id) => {
    return await posts.findOne({ _id: ObjectId(id) });
};

const updateById = async (id, data) => {
    const result = await posts.replaceOne({ _id: ObjectId(id) }, data);
    return result;
};

const deleteById = async (id) => {
    const result = await posts.deleteOne({ _id: ObjectId(id) });
    return result;
};


module.exports = { Add, getAll, getById, updateById, deleteById };