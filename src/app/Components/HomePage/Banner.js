import Image from "next/image";
import backgroundImage from "@/../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className=" min-h-screen">
        <Image src={backgroundImage} />
      </div>
    </>
  );
}

export default Banner;
