import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/MainHeader";
import { requireUserSession } from "~/data/auth.server";

export default function SpiritsLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export async function loader({ request }) {
  const userId = await requireUserSession(request);
  return userId;
}
