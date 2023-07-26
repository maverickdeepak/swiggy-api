import Server from "./server";

let server = new Server().app;
let PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running at port ${PORT} 🔥`);
});
