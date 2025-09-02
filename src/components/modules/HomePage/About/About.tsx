import about1 from '../../../../assets/images/international-courier-service.jpeg'
import about2 from '../../../../assets/images/about-img.jpg'
import aboutIcon from '../../../../assets/images/delivery-icon.png'
import { FaHeart, FaEye } from 'react-icons/fa'

const About = () => {
  return (
    <div className='py-8 md:py-10'>
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
          {/* Left Images */}
          <div className="relative md:pt-6">
            <img
              src={about1}
              alt="Child"
              className="w-5/6 rounded-xl transition-transform duration-500 hover:scale-105"
            />
            <img
              src={about2}
              alt="Silhouette"
              className="w-2/5 transition-transform duration-500 hover:scale-105 absolute bottom-[-20px] md:bottom-5 right-0 rounded-lg border-4 border-white shadow-lg"
            />
            <img
              src={aboutIcon}
              alt="Icon"
              className="w-16 rounded-full transition-transform duration-500 hover:scale-105 absolute top-40 left-[-30px] md:left-[-40px]"
            />
          </div>

          {/* Right Content */}
          <div>
            <h5 className='text-primary font-bold uppercase my-2 text-sm'>Welcome to Charity</h5>
            <h1 className='font-semibold text-3xl md:text-4xl leading-snug mb-4'>
              Let Us Come Together <br />To Make a Difference
            </h1>
            <p className="text my-5">
              Join us and make your life more valuable and useful, be a part of us and contribute to the nation and state and the simplest for the environment and yourself
            </p>

            {/* Mission + Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary p-3 rounded">
              <h5 className="my-2 flex items-center gap-2 font-semibold text-lg text-primary"><span><FaHeart /></span>Our Mission</h5>
                  <p className="text-sm">
                    CJUS is committed to empowering vulnerable communities by implementing impactful programs.
                  </p>
              </div>
              <div className="bg-secondary p-3 rounded">
              <h5 className="my-2 flex items-center gap-2 font-semibold text-lg text-primary"><span><FaEye /></span>Our vission</h5>
                  <p className="text-sm">
                  A world where every person has access to basic human rights, social justice, and sustainable development opportunities
                  </p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              {/* Donations */}
              <div>
                <div className="flex justify-between mb-1 font-semibold text-sm">
                  <span>Donations</span>
                  <span>75%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              {/* Medical Help */}
              <div>
                <div className="flex justify-between mb-1 font-semibold text-sm">
                  <span>Medical Help</span>
                  <span>90%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            {/* About Us Button */}
            <div className="mt-6">
              <button className="bg-primary text-white px-6 py-2 rounded-md text-sm font-semibold shadow">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
