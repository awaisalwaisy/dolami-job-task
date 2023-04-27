import { Suspense, lazy } from "react";
import { AppLoading, NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
const MarketPage = lazy(() => import("./pages/MarketPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <AppLoading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MarketPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
