const { Add, getAll, getById, updateById, deleteById } = require("../data/user.dao");

const createUser = async (data) => {

};

const getUsers = async () => {
    return await getAll();
};

const getUserById = async (id) => {
    return await getById(id);
};


const updateUser = async (id, data) => {
    return await updateById(id, data);
};

const deleteUser = async (id) => {
    return await deleteById(id);
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };