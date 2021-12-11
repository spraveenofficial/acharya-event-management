const axios = require("axios");

class Auth {
  async aliveLogin(auid, password) {
    const response = await axios({
      url: process.env.ALIVE_LOGIN,
      method: "POST",
      data: {
        username: auid,
        password: password,
        usertype: "STUDENT",
      },
    });
    return response.data.token
  }
}

module.exports = new Auth();
