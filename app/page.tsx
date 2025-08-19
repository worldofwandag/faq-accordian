import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
     <div className="bg-[#F8EEFF] max-w-[1444px] mx-auto min-h-screen relative z-[-1]">
        <header className=" bg-[url('./assets/images/background-pattern-desktop.svg')] w-full h-full absolute bg-no-repeat bg-top top-[0] left-[0]">
          <div className="mx-auto h-full w-[600px] flex items-center justify-center">
            <Card />
          </div>
        </header>

     </div>
    </>
  );
}
