import Image from "next/image";
import c1 from "@/../public/logo.png";
import styles from "../../styles/CustomColors.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.NavbarBackground}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  <Image src={c1} alt="logo img" width={80} height={100} />
                </a>
              </div>
            </div>
  


            
            <div className={styles.navtext}>
              <div className="hidden md:block ">
                <div className="ml-4 flex items-center space-x-4">
                  <a
                    href="/"
                    className="text-black hover:bg-white hover:text-black rounded-lg"
                  >
                    Home
                  </a>

                  <a
                    href="/about"
                    className="text-black hover:bg-white hover:text-black rounded-lg"
                  >
                    About
                  </a>
                  <a
                    href="/services"
                    className="text-black hover:bg-white hover:text-black rounded-lg"
                  >
                    Services
                  </a>
                  <a
                    href="/team"
                    className="text-black hover:bg-white hover:text-black rounded-lg"
                  >
                    Team
                  </a>
                  <a
                    href="/contact"
                    className="text-black hover:bg-white hover:text-black rounded-lg"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
