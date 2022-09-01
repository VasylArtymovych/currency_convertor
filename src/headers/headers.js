const myHeaders = new Headers();
myHeaders.append('apikey', 'MZ7UQiqecnRhg5CLb1kX1yFib6yVFTFn');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export default requestOptions;
