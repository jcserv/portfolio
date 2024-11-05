import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ActiveExpProvider } from "@/context/ActiveExpProvider";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { Index } from "./routes";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ActiveExpProvider>
        <Header />
        <Index />
        <Footer />
        <Analytics />
      </ActiveExpProvider>
    </ThemeProvider>
  );
}