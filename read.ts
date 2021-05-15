// export PORT=4000
// deno run --allow-env read.ts 
const PORT = Deno.env.get("PORT") || "3306"
console.log({PORT})