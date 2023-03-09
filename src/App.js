import "./style/main.css";
import SideBar from "./SideBar/SideBar";
import About from "./pages/About/About";

function App() {
  return (
    <main className="app">
      <SideBar />;
      <About />
    </main>
  );
}

export default App;
