import { Suspense } from "react";
import { Container } from "../GlobalStyled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
