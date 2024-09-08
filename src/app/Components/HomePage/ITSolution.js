import React from "react";
import c1 from "@/../public/b1.png";
import Image from "next/image";
import styles from "../../styles/CustomColors.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ITSolution() {
  return (
    <>
      <div className=" py-16 flex justify-center gap-32 ">
        <div >
          <Image src={c1} className=" w-full rounded-lg shadow-2xl" />
        </div>


        <div className="  flex-col lg:flex-row content-center ">
          <div className=" 2xl:w-5/6 w-full max-w-lg ">
            <h1 className="text-4xl font-bold text-black">
              Preparing For Your Business Provide Best IT Solution!
            </h1>
            <p className=" py-6 ">
              Quickly re-engineer intuitive e-services whereas compelling
              niches. Professionally syndicate strategic e-commerce without
              covalent leadership skills. Globally customize equity invested
              imperatives.
            </p>
            <a href="/services">
              <button className={styles.discoverbtn}>
                Discover More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITSolution;
