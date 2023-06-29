import { Outlet, Link } from "@remix-run/react";
import MainHeader from "~/components/MainHeader";

export default function CollectionLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
