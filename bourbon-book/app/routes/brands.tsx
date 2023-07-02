import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/MainHeader";
import { requireUserSession } from "~/data/auth.server";
import SideNav from "~/components/SideNav";

export default function BrandsLayout() {
  return (
    <>
      {/* <MainHeader /> */}
      <SideNav />
      <Outlet />
    </>
  );
}

export async function loader({ request }) {
  const userId = await requireUserSession(request);
  return userId;
}
