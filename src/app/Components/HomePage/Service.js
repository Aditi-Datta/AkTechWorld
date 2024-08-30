import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/CustomColors.module.css";

function Service() {
  return (
    <>
      <div className={styles.serviceBodyBack}>
        <div className="min-h-screen pt-16">
          <div className={styles.homeServiceh1}>
            <h1 className="text-4xl font-bold text-center ">
              Our Business <span className="text-black py-6">Segments</span>
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4  ">
         <div className={styles.homeServiceCardBack}>
         <div className="card  w-96 shadow-2xl  ">
         <figure className="px-10 pt-10 ">
           <svg
             width={80}
             height={100}
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512"
           >
             <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
           </svg>
         </figure>
         <div className="card-body items-center text-center text-black">
           <h2 className="card-title">Cyber Security</h2>
           <p>IT security services such as firewalls, intrusion prevention</p>
           <div className="card-actions">
           <a href="/services">
           <button className={styles.discoverbtn}>
             Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
           </button>
           </a>
           </div>
         </div>
       </div>
         </div>

            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" />
                </svg>
              </figure>

              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Machine Learning</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <a href="/services">
                  <button className={styles.discoverbtn}>
                    Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z" />
                </svg>
              </figure>

              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Natural Language Processing</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="/services">
                <button className={styles.discoverbtn}>
                  Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
                </a>
                </div>
              </div>
            </div>

            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" />
                </svg>
              </figure>

              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Artificial Intelligence</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="/services">
                <button className={styles.discoverbtn}>
                  Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
                </a>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.7-9.2L288 94.6z" />
                </svg>
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Web Design</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="/services">
                <button className={styles.discoverbtn}>
                  Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
                </a>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </figure>

              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Web Development</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="/services">
                <button className={styles.discoverbtn}>
                  Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
                </a>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z" />
                </svg>
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Graphics Design</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="/services">
                <button className={styles.discoverbtn}>
                  Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
                </a>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z" />
                </svg>
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">IT Solutions</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="/services">
                <button className={styles.discoverbtn}>
                  Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
                </a>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <svg
                  width={80}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z" />
                </svg>
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Data Services</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="/services">
                <button className={styles.discoverbtn}>
                  Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
