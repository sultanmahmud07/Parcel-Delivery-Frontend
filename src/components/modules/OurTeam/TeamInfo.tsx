import about from '../../../assets/images/who-we-are-img.png'

const TeamInfo = () => {
  return (
    <div className='py-8 md:py-10'>
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
          {/* Left Image */}
          <div className="w-full md:p-5">
            <img
              src={about}
              alt="Parcel Delivery Team"
              className="w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <h5 className='text-primary font-bold uppercase my-2 text-sm'>Who We Are</h5>
            <h2 className='section_title text-2xl md:text-4xl leading-snug md:mb-4'>
              Delivering Parcels<br />
              Safely & Efficiently
            </h2>
            <p className="text my-5">
              We are a dedicated team committed to making parcel delivery fast, reliable, and hassle-free. Every parcel entrusted to us is handled with care and tracked in real-time to ensure it reaches the right destination on time.
            </p>
            <p className="text my-5">
              Our goal is to simplify logistics for individuals and businesses alike. From creating shipments to final delivery, we provide a seamless experience that keeps you informed at every step.
            </p>
            <p className="text my-5">
              Customer satisfaction is our top priority. Our team works tirelessly to ensure transparency, security, and efficiency in every delivery, because we understand the value of the trust you place in us.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo
