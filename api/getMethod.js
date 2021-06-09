const getMethod = async (url = 'http://localhost:8080/group/list') => {
  console.log('GET-----');

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log('getMethod false-----');
      return false;
    }
  } catch (e) {
    console.log('getMethod false-----');
    return false;
  }
};

export default getMethod;
