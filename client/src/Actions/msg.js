const axios = require("axios");

export async function retrieveMsgs() {
  var response;
  await axios.get("api/msg/").then((res) => (response = res.data));
  return response;
}

export async function submitMsg(name, email, subject, msg) {
  var response;
  await axios
    .post("api/msg/", {
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

export async function deleteMsg(id) {
  var response;
  await axios
    .delete(`api/msg/${id}`)
    .then((res) => (response = res.data))
    .catch(function (error) {
      response = "Error";
    });
  return response;
}
