import { router } from "router";
import { NavBar } from "./components";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
