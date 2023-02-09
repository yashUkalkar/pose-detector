import { useState } from "react";

// Components
import Divider from "../components/Divider";
import ExerciseSection from "../components/ExerciseSection";

export default function Home() {
  const [stillExerciseList, setStillExerciseList] = useState([
    {
      title: "Tree",
      image:
        "https://eager-bardeen-e9f94f.netlify.app/static/media/tree.04893f79.jpg",
      description: "In this pose you look like a tree!",
    },
    {
      title: "Chair",
      image:
        "https://eager-bardeen-e9f94f.netlify.app/static/media/chair.f10c11b9.jpg",
      description: "In this pose you look like a chair!",
    },
    {
      title: "Cobra",
      image:
        "https://eager-bardeen-e9f94f.netlify.app/static/media/cobra.fcbccbd9.jpg",
      description: "In this pose you look like some random thing!",
    },
    {
      title: "Warrior",
      image:
        "https://eager-bardeen-e9f94f.netlify.app/static/media/warrior.ad323405.jpg",
      description: "In this pose you look like some random shit!",
    },
    {
      title: "Dog",
      image:
        "https://eager-bardeen-e9f94f.netlify.app/static/media/dog.551aeeb3.jpg",
      description: "In this pose you look like some random shit!",
    },
    {
      title: "Shoulder Stand",
      image:
        "https://eager-bardeen-e9f94f.netlify.app/static/media/shoulderstand.784f28f4.jpg",
      description: "In this pose you look like some random shit!",
    },
  ]);
  const [motionExerciseList, setMotionExerciseList] = useState([
    {
      title: "Bicep Curls",
      image:
        "https://www.aleanlife.com/wp-content/uploads/2015/06/bicep-hammer-curls-490x490.jpg",
      description:
        "This exercise targets the bicep muscles and increases arm strength",
    },
    {
      title: "Lunges",
      image:
        "https://media.istockphoto.com/id/1408601650/vector/man-doing-anjaneyasana-or-low-lunge-yoga-pose-vector-illustration-in-trendy-style.jpg?s=612x612&w=0&k=20&c=PRmvTPVrGsRZn3dNbV7ADVBCvN-GHKnPkTwDFLpZ2ok=",
      description:
        "This exercise helps develop the thigh muscles and strengthens the leg",
    },
    {
      title: "Chest Press",
      image:
        "data:image/png;base64,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",
      description:
        "This exercise helps develop the pectoral muscles and strengthens the body core and improves your arm's range of motion",
    },
    {
      title: "Deadlift",
      image: "",
      description: "",
    },
    {
      title: "Squats",
      image: "",
      description: "",
    },
  ]);

  return (
    <>
      <ExerciseSection title="Still Exercises" exercises={stillExerciseList} />
      <Divider />
      <ExerciseSection
        title="Motion Exercises"
        exercises={motionExerciseList}
      />
    </>
  );
}
