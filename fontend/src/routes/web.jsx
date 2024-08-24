import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import ShowPenjualan from "../pages/penjualan/showPenjualan";
import ShowKomisi from "../pages/komisi/showKomisi";
import CreatePenjualan from "../pages/penjualan/createPenjualan";


function Web() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/penjualan" element={<ShowPenjualan/>} />
            <Route path="/penjualan/create" element={<CreatePenjualan/>} />
            <Route path="/komisi" element={<ShowKomisi/>} />
          </Routes>
      </Router>
    )
  }
  
  export default Web