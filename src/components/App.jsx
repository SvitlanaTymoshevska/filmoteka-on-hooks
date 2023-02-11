import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { HomeHeader } from "components/HomeHeader/HomeHeader";
import { LibraryHeader } from "components/LibraryHeader/LibraryHeader";
import { Footer } from "components/Footer/Footer";

const Home = lazy(() => import("pages/Home/Home"));
const Library = lazy(() => import("pages/Library/Library"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Footer />}>
        <Route path="/" element={<HomeHeader />}> 
          <Route index element={<Home />} />
        </Route>
        <Route path="/library" element={<LibraryHeader />}>
          <Route index element={<Library />} />
        </Route>
      </Route>
    </Routes>
  );
};