import { Suspense, lazy } from "react";
import { AppCartDrawer, AppLoading, NavBar } from "./components/shared";
import { Routes, Route } from "react-router-dom";
import useGlobalStore from "stores/global-store";
import Cart from "components/Cart";
const MarketPage = lazy(() => import("./pages/MarketPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ThanksPage = lazy(() => import("./pages/ThanksPage"));

const App: React.FC = () => {
  const { isCartDrawer, setCartDrawer } = useGlobalStore();

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
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThanksPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>

      {/* Drawer */}
      <AppCartDrawer
        isOpen={isCartDrawer}
        onCartIconClick={() => setCartDrawer(!isCartDrawer)}
      >
        <Cart />
        {/* CART GO HERE */}
      </AppCartDrawer>
    </>
  );
};

export default App;
