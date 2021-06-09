const getMethod = async (url) => {
  console.log("GET-----");

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export default getMethod;
