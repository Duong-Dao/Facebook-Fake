const Router = require("koa-router");
const router = new Router();
const posts = require('./posts');
const users = require('./users');
router.use("/posts", posts);
router.use("/users", users);
module.exports = router.routes();
