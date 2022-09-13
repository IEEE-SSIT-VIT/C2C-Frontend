import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import NotFound from "./components/Notfound/NotFound";
import UserDashboard from "./components/Dashboard/UserDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import CoodDashboard from "./components/Dashboard/CoodDashboard";
import { Box } from "@mui/material";
import Verify from "./components/Verification/Verify";



function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline/>
    <Box minHeight="100vh" sx={{background:"url('https://wallpaperaccess.com/full/848775.jpg')"}}>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/*" element={<Home />}/>
        <Route exact path="/dashboard/user" element={<UserDashboard />} />
        <Route exact path="/dashboard/admin" element={<AdminDashboard />} />
        <Route exact path="/dashboard/cood" element={<CoodDashboard />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/verify/:id/:token" element={<Verify />} />
      </Routes>
      </Box>
      // </ThemeProvider>
  );
}

export default App;
