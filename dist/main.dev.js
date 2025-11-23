"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gerar = gerar;

function gerar() {
  var tema, out, res, json;
  return regeneratorRuntime.async(function gerar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          tema = document.getElementById("tema").value;
          out = document.getElementById("result");
          out.textContent = "Buscando notícias...";
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("/api/teste?tema=".concat(encodeURIComponent(tema))));

        case 5:
          res = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(res.json());

        case 8:
          json = _context.sent;

          if (json.ok) {
            _context.next = 12;
            break;
          }

          out.textContent = "Erro: " + json.error;
          return _context.abrupt("return");

        case 12:
          out.innerHTML = json.noticias.map(function (n) {
            return "\uD83D\uDCF0 <b>".concat(n.titulo, "</b>\n").concat(n.descricao, "\n\uD83D\uDD17 ").concat(n.link);
          }).join("\n\n");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}