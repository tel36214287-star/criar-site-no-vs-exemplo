export async function gerar() {
  const tema = document.getElementById("tema").value;
  const out = document.getElementById("result");

  out.textContent = "Buscando notícias...";

  const res = await fetch(`/api/teste?tema=${encodeURIComponent(tema)}`);
  const json = await res.json();

  if (!json.ok) {
    out.textContent = "Erro: " + json.error;
    return;
  }

  out.innerHTML = json.noticias
    .map(n => `📰 <b>${n.titulo}</b>\n${n.descricao}\n🔗 ${n.link}`)
    .join("\n\n");
}
