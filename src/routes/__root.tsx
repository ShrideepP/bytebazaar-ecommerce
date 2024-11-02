import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />

      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
