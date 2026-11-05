import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Gratitude } from "@/components/sections/gratitude/Gratitude";
import { Hero } from "@/components/sections/hero/Hero";
import { Memories } from "@/components/sections/memories/Memories";
import { Wishes } from "@/components/sections/wishes/Wishes";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Gratitude />
        <Memories />
        <Wishes />
      </main>
      <Footer />
    </>
  );
}
