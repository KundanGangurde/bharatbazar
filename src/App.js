// import logo from './image/logo.png';
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HishobPatti from "./components/Reports/HishobPatti";
import CashReceipt from "./components/Reports/CashReceipt";
import CodeRegister from "./components/CodeRegister";
import UdhariReport from "./components/Reports/UdhariReport";
import SellReport from "./components/Reports/SellReport";
import CustomerReport from "./components/Reports/CustomerReport";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/HishobPatti" element={<HishobPatti />} />
          <Route exact path="/CashReceipt" element={<CashReceipt />} />
          <Route exact path="/Code_Register/*" element={<CodeRegister />} />
          <Route exact path="/UdhariReport" element={<UdhariReport />} />
          <Route exact path="/SellReport" element={<SellReport />} />
          <Route exact path="/CustomerReport" element={<CustomerReport />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
