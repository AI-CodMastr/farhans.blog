import Demo from "./components/Demo/Demo"
import Home from "./components/Home/Home"
import { Routes, Route, Navigate } from "react-router-dom";
import DemoHeader from "./components/Demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";
import { Blog } from "./Context/Context";
import { ToastContainer } from "react-toastify";

function App() {
  const {currentUser} = Blog() 

  return (
    <>
    {currentUser ? <HomeHeader /> : <DemoHeader />}
    <ToastContainer />
    <Routes>
      {currentUser && <Route path="/" element={<Home />} />}
      {!currentUser && <Route path="/demo" element={<Demo />} />}
      <Route path="*" element={<Navigate to={!currentUser ? "/demo" : "/"}/>} 
      />
    </Routes>
    </>
  )
}

export default App
