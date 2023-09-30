import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getData } from "../helpers";

export const YoutubeContext = createContext();

//contetxt deki verileri butun uygulamaya saglar

export const YoutubeProvider = ({ children }) => {
  const [selected, setSelected] = useState({
    name: "Anasayfa",
    type: "home",
  });

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    if (selected.type === "home") {
      //anasayfa videolar
      getData("/home/").then((data) => setVideos(data.contents));
    } else {
      //kategori videolari
      getData(`/search/?q=${selected.name.toLowerCase()}`).then((data) =>
        setVideos(data.contents)
      );
    }
  }, [selected]);

  return (
    <YoutubeContext.Provider value={{ selected, setSelected, videos }}>
      {children}
    </YoutubeContext.Provider>
  );
};
