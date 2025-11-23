"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformarEmJornal = transformarEmJornal;

function transformarEmJornal(tema, noticias) {
  var textoBase, prompt, res, out;
  return regeneratorRuntime.async(function transformarEmJornal$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          textoBase = noticias.map(function (n) {
            return "\u2022 ".concat(n.titulo, "\n").concat(n.descricao);
          }).join("\n\n");
          prompt = "\nVoc\xEA \xE9 um editor de jornal tem\xE1tico.\nTema: ".concat(tema, "\n\nReescreva as seguintes not\xEDcias como se fossem um jornal completo, criativo e estilizado:\n\n").concat(textoBase, "\n  ");
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://huggingface-projects-llama-3-2.hf.space/run/predict", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              data: [prompt]
            })
          }));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          out = _context.sent;
          return _context.abrupt("return", out.data[0]);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}