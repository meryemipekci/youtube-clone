import { categories } from "../constants";
import { useContext } from "react";
import { YoutubeContext } from "../context/YoutubeContext";

const SideNav = () => {
  //todo  **abone olma
  const { selected, setSelected } = useContext(YoutubeContext);
  console.log(selected);

  return (
    <div className="flex flex-col p-4">
      {categories.map(
        (i, index) => (
          console.log(categories),
          (
            <div
              //tiklaninca tipi kategori secenekleri context e aktarir
              onClick={() => {
                if (i.type !== "menu") {
                  setSelected(i);
                }
              }}
              key={index}
            >
              <div
                // seçili ktargorinin ismi ekrna bastığıminkiyle eşleşirse arkaplanını değiştir
                className={` ${
                  selected.name === i.name && "bg-[#2d2d2d]"
                } text-white flex items-center gap-2 p-2 py-4 text-base md:text-lg cursor-pointer rounded-md transition hover:bg-[#2d2d2d]`}
              >
                {i.icon}
                <span>{i.name}</span>
              </div>
              {i.divider && <hr />}
            </div>
          )
        )
      )}
    </div>
  );
};

export default SideNav;
