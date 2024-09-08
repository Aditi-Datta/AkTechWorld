import Image from "next/image";
import backgroundImage from "@/../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className=" max-h-screen pb-16 2xl:pb-32">
        <Image className="w-full" src={backgroundImage} />
      </div>
    </>
  );
}

export default Banner;
