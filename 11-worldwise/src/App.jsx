import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// Main Pages | LETS LAZYLOAD THEM
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

// Build Before Lazy Loading
// dist/index.html                   0.49 kB │ gzip:   0.32 kB
// dist/assets/index-6tADdXHc.css   30.23 kB │ gzip:   5.08 kB
// dist/assets/index-_XWbDawz.js   567.83 kB │ gzip: 167.64 kB
// Lazy Loading
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// After Lazy loading 
// dist/index.html                           0.49 kB │ gzip:   0.32 kB
// dist/assets/Logo-BYigXoGP.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-B5O0XBJ4.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-ftt4lYil.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-Citt4ZPj.css         0.49 kB │ gzip:   0.29 kB
// dist/assets/PageNav-CcPXYRy9.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-CNeo0IHn.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-BkN33k0V.css           26.57 kB │ gzip:   4.38 kB
// dist/assets/Product.module-Be8LLB42.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-BtL6CCMZ.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-DHDHO728.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-BQtafOXV.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-CHD5O4qI.js           0.65 kB │ gzip:   0.42 kB
// dist/assets/Homepage-iN09XXe0.js          0.67 kB │ gzip:   0.42 kB
// dist/assets/Product-CnXEOVW8.js           0.85 kB │ gzip:   0.49 kB
// dist/assets/Login-b8srbzwC.js             1.02 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-DmtZMjcM.js       156.73 kB │ gzip:  46.09 kB
// dist/assets/index-Dw2NhI_P.js           408.92 kB │ gzip: 120.93 kB
function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* <Route path="/" element={<Homepage />}></Route> OR index*/}
              <Route index element={<Homepage />}></Route>
              <Route path="product" element={<Product />}></Route>
              <Route path="pricing" element={<Pricing />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
