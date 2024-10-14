import { Link } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./components/HomePage";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Body content with Sidebar and Main content */}
      <div className="flex flex-1">
        <SideBar />
        <MainContent />
      </div>
      <div></div>
    </div>
  );
}

export default App;
