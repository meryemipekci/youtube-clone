import { useState } from "react";

const StringArea = ({ text, maxChar }) => {
  console.log("asnckjv", text);
  const [showFull, setShowFull] = useState(false);

  //Metnin bolunup bolunmeyecegine karar verme
  let shortText = text;
  if (text?.length > maxChar && !showFull) {
    shortText = text.slice(0, maxChar) + "...Daha Fazla";
  }
  return (
    <p onClick={() => setShowFull(!showFull)}>
      {shortText.split("\n").map((descLine, index) => (
        <span key={index}>
          {descLine}
          <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
