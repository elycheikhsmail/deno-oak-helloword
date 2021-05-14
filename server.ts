// deno run --allow-net server.ts
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

console.log("start server at 127.0.0.1:8000")
await app.listen("127.0.0.1:8000");