import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
