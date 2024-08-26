import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import ShowPenjualan from "../pages/penjualan/showPenjualan";
import ShowKomisi from "../pages/komisi/showKomisi";
import Login from "../pages/auth/login";
import Logout from "../pages/auth/logout";
// import ProtectedRoute from "./protectedRoute";
import ShowMarketing from "../pages/marketing/showMarketing";
import ShowPayment from "../pages/payment/showPayment";


function Web() {
    return (
      <Router>
          <Routes>
            <Route
              path="/login"
              element={
                  <Login />
              }
            />
            <Route 
              path="/logout" 
              element={
                <Logout/>
              } 
            />
            <Route
              path="/"
              element={
                // <ProtectedRoute>
                    <Home />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/penjualan"
              element={
                // <ProtectedRoute>
                  <ShowPenjualan />
                // </ProtectedRoute>
              }
            />        
            <Route
              path="/payment"
                element={
                  // <ProtectedRoute>
                    <ShowPayment />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/komisi"
                element={
                  // <ProtectedRoute>
                    <ShowKomisi />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/marketing"
                element={
                  // <ProtectedRoute>
                    <ShowMarketing />
                  // </ProtectedRoute>
                }
              />
          </Routes>
      </Router>
    )
  }
  
  export default Web