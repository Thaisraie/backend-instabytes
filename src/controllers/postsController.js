import fs from "fs";
import { criarPost, getTodosPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}

export async function criarNovoPost(req, res) {
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.log(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  try {
    const postCriado = await criarPost(novoPost);
    const imagemtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemtualizada);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json;
    ({ Erro: "Falha na requisição" });
  }
}
