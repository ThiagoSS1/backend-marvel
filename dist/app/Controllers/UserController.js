"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _index = require('../../index');
var _md5 = require('md5'); var _md52 = _interopRequireDefault(_md5);

class UserController {
  constructor() {
    this.apikey = '8511cbdf6ae102f0c00291bac4abc769251ab212';
    this.publicKey = '0815706caa1f1e48d329f76973de1681';
    this.ts = new Date().getTime();
    this.hash = _md52.default.call(void 0, this.ts+this.apikey+this.publicKey);
  }

  async getCharacters(offset, limit) {

    if (limit <= 0) {
      return 'valor precisa ser maior que 0';
    }

    if (!limit) {
      limit = 100;
    }

    if (!offset) {
      offset = 0;
    }

    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${this.publicKey}&hash=${this.hash}&ts=${this.ts}&limit=${limit}&offset=${offset}`;
    console.log(url)
    const response = _axios2.default
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
    return response;

  }

 async getCharacter(characterId) {

    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${this.pu}&hash=${this.hash}&ts=${this.ts}`;

    const hero = _axios2.default
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
    return hero;
  }

  getLog() {
    return _index.log;
  }


}

exports. default = UserController;