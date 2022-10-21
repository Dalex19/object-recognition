import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-green-500 to-emerald-900 flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/preview"
          element={<h1 className="text-5xl">Hi, I am App</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
