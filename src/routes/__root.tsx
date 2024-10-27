import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react"

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Analytics />
    </>
  ),
});
