import React, { useContext } from "react";
import Link from "next/link";
// import Image from "next/image";
import Footer from "../public/components/Footer";
import HomeContainer from "../public/components/HomeContainer";
import Navigation from "../public/components/Navigation";
// import ImageGrid from "../public/components/ImageGrid";
import { AppContainer } from "../public/components/styled";
// import { ThemeContext } from "../public/theme-context";

export default function Home() {
  return (
    // <ThemeContext.Provider >
      <AppContainer>
        <Navigation />
        <HomeContainer />
        <Footer />
      </AppContainer>
    // </ThemeContext.Provider>
  );
}
