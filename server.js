import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
  console.log("Servidor conectando...");
});

// const posts = [
//   {
//     descricao: "Foto teste",
//     imagem: "https://placecats.com/millie/300/150",
//     id: 1,
//   },
//   {
//     descricao: "Gato fazendo yoga",
//     imagem: "https://placecats.com/millie/300/150",
//     id: 2,
//   },
//   {
//     descricao: "Gatinho dormindo",
//     imagem: "https://placecats.com/millie/300/150",
//     id: 3,
//   },
// ];

// function buscarPostPorID(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }

// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorID(req.params.id);
//   res.status(200).json(posts[index]);
// });
