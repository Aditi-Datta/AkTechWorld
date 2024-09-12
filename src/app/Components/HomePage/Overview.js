import React from "react";
import styles from "../../styles/CustomColors.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Overview() {
  return (
    <>
      <div className=" py-8  px-8">
        <div className={styles.overviewText}>
          <h1 className="text-4xl font-bold text-center ">
            Overview <span className="text-black">Us</span>
          </h1>
        </div>

       <div className="2xl:mx-16 py-8 ">
       <p className="py-6 text-black">
          Ak Tech World has started its journey in 2024 to provide information
          technology solutions for small to medium-sized businesses. The team at
          Ak Tech Worldl is equipped with a highly developed skillset not only
          in information technology but also in business processes across a
          range of industry sectors. This business experience makes us uniquely
          positioned to offer solutions promising greater operational
          efficiency, productivity gains, and cost savings for each of our
          clients, regardless of their industry.
        </p>
        <p className="py-6 text-black">
          As a technology-intensive company, we pride ourselves on providing a
          comprehensive suite of solutions comprising of infrastructure
          consultancy, on/offsite services, custom software and web development,
          software and web application testing, and enterprise architecture
          consulting. Our team consistently delivers state-of-the-art solutions
          in various areas including, but not limited to, integrated business
          solutions, system applications, product development, Internet/Intranet
          applications and communication & network management services. At Ak
          Tech World , we guarantee rapid, reliable and robust information
          technology solutions that work.
        </p>
        <a href="/about">
          <button className={styles.discoverbtn}>
            Learn More About Us <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </button>
        </a>
       </div>
      </div>
    </>
  );
}

export default Overview;
