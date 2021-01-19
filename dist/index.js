"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _router = require('./router'); var _router2 = _interopRequireDefault(_router);

const log = [];

const app = _express2.default.call(void 0, );
const port = process.env.PORT || 3333;

app.use((req, res, next) => {
  console.log(`Metodo: ${req.method}, URL:${req.url}, IP: ${req.ip}, Parametro ${req.params}`)
  log.push(`Metodo: ${req.method}, URL:${req.url}, IP: ${req.ip}, Parametro ${req.params}`);
  next();
});

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({
  extended: false
}));
app.use(_cors2.default.call(void 0, ));

app.use(_router2.default);

app.listen(port);



exports.log = log;