import React from "react";
import Link from "next/link";
// import Image from "next/image";
import Footer from "../public/components/Footer";
import HomeContainer from "../public/components/HomeContainer"
import Navigation from "../public/components/Navigation";
// import ImageGrid from "../public/components/ImageGrid";
import { AppContainer } from "../public/components/styled";

export default function Home() {
  return (
    <AppContainer>
      <Navigation />
      <HomeContainer/>
      <Footer />
    </AppContainer>
  );
}
