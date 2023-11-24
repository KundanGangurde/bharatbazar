// import logo from './image/logo.png';
import './App.css';
import NavBar from './components/NavBar';
// import ButtonGrp from './components/ButtonGrp';
// import MalacheMastar from './components/Mastar/MalacheMastar';
import HishobPatti from './components/Reports/HishobPatti';
// import { Typography } from '@mui/material';
// import CashReceipt from './components/Reports/CashReceipt';
import AddDetails from './components/AddDetails';


function App() {
  return (
    <> 
      <NavBar />     
      {/* <ButtonGrp/>   */}
      {/* <MalacheMastar />     */}
      <HishobPatti/>    
      {/* <CashReceipt/>   */}
      <AddDetails/>
    </>
  );
}

export default App;
