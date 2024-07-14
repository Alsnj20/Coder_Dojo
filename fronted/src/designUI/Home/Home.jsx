import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';
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
    <div className="bg-gray-100
    dark:bg-gradient-to-r dark:from-[#1F2937] dark:to-[#1D2735]">
      <HomeNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}

export default Home;