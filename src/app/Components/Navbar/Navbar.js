// import { useState } from "react";

const Navbar = () => {
//   const [isClick, setIsClick] = useState(false);
//   const toggleNavbar = () => {
//     setIsClick(!isClick)
//   }

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Home
                </a>

                <a
                  href="/about"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Contact
                </a>
                <a
                  href="/services"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Services
                </a>
                <a
                  href="/projects"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Projects
                </a>
                <a
                  href="/blog"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Blogs
                </a>
              </div>
            </div>

           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
