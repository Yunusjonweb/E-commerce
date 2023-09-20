import "../style/style.css";
import Header from "./components/Header/index";
import Sidebar from "./components/Sidebar/index";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
