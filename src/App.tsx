import { Peel } from "@/components/peel";

const App = () => {
  return (
    <Peel
      side="top"
      mode="cursor"
      reveal={280}
      zone={220}
      curl={320}
      bow={75}
      shade={0.25}
      shine={1}
      className="fixed inset-0 h-screen w-screen"
      under={
        <div className="relative h-full w-full overflow-hidden font-mono capitalize">
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src="/home.mp4"
          />
          <nav
            aria-label="Primary navigation"
            className="relative flex min-h-[10vh] w-full flex-wrap items-center justify-around gap-4 px-4 py-4"
          >
            <a href="#" className="text-inherit no-underline">
              <h1>Triven</h1>
            </a>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 rounded-full border border-gray-200 bg-gray-100 px-5 py-2">
              <a href="#">home</a>
              <a href="#">about</a>
              <a href="#">Expertise</a>
              <a href="#">Projects</a>
              <a href="#">Research</a>
              <a href="#">Contact</a>
            </div>

            <a
              href="#"
              className="shrink-0 rounded-full bg-black px-4 py-2 text-gray-100"
            >
              get started
            </a>
          </nav>
        </div>
      }
    >
      <main className="h-screen w-screen overflow-hidden bg-black font-mono capitalize">
        <div className="w-full h-full bg-black p-10">
          <div className="bg-white font-custom h-full w-full pt-5 px-2 flex flex-col justify-between p-10">
            <div className="flex flex-col">
                <div className="text-[14vh] flex justify-between pb-10">
                <h1>Trivia𔓘</h1>
                <h1>Dhaneshwari</h1>
              </div>
              <div className="px-5 text-base/8">
                <h1>this is space for<br /> discovery</h1>
              </div>
              <div className="w-[40%] pt-10 pl-5 font-mono flex flex-col gap-2">
                <div className="w-[50%] flex justify-between text-2xl">
                  <h1>About</h1>
                  <h1>me</h1>
                </div>
                <p className="font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, nostrum!</p>
              </div>
            </div>
            <div className="pl-5">
              <h1>explore page</h1>
            </div>
          </div>
        </div>
      </main>
    </Peel>
  );
};

export default App;