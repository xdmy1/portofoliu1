import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


export default function Home() {
  return (
    
    <div className="px-4 py-10 md:px-10 lg:px-24 min-h-screen flex flex-col justify-between 
    bg-black
      bg-[url(/grain.gif)]
      bg-opacity-5
      w-full
      h-full
      bg-repeat
      absolute
      overflow-x-hidden
    ">
    
      <Hero />
      <div>
      <hr className="mt-24 mb-6" />
      <Footer />
      </div>
      </div>
    
  );
}
