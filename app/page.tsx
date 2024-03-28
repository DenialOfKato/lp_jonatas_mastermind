'use client'
import Hero from "./components/Hero";
import Aprender from "./components/Aprender";
import Visualize from "./components/Visualize";
import Square from "./components/Square";
import Inscricao from "./components/Inscricao";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <main className="">
      <Hero />
    </main>
    <div>
      <Aprender />
    </div>
    <div className="z-0">
      <Visualize />
    </div>
     <Square />
     <Inscricao />
     <Footer />
    </>
  );
}
