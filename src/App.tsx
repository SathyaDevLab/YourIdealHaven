import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  FeatureSection,
  GallerySection,
  HeroSection,
  MissionSection,
  NewsSection,
  SubscribeSection,
  UniqueOpportunities,
} from "./containers";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".img-container", {
      xPercent: 100,
      duration: 2,
    });

    (gsap.utils.toArray(".img-container img") as HTMLImageElement[]).forEach(
      (img, inx) => {
        gsap.fromTo(
          img,
          {
            scaleY: 1 * inx + 1,
            translateY: 0,
          },
          {
            scaleY: 1,
            duration: 1.5,
            translateY: (inx + 1) % 2 == 0 ? 15 * inx + 1 : 0,
          }
        );
      }
    );
    gsap.from(".text-content>*", {
      opacity: 0,
      y: 400,
      duration: 3,
      scrollTrigger: {
        trigger: ".text-content",
      },
    });

    gsap.from(".swiper-container-wrapper", {
      xPercent: 100,
      ease: "power3.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".swiper-container-wrapper",
      },
    });

    gsap.from(".mission-text", {
      y: 300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".mission-text",
      },
    });

    gsap.from(".article", {
      opacity: 0,
      y: 100,
      stagger: {
        amount: 2,
      },
      duration: 2,
      scrollTrigger: {
        trigger: ".article",
      },
    });

    gsap.from(".box", {
      opacity: 0,
      duration: 2,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".box",
      },
    });
  });
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <GallerySection />
      <MissionSection />
      <NewsSection />
      <SubscribeSection />
      <UniqueOpportunities />
      <Footer />
    </>
  );
}

export default App;
