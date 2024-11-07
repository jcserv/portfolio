import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ActiveExpProvider } from "@/context/ActiveExpProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Index } from "./routes";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ActiveExpProvider>
        <Header />
        <Index />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </ActiveExpProvider>
    </ThemeProvider>
  );
}