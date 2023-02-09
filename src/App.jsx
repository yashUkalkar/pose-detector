import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ExercisePage from "./pages/ExercisePage";

import Background from "./components/Background/Background";
import Header from "./components/Header";

import DetectionContextProvider from "./contexts/DetectionContext";
import CurrentPoseContextProvider from "./contexts/CurrentPoseContext";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Header />
      <DetectionContextProvider>
        <CurrentPoseContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:exercise" element={<ExercisePage />} />
          </Routes>
        </CurrentPoseContextProvider>
      </DetectionContextProvider>
    </BrowserRouter>
  );
}

export default App;
