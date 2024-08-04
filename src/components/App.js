import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout";

const ContactsPage = lazy(() => import("../page/ContactsPage/ContactsPage"));
const OneContactPage = lazy(() => import("../page/OneContactPage"));
const NotFoundPage = lazy(() => import("../page/NotFoundPage/NotFoundPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ContactsPage />} />
        <Route path="contact/:contactId" element={<OneContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
