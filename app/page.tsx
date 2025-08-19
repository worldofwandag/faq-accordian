import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <div className="bg-[#F8EEFF] max-w-[1440px] mx-auto min-h-screen relative ">
        <header className=" bg-[url('./assets/images/background-pattern-desktop.svg')] w-full h-full absolute bg-no-repeat bg-top top-[0] left-[0]">
          <div className="mx-auto h-full max-w-[600px] flex justify-center">
            <div className="mt-40">
              <Card />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
