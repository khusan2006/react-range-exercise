import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
    <div className="flex h-screen gap-6 mt-8 px-6">
      <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
