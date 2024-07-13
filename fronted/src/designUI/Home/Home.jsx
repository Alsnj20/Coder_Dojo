import React from 'react';
import { useEffect, useState } from "react";
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';
function Home() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`bg-background text-foreground ${isDark ?'dark': ''}`}>
      <HomeNavigation />
      <HomeMain />
      <HomeFooter />
    </div>
  )
}

export default Home;