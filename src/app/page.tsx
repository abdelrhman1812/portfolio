import { Suspense, lazy } from "react";

import Navbar from "../components/nav/Navbar";
import Loading from "./Loading";

const Hero = lazy(() => import("../components/Hero/Hero"));
const About = lazy(() => import("@/components/About/About"));
const Timeline = lazy(() => import("@/components/Timeline/Timeline"));
const Skills = lazy(() => import("../components/Skills"));
const Services = lazy(() => import("../components/Services"));
const Portfolio = lazy(() => import("@/components/Portfolio/Portfolio"));
const Contact = lazy(() => import("../components/Contact/Contact"));

// Parallel routes for better performance
export default async function Home() {
  return (
    <main className="pt-16 overflow-hidden">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </main>
  );
}
