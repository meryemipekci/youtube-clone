import axios from "axios";
import { options } from "../constants";

axios.defaults.baseURL = "https://youtube-v31.p.rapidapi.com";
// "https://youtube138.p.rapidapi.com";

//parametre olarak url alip, istek atar
//verileri fonksiyonun cagrıldıgı yere yonlendirir

export const getData = async (url) => {
  try {
    const res = await axios.get(url, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
