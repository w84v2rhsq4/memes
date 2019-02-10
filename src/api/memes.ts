export default {
  fetchMemes: async (callback: Function) => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();

    callback(data.data.memes);
  }
};
