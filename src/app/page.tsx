
import ChatBar from "./components/ChatBar/ChatBar";
import Main from "./components/Main/Main";
import { Providers } from "./features/Redux/provider";

export default function Home() {
  return (
    <Providers>
    <main className=" flex min-h-fit overflow-hidden">
      <div className="flex" style={{ width: "1280px" }}>
        <div className="w-2/5 flex justify-center h-full">
          <ChatBar />
        </div>
        <div className="w-3/5">
          <Main />
        </div>
      </div>
    </main>
    </Providers>

  );
}
