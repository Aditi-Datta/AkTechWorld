import styles from "../../styles/CustomColors.module.css";
import info from "@/../public/about.jpg";
import Image from "next/image";

function AboutBanner() {
  return (
    <>
      <div className="bg-white pb-16">
        <div className={styles.homeServiceh1}>
          <h1 className="text-4xl font-bold text-center pt-5">
            About <span className="text-black py-6">US</span>
          </h1>
        </div>
        <div className={styles.fontFamilyStyle}>
          <div className=" text-black px-8">
            <p>
              Ak Tech World has started its journey in 2024 to provide
              information technology solutions for small to medium-sized
              businesses. The team at Ak Tech Worldl is equipped with a highly
              developed skillset not only in information technology but also in
              business processes across a range of industry sectors. This
              business experience makes us uniquely positioned to offer
              solutions promising greater operational efficiency, productivity
              gains, and cost savings for each of our clients, regardless of
              their industry.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-16">
          <div className={styles.fontFamilyStyle}>
            <div className="card lg:card-side   px-8">
              <div className=" text-black content-center">
                <br />
                <p>
                  As a technology-intensive company, we pride ourselves on
                  providing a comprehensive suite of solutions comprising of
                  infrastructure consultancy, on/offsite services, custom
                  software and web development, software and web application
                  testing, and enterprise architecture consulting.
                </p>

                
                <p>
                  Our team consistently delivers state-of-the-art solutions in
                  various areas including, but not limited to, integrated
                  business solutions, system applications, product development,
                  Internet/Intranet applications and communication & network
                  management services.
                </p>
                <br/>
                <p>
                  At Ak Tech World , we guarantee rapid, reliable and robust
                  information technology solutions that work.
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 mt-8">
            <figure>
              <Image src={info} alt="logo img" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBanner;
