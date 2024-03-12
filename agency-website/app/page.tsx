import Image from "next/image";
import Hero from "@/app/components/hero"
import Header from "@/app/components/header"
import FeatureList from "@/app/components/feature"
import CTAsection from "@/app/components/ctaSection"
import ContentSection from "@/app/components/contentSection"
import NavBar from "@/app/components/navbar"
import LogoCloud from "./components/logoCloud";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <CTAsection />
      <FeatureList />
      <LogoCloud />
      <ContentSection />
      

    </main>
  );
}
