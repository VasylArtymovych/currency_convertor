const myHeaders = new Headers();
myHeaders.append('apikey', '00c26d156ba3e67096ed04393f9b6fa3');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export default requestOptions;
