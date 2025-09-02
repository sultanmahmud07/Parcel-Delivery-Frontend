import bannerImg from '../../../assets/images/delivary-image.jpg'
import bannerIcon from '../../../assets/images/delivery-img.png'
import playIcon from '../../../assets/images/play-icon.svg'
import { Link } from 'react-router'
import TrackingNow from './TrackingNow'

const Banner = () => {
  return (
    <section className="relative md:mb-32  bg-gradient-to-r from-primary to-secondary">
      <div className='flex items-center min-h-screen '>
        <div className="main-container pt-32 md:pt-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
          <div className="w-full md:w-3/5 flex flex-col gap-4 md:gap-6">
            <h5 className="text-orange font-bold uppercase">TRUSTED PARCEL DELIVERY COMPANY</h5>
            <h1 className="banner_title text-white font-semibold capitalize text-3xl md:text-4xl lg:text-[2.55rem]">
              Let&apos;s Deliver Happiness And Build Lasting Trust By <span className="text-primary">Sending Safely</span> With Us
            </h1>
            <p className="text-white font-bold">
              No matter how big or small your package is, safe, fast, and on-time delivery always matters most. Send your parcels today with a service you can truly rely on.
            </p>
            <div className="flex items-center gap-5 lg:gap-14">
              <Link to={"/contact"}>
                <button
                  type="button"
                  className="transition-transform duration-500 hover:scale-105 bg-gradient-to-r from-primary to-secondary p-2 md:p-4 px-4 md:px-10 rounded md:rounded-lg text-white font-bold capitalize"
                >
                  Get Started
                </button>
              </Link>
              <img
                src={playIcon}
                alt="logo"
                className="w-16 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="image_banner w-full md:w-2/5 ">
            <div className="image_con relative">
              <img
                src={bannerIcon}
                alt="logo"
                className="w- bg-gradient-to-r from-primary to-secondary  rounded-3xl transition-transform duration-500 hover:scale-105 md:w-1/2 absolute top-[-50px] right-[-20px] md:right-[-50px]"
              // sizes="100vw"
              />
              <img
                src={bannerImg}
                alt="logo"
                className="w-5/6 bg-secondary p-4 rounded-2xl mx-auto md:w-full "
              // sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
      <TrackingNow></TrackingNow>
    </section>
  )
}

export default Banner