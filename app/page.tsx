import Hero from "@/components/ui/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import MyProject from "@/components/MyProject";
import Clients from "@/components/Client";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <FloatingNav
        navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "About", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]}
      />
      <Hero />
      <Grid />
      <MyProject />
      <Clients />
      <CanvasRevealEffectDemo />
      <Footer />
    </main>
  );
}
