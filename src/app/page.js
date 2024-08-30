import ITSolution from "./Components/HomePage/ITSolution";
import Head from "next/head";
// import icon from "@/../public/favicon.ico";
import Overview from "./Components/HomePage/Overview";
import styles from "../app/styles/CustomColors.module.css";
import Service from "./Components/HomePage/Service";
import Banner from "./Components/HomePage/Banner";




export default function Home() {
  return (
    <>
      <div className={styles.bodyBackground}>
        <Banner></Banner>
        <Overview></Overview>
        <Service></Service>
        <ITSolution></ITSolution>
      </div>
    </>
  );
}
