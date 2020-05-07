const axios = require("axios");

export async function retrieveMsgs() {
  var response;
  await axios
    .get("http://localhost:5000/api/msg/")
    .then((res) => (response = res.data));
  return response;
}

export async function submitMsg(name, email, subject, msg) {
  var response;
  await axios
    .post("http://localhost:5000/api/msg/", {
      name: name,
      subject: subject,
      email: email,
      message: msg,
    })
    .then((res) => (response = res.data))
    .catch(function (error) {
      response = "Error";
    });
  return response;
}
