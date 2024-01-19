import { useState } from "react";

const data = [
  "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFtPvGYD0U_JaEDnlv_lVlE2g6J3-Xq4qjqRiWux8NGhkpMeUrka8wggp7UfQss88crE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tQAM_REfz7JeSv3LSRwAmaLx6xaWdyLwekzOvWN1vJk-V--9bqQwJUefjBGgoucxqhw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tQAM_REfz7JeSv3LSRwAmaLx6xaWdyLwekzOvWN1vJk-V--9bqQwJUefjBGgoucxqhw&usqp=CAU",
];
const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handeler = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          const idx =
            activeImageIndex - 1 < 0 ? data.length - 1 : activeImageIndex - 1;
          setActiveImageIndex(idx);
        }}
      >
        Previous
      </button>

      {data.map((url, i) => (
        <img
          key={url}
          src={url}
          className={
            "w-[700px] h-[500px] align items-center " +
            (activeImageIndex === i ? "block" : "hidden")
          }
          alt="wallpaper"
        />
      ))}
      <button onClick={handeler}>Next</button>
    </div>
  );
};
export default ImageSlider;
