import security from "@/../public/security2.jpg";
import machine from "@/../public/machine.jpg";
import natural from "@/../public/natural.jpg";
import artificial from "@/../public/artificial.jpg";
import development from "@/../public/webdevelopment.jpg";
import ITSolution from "@/../public/ITSoulution.jpg";
import webDesign from "@/../public/webDesign.jpg";
import graphics from "@/../public/graphics.jpg";
import data from "@/../public/data.jpg";

import Image from "next/image";
import styles from "../../styles/CustomColors.module.css";

function ServicesComponent() {
  return (
    <>
      <div className={styles.overviewText}>
        <h1 className="text-4xl font-bold text-center pt-16  ">
          We Are Offering
          <span className="text-black"> All Kinds of Services</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="px-8 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={security}
              alt="cyber security"
            />
          </figure>
        </div>

        <div className="card lg:card-side pt-16  px-8 content-center">
          <div className="  ">
            <h2 className={styles.serviceNameText}>Cyber Security</h2>
            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  SSL/TLS Encryption:
                </small>{" "}
                Implement SSL/TLS certificates to ensure data transmitted
                between the user and the server is encrypted, protecting
                sensitive information.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Strong Authentication:{" "}
                </small>{" "}
                Use multi-factor authentication (MFA) to verify user identities
                and prevent unauthorized access.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Regular Updates:{" "}
                </small>{" "}
                Keep software, plugins, and CMS up to date to patch known
                vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="card lg:card-side pt-16  px-8 content-center">
          <div>
            <h2 className={styles.serviceNameText}>Machine Learning</h2>

            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  Personalization:{" "}
                </small>
                ML algorithms can analyze user behavior and preferences to
                provide personalized content, product recommendations, or search
                results, enhancing user experience.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Fraud Detection:{" "}
                </small>{" "}
                ML models can detect unusual patterns in transactions or login
                attempts, helping to identify and prevent fraudulent activities.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Chatbots and Virtual Assistants:{" "}
                </small>{" "}
                ML powers chatbots that can handle customer inquiries in real
                time, improving customer support and engagement on the website.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={machine}
              alt="machine learning"
            />
          </figure>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={natural}
              alt="natural language processing"
            />
          </figure>
        </div>

        <div className="card lg:card-side pt-16  px-8 content-center">
          <div className=" ">
            <h2 className={styles.serviceNameText}>
              Natural Language Processing
            </h2>
            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Search Functionality:{" "}
                </small>{" "}
                NLP enhances search engines on websites by understanding user
                intent and providing more relevant search results, even for
                complex or ambiguous queries.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Language Translation:{" "}
                </small>{" "}
                NLP enables real-time translation of website content, allowing
                users from different linguistic backgrounds to access and
                understand the information in their native language.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Text Summarization:{" "}
                </small>{" "}
                NLP can automatically summarize long articles or documents,
                making it easier for users to grasp key information quickly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4  py-16 shadow-xl">
        <div className="card lg:card-side pt-16 pb-16  px-8 content-center">
          <div>
            <h2 className={styles.serviceNameText}>Artificial Intelligence</h2>
            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Automated Customer Support:{" "}
                </small>{" "}
                AI-powered chatbots and virtual assistants provide 24/7 customer
                service, answering questions, resolving issues, and guiding
                users through processes in real time.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Content Creation:{" "}
                </small>{" "}
                AI can generate content such as articles, product descriptions,
                and social media posts, automating the creation process while
                maintaining a natural, human-like tone.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Voice and Image Recognition:{" "}
                </small>{" "}
                AI-powered voice and image recognition technologies allow users
                to interact with the website through voice commands or visual
                inputs, providing a more accessible and innovative experience.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={artificial}
              alt="artifical intelligence"
            />
          </figure>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={webDesign}
              alt="Web Design"
            />
          </figure>
        </div>
        <div className="card lg:card-side pt-16 pb-16 px-8 content-center">
          <div className=" ">
            <h2 className={styles.serviceNameText}>Web Design</h2>
            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Responsive Design:{" "}
                </small>{" "}
                Ensure the website is accessible and user-friendly across
                various devices, including desktops, tablets, and smartphones,
                by implementing a responsive design that adapts to different
                screen sizes.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  User-Centered Design:{" "}
                </small>{" "}
                Prioritize user needs by creating intuitive navigation, clear
                calls to action, and a seamless user journey that guides
                visitors through the site effortlessly.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  SEO-Friendly Design:{" "}
                </small>{" "}
                Structure the website to be search engine-friendly by using
                clean code, meta tags, and alt text for images, enhancing
                visibility and ranking on search engines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="card lg:card-side pt-16 pb-16 px-8 content-center">
          <div>
            <h2 className={styles.serviceNameText}>Web Development</h2>
            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Full-Stack Development:{" "}
                </small>{" "}
                Full-stack developers manage both front-end and back-end
                development, ensuring seamless integration between the
                client-side interface and server-side logic.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Database Management:{" "}
                </small>{" "}
                Efficient handling of data using databases like MySQL, MongoDB,
                or PostgreSQL is crucial for storing and retrieving data, such
                as user information, content, and transaction records.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Version Control:{" "}
                </small>{" "}
                Tools like Git allow developers to track changes, collaborate
                effectively, and manage different versions of the codebase,
                ensuring that development is organized and any issues can be
                easily tracked and resolved.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={development}
              alt="Web Development"
            />
          </figure>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={graphics}
              alt="Graphics Design"
            />
          </figure>
        </div>
        <div className="card lg:card-side pt-16 pb-16 px-8 content-center">
          <div className=" ">
            <h2 className={styles.serviceNameText}>Graphics Design</h2>
            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Brand Identity:{" "}
                </small>{" "}
                Graphic design ensures consistency in brand identity across the
                website through the use of logos, color schemes, typography, and
                imagery that reflect the brand’s values and message.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Custom Graphics:{" "}
                </small>{" "}
                Creating custom graphics such as icons, illustrations, and
                banners adds uniqueness to the website, differentiating it from
                competitors and enhancing user engagement.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  User Experience (UX) Design:{" "}
                </small>{" "}
                Graphic design contributes to UX by creating intuitive
                interfaces, enhancing usability, and ensuring that the visual
                elements support the overall user journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="card lg:card-side pt-16 pb-16 px-8 content-center">
          <div>
            <h2 className={styles.serviceNameText}>IT Solutions</h2>
            <div className={styles.serviceInnerText}>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Web Hosting:{" "}
                </small>{" "}
                Choosing a reliable web hosting service is essential for
                ensuring that the website is accessible, fast, and able to
                handle traffic efficiently. Hosting options include shared, VPS,
                dedicated servers, and cloud hosting.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Content Management System (CMS):{" "}
                </small>{" "}
                Implementing a CMS like WordPress, Joomla, or Drupal allows for
                easy content updates and management without requiring extensive
                technical knowledge.
              </p>
              <p>
                <small className={styles.serviceMiniPoint}>
                  {" "}
                  Security Solutions:{" "}
                </small>{" "}
                IT solutions include implementing firewalls, SSL certificates,
                malware protection, and regular security audits to protect the
                website from cyber threats and data breaches.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={ITSolution}
              alt="IT Solution"
            />
          </figure>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 shadow-xl">
        <div className="px-8 py-5 mt-8 pb-8">
          <figure>
            <Image
              className={styles.serviceCompoImage}
              src={data}
              alt="Data Services"
            />
          </figure>
        </div>
        <div className="card lg:card-side pt-16 pb-16 px-8 content-center">
          <div className=" ">
            <h2 className={styles.serviceNameText}>Data Services</h2>
            <div className={styles.serviceInnerText}>
              <p>
              <small className={styles.serviceMiniPoint}> Web Hosting:  </small> Choosing a reliable web hosting service is
                essential for ensuring that the website is accessible, fast, and
                able to handle traffic efficiently. Hosting options include
                shared, VPS, dedicated servers, and cloud hosting.
              </p>
              <p>
              <small className={styles.serviceMiniPoint}> Content Management System (CMS):  </small> Implementing a CMS like
                WordPress, Joomla, or Drupal allows for easy content updates and
                management without requiring extensive technical knowledge.
              </p>
              <p>
              <small className={styles.serviceMiniPoint}> Security Solutions:  </small> IT solutions include implementing firewalls,
                SSL certificates, malware protection, and regular security
                audits to protect the website from cyber threats and data
                breaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesComponent;
