const serve = require("koa-static");
const Koa = require("koa");
const path = require("path");
const app = new Koa();


// or use absolute paths
app.use(serve(path.join(__dirname, "/../frontend/html")));

app.listen(3000);

console.log('listening on port 3000');