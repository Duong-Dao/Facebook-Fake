const Koa = require("koa");
const router = require("./routes");

const app = new Koa();

app.use(router);
app.use(ctx => {
    ctx.body = "Koa";
});

app.listen(3000, () => console.log("Running"));
