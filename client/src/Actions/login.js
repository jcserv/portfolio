const axios = require("axios");

export async function login(password) {
  var response;
  await axios
    .post("api/login", { password: password })
    .then((res) => (response = res.data));
  return response;
}
