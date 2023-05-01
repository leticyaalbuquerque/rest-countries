import { Outlet } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer ";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} w-screen h-full`}>
      <Header onDarkMode={handleDarkMode}/>
        <Outlet />
      <Footer />
    </div>
  )
}
