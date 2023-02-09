import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

import DefaultImage from "../assets/default-exercise-image.jpg";

export default function ExerciseCard(props) {
  const { title, image, description } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setIsFlipped(!isFlipped)}
      onMouseLeave={() => setIsFlipped(!isFlipped)}
      className="mx-2 rounded-lg overflow-hidden bg-white active:scale-95 transition"
      onClick={() => navigate(`/${title}`, { state: props })}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardFront title={title} image={image} />
        <CardBack title={title} description={description} />
      </ReactCardFlip>
    </div>
  );
}

const CardFront = (props) => {
  const { title, image } = props;
  return (
    <div className="h-[250px] flex flex-col">
      <h4 className="text-center text-white bg-black text-xl p-2">{title}</h4>
      <div className="overflow-hidden">
        <img
          className="w-full"
          src={image ? image : DefaultImage}
          alt={title}
        />
      </div>
    </div>
  );
};

const CardBack = (props) => {
  const { title, description } = props;
  return (
    <div className="h-[250px] bg-white p-2">
      <h4 className="text-center text-white bg-black text-xl p-2 mb-5">
        {title}
      </h4>

      {description ? (
        <h5 className="">{description}</h5>
      ) : (
        <h5 className="text-center">No information found!</h5>
      )}
    </div>
  );
};
