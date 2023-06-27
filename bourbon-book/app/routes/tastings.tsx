import { Outlet, Link } from "@remix-run/react";
import MainHeader from "~/components/MainHeader";

export default function TastingsLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
