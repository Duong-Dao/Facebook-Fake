const users = require("./index").db("facebook_demo").collection("users");

const ObjectId = require("mongodb");

const Add = async (data) => {
    console.log(data);
};


const getAll = async () => {
    const cursor = await users.find();
    return cursor.toArray();
};


const getById = async (id) => {
    return await users.findOne({ _id: ObjectId(id) });
};


const updateById = async (id, data) => {
    console.log(await users.findOne({ _id: ObjectId(id) }));
};


const deleteById = async (id) => {
    return await users.deleteOne({ _id: ObjectId(id) });
};

module.exports = { Add, getAll, getById, updateById, deleteById };

