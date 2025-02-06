import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function App() {

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
         <main className="flex-1 flex h-screen flex-col">
                 <Header />
                 <section className="bg-bgGray overflow-auto h-full p-4"><Outlet /></section>
         </main>
    </div>
  );
}

export default App;
