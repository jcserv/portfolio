import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ActiveExpProvider } from "@/context/ActiveExpProvider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";

export const Route = createRootRoute({
  component: () => (
    <>
      <ActiveExpProvider>
        <Header />
        <Outlet />
        <Footer />
        <Analytics />
      </ActiveExpProvider>
    </>
  ),
});
