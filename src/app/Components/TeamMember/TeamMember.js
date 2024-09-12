import Image from 'next/image'
import team1 from "@/../public/002.jpeg";
import team2 from "@/../public/001.jpeg";
import styles from "../../styles/CustomColors.module.css";

// const teamMembers = [
//   {
//     name: 'Amanda Reahana Gomes',
//     role: ' Software Engineer',
//     image: '/public/team1.jpeg',
//   },
//   {
//     name: 'Mirza Sanjida',
//     role: 'SEO Executive',
//     image: '/images/bob.jpg',
//   },

// ]

const TeamMember = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        <div className={styles.overviewText}>
          <h1 className="text-4xl font-bold text-center ">
            Our Amazing <span className="text-black">Team</span>
          </h1>
        </div>

        <p className='text-center w-full italic'>Discover the incredible individuals who make up our team.</p>
        <div className="  px-16 py-16  ">

          <div className=" flex justify-center  px-16 py-16 gap-16">

            <div className="card bg-white shadow-2xl rounded-lg overflow-hidden w-96">
              <figure>
                <Image
                  src={team1}
                  alt='Amanda Reahana Gome'
                
                  // width={80}
                  // height={100}
                  // width={300}
                  // height={300}
                  // className="w-full h-48 object-cover"
                  className=" object-cover"
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold">Amanda Reahana Gome</h3>
                <p className={styles.emailUs}>Software Engineer</p>
              </div>
            </div>


            <div className="card bg-white shadow-2xl rounded-lg overflow-hidden w-96">
              <figure>
                <Image
                  src={team2}
                  alt='Mirza Sanjida'
                  // width={300}
                  // height={300}
                  // className="w-full h-48 object-cover"
                  className="  object-cover"
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold">Mirza Sanjida</h3>
                <p className={styles.emailUs}>SEO Executive</p>
              </div>
            </div>

          </div>


          <div>
            <p className='text-center text-xl w-full flex justify-center px-16 italic'>Our team is the heart and soul of our success. From visionary leaders to creative thinkers and dedicated professionals, we are united by our passion for excellence and innovation. Get to know the people who are shaping the future with us.</p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default TeamMember;