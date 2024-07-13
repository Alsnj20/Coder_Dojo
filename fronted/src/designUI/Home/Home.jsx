import React from 'react';
import { useEffect, useState } from "react";
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';
function Home() {
  return (
    <div>
      <HomeNavigation />
      <HomeMain />
      <HomeFooter />
    </div>
  )
}

export default Home;