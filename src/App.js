import { Routes, Route } from "react-router-dom";
import AllContactsPage from "./page/ContactsPage/ContactsPage";
import { lazy } from "react";

const OneContactPage = lazy(() => import("./page/OneContactPage"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AllContactsPage />} />
      <Route path="/contact" element={<OneContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
