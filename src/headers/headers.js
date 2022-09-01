const myHeaders = new Headers();
myHeaders.append("apikey", "5PVBKnyUWDzJyz5ksWX8Nf3NojAoUzIw");

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export default requestOptions;
