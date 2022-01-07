const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../../../apis/posts.api');

const router = require('koa-router')();


// router.get("/", (ctx, next) => {
//     return new Promise((resolve, reject) => {
//         ctx.body = {
//             "data": [
//                 {
//                     "postID": 1,
//                     "description": "Bài post số 1"
//                 },
//                 {
//                     "postID": 2,
//                     "description": "Bài post số 2"
//                 }
//             ]
//         }
//         resolve()
//     })
// });

router.get("/", async ctx => {
    ctx.response.status = 200;
    ctx.body = await getPosts();
});

router.get("/:id", async ctx => {
    const id = ctx.params.id;
    ctx.body = await getPostById(id);
});

// router.post("/", async ctx=>{

// });

// router.put("/", async ctx => {

// });

router.delete("/:id", async ctx => {
    const id = ctx.params.id;
    return await deletePost(id);
});

module.exports = router.routes();