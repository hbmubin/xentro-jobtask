import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function App() {

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
         <main className="flex-1">
                 <Header />
                 <Outlet />
         </main>
    </div>
  );
}

export default App;
