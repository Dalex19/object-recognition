import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen bg-lime-400 flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-5xl">Hi, I am Home</h1>}
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
