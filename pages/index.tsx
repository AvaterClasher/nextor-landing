/** @format */

import { GetStaticProps } from "next";
import Intro from "../components/Intro";
import Download from "../components/Download";
import Layout from "../components/Layout";
import GotoTop from "../components/GotoTop";
import { IRelease } from "../types";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Download />
      <GotoTop />
      <Footer />
    </Layout>
  );
}
