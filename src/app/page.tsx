import Image from "next/image";
import HeadContent from "./head-content";
import About from "./about";
import Portofolio from "./portofolio";

export default function Home() {
  return (
    <main className="flex flex-col w-dvw justify-center items-center">
      <HeadContent />
      <About />
      <Portofolio />
    </main>
  );
}
