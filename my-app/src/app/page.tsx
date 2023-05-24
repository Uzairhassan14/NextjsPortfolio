import About from "./components/About";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Clint | Front-End Developer</title>
        <meta name="description" content="Genrated by Craete Next app"/>
      <link rel="icon" href="/favicon.co" />
      </Head>
      <Navbar />
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
