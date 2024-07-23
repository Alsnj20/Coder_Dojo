import { useEffect, useState } from "react";
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';
import HomeRol from "./HomeRol";
import HomeAboutUs from "./HomeAboutUs";
function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="w-screen
    dark:bg-[#2c2c2c]
    ">
      <HomeNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HomeMain />
      <HomeRol/>
      <HomeAboutUs />
      <HomeFooter />

    </div>
  );
}

export default Home;