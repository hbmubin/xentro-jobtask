import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useContext, useEffect } from "react";
import { FuncContext } from "../provider/FuncProvider";
import useWidth from "../hooks/useWidth";

function App() {
  const { hideBar, setHideBar } = useContext(FuncContext);
  const isSmall = useWidth()

  useEffect(() => {
    if (isSmall) {
      setHideBar(true);
    }
  }, [isSmall, setHideBar]);

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
