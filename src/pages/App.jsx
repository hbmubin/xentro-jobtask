import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useContext } from "react";
import { FuncContext } from "../provider/FuncProvider";

function App() {
  const { hideBar, setHideBar } = useContext(FuncContext);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
         <main className="flex-1 flex h-screen flex-col">
                 <Header />
                 <section className={`bg-bgGray dark:bg-slate-900 overflow-auto h-full sm:p-6 p-3 ${hideBar ? 'lg:w-full w-screen' : 'lg:w-[calc(100vw-320px)] xl:w-full w-screen'} duration-0`}><Outlet /></section>
         </main>
    </div>
  );
}

export default App;
