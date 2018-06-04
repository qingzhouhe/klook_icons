const Koa = require('koa');
const serve = require("koa-static");
const router = require("koa-router")();
const path = require("path");
const mime = require("mime");
const fs = require("fs");

const app = new Koa();

router.get('/download', async function(ctx) {

  let file = path.join(__dirname + '/icons/icons8-coins/icons8-coins_50.png');
  let filename = path.basename(file);
  let mimetype = mime.lookup(file);

  ctx.set('Content-disposition', 'attachment; filename=' + filename);
  ctx.set('Content-type', mimetype);

  ctx.body = fs.createReadStream(file);

  // ctx.body = "Q is number 1!";
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(__dirname,{ extensions: ['html', 'css', 'js']}));

app.listen(3000);