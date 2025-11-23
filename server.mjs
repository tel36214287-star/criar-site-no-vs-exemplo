import express from "express";
import fetch from "node-fetch";
import { XMLParser } from "fast-xml-parser";

const app = express();
app.use(express.static("public"));

app.get("/api/teste", async (req, res) => {
  const tema = req.query.tema || "brasil";
  
  try {
    const rssURL = `https://news.google.com/rss/search?q=${encodeURIComponent(tema)}`;

    const xml = await fetch(rssURL).then(r => r.text());

    if (!xml || xml.length < 50) {
      return res.json({ ok: false, error: "RSS vazio ou inválido." });
    }

    const json = new XMLParser().parse(xml);
    const items = json?.rss?.channel?.item;

    if (!items) {
      return res.json({ ok: false, error: "Nenhuma notícia encontrada." });
    }

    const noticias = items.slice(0, 5).map(i => ({
      titulo: i.title,
      descricao: i.description?.replace(/<[^>]+>/g, ""),
      link: i.link
    }));

    res.json({
      ok: true,
      noticias
    });

  } catch (err) {
    res.json({ ok: false, error: "Erro ao buscar notícias." });
  }
});

app.listen(3000, () => console.log("http://localhost:3000"));
