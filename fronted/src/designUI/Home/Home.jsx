import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';
import AccessDenied from "../../components/AccessDenied";
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
    <div>
      <HomeNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HomeMain />
      <HomeFooter />

    </div>
  );
}

export default Home;