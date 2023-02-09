import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ExercisePage from "./pages/ExercisePage";

import Background from "./components/Background/Background";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:exercise" element={<ExercisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
