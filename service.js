export async function transformarEmJornal(tema, noticias) {
  const textoBase = noticias
    .map(n => `• ${n.titulo}\n${n.descricao}`)
    .join("\n\n");

  const prompt = `
Você é um editor de jornal temático.
Tema: ${tema}

Reescreva as seguintes notícias como se fossem um jornal completo, criativo e estilizado:

${textoBase}
  `;

  const res = await fetch(
    "https://huggingface-projects-llama-3-2.hf.space/run/predict",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [prompt] })
    }
  );

  const out = await res.json();
  return out.data[0];
}
