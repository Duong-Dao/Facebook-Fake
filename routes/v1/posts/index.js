const router = require('koa-router')()
router.get("/", (ctx, next) => {
    return new Promise((resolve, reject) => {
        ctx.body = {
            "data": [
                {
                    "postID": 1,
                    "description": "Bài post số 1"
                },
                {
                    "postID": 2,
                    "description": "Bài post số 2"
                }
            ]
        }
        resolve()
    })
})
module.exports = router.routes();