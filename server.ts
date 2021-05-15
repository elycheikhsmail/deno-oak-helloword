import { Application, Router } from "https://deno.land/x/oak/mod.ts";

interface IBook {
  id: string;
  title: string;
  author: string;
} ;
const books = new Map<string, IBook>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = { msg: "Hello world!" };
  })
  .get("/books", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  }).get('/port',(ctx) => {ctx.response.body = {PORT:Deno.env.get("PORT")||"1234"}}
  )
  ;

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

//await app.listen({ port: 8000 });
addEventListener("fetch", app.fetchEventHandler());
