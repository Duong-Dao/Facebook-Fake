const { createUser, getUsers, getUserById, updateUser, deleteUser } = require("../../../apis/users.api");


const router = require("koa-router")();

router.get("/", async ctx => {
    ctx.response.status = 200;
    ctx.body = await getUsers();
});

router.get("/:id", async ctx => {
    const id = ctx.params.id;
    ctx.body = await getUserById(id);
});

// router.post("/", async ctx=>{

// });

// router.put("/", async ctx => {

// });

router.delete("/:id", async ctx => {
    const id = ctx.params.id;
    return await deleteUser(id);
});


module.exports = router.routes();