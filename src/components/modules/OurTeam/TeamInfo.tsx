import about from '../../../assets/images/who-we-are.jpg'

const TeamInfo = () => {
  return (
    <div className='py-8 md:py-10'>
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
          {/* Left Images */}
          <div className="w-full md:p-5">
            <img
              src={about}
              alt="Child"
              className="w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <h5 className='text-primary font-bold uppercase my-2 text-sm'>Who We Are</h5>
            <h2 className='section_title text-2xl md:text-4xl leading-snug md:mb-4'>
              Your Support is Really<br />
              Powerful.
            </h2>
            <p className="text my-5">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the
              lives of the poor, the abused and the helpless.
            </p>
            <p className="text my-5">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the
              lives of the poor, the abused and the helpless.
            </p>
            <p className="text my-5">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the
              lives of the poor, the abused and the helpless.
            </p>




            {/* About Us Button */}
            <div className="mt-6">
              <button className="bg-primary text-white px-6 py-2 rounded-md text-sm font-semibold shadow">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo
