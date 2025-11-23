"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gerar = gerar;

function gerar() {
  var tema, out, res, data;
  return regeneratorRuntime.async(function gerar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          tema = document.getElementById("tema").value;
          out = document.getElementById("result");
          out.innerHTML = "Gerando jornal...";
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("/api/jornal?tema=".concat(encodeURIComponent(tema))));

        case 5:
          res = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(res.text());

        case 8:
          data = _context.sent;
          out.innerHTML = data;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}