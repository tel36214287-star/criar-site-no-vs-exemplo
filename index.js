export async function gerar() {
  const tema = document.getElementById("tema").value;
  const out = document.getElementById("result");

  out.innerHTML = "Gerando jornal...";

  const res = await fetch(`/api/jornal?tema=${encodeURIComponent(tema)}`);
  const data = await res.text();

  out.innerHTML = data;
}
