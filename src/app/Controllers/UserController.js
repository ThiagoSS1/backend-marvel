import axios from "axios";
import { log } from "../../index";
import md5 from "md5";

class UserController {
  constructor() {
    this.apikey = '8511cbdf6ae102f0c00291bac4abc769251ab212';
    this.publicKey = '0815706caa1f1e48d329f76973de1681';
    this.ts = new Date().getTime();
    this.hash = md5(this.ts+this.apikey+this.publicKey);
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
    const response = axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
    return response;

  }

 async getCharacter(characterId) {

    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${this.pu}&hash=${this.hash}&ts=${this.ts}`;

    const hero = axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
    return hero;
  }

  getLog() {
    return log;
  }


}

export default UserController;