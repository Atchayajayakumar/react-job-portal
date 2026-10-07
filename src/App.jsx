import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Loginpage";
import Register from "./Components/Registerpage";
import JobSeekerDashboard from "./Components/Jobseekerdashboard";
import RecruiterDashboard from "./Components/Recuriterdashboard";
import AddJob from "./Components/Addjobs";
import Jobcard from "./Components/Jobcard";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/navbar"element={<Navbar/>}/>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
      <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
       <Route path="/jobs" element={<Jobcard />} />
      <Route path="/add-job" element={<AddJob />} />
     </Routes>
</BrowserRouter>
    
  );
}


export default App;

