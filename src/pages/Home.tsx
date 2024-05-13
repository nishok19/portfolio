import { Button } from "@material-tailwind/react";

const Home = ({ menuOpened }: any) => {
  // menuOpened ? null :

  if (menuOpened) return <section className="h-screen w-screen"></section>;

  return (
    <section className="h-screen w-screen">
      <div className="flex justify-start pt-[20%] ml-[10%] h-full">
        <div className="flex flex-col">
          <h2 className="font-[400] text-[48px]">
            Solve Problems! Write Code!
          </h2>
          <h5 className="text-[24px] mt-2">
            I'm Nishok, the one with the code.
          </h5>
          <Button size="lg" className="w-max mt-5">
            Contact Nishok
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
