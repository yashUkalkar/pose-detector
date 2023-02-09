import { useLocation } from "react-router-dom";

import DefaultImage from "../assets/default-exercise-image.jpg";

export default function ExercisePage() {
  const location = useLocation();
  const { title, image, description } = location.state;

  return (
    <main className="text-white bg-opacity-50 m-10 flex justify-evenly">
      <section className="w-1/2 flex flex-col justify-between items-start gap-20">
        <h2 className="text-3xl font-bold py-3 mt-5">{title}</h2>

        <h5 className="w-[40ch] text-lg mt-5">
          {description
            ? description
            : "No information found for this exercise. We are working on it! Sorry for the inconvenience"}
        </h5>

        <button className="bg-white text-black font-bold p-4 px-10 rounded-2xl hover:bg-black hover:text-white hover:scale-110 transition active:scale-90">
          Start!
        </button>
      </section>

      <section className="flex flex-col justify-around">
        <div className="bg-red-200 w-full max-w-[300px] max-h-[300px] overflow-hidden mb-5">
          <img
            className="w-full object-cover"
            src={image ? image : DefaultImage}
            alt={title}
          />
        </div>

        <div>Information on exercise benefits</div>
      </section>
    </main>
  );
}
