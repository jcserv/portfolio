import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ActiveExpProvider } from "@/context/ActiveExpProvider";
import { Index } from "@/routes";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ActiveExpProvider>
        <Header />
        <Index />
        <Footer />
      </ActiveExpProvider>
    </ThemeProvider>
  );
}
