const getDataAPIwithAsync = async () => {
  const API = 'https://5e92be81bbff810016969173.mockapt.to/apt/vl/users';
  const option = {
    method: 'GET',
  };
  let response = await fetch(API, option);
  response = await response.json();
  console.log(response);
};
getDataAPIwtthAsync();
