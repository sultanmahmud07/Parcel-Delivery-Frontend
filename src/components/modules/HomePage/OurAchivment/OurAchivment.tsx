
import img1 from '../../../../assets/images/achievement/1.svg'
import img2 from '../../../../assets/images/achievement/2.svg'
import img3 from '../../../../assets/images/achievement/3.svg'
import img4 from '../../../../assets/images/achievement/4.svg'
import Button from './Button'

const OurAchievement = () => {
      const data = [
            {
                  id: 1,
                  title: "People rised",
                  img: img1,
                  number: "4597+"
            },
            {
                  id: 2,
                  title: "Volunteer",
                  img: img2,
                 number: "8945+"
            },
            {
                  id: 3,
                  title: "poor People Saved",
                  img: img3,
                  number: "10M+"
            },
            {
                  id: 4,
                  title: "Country Member",
                  img: img4,
                  number: "100+"
            }
      ]

      return (
            <div className='pt-4 mb-8 md:pt-7 bg-gradient-to-r from-primary to-secondary mt-36 md:mt-40'>
                  <div className="main-container relative">
                        <div className="achieve_top_section absolute top-[-9.5rem] left-0 w-full rounded-md md:rounded-xl p-6 md:p-16 flex-col md:flex-row flex md:items-center md:justify-between gap-5">
                              <div className="w-full md:w-3/5">
                                    <h5 className='text-primary font-bold capitalize md:text-sm'>Act Now for a Better World</h5>
                                    <h2 className=' text-2xl md:text-4xl mt-2'>Solutions to Help People in Need
                                          and Save the Planet</h2>
                              </div>
                              <div className="ll">
                                   <Button></Button>
                              </div>
                        </div>
                        <div className="archive_section pt-20 md:pt-28 grid grid-cols-2 md:grid-cols-4 gap-5 ">
                                    {
                                          data.map((item, i) => {
                                                return (
                                                      <div key={i} className="bg-[#219D8014] py-5 md:py-14 text-white flex flex-col items-center gap-4 md:gap-5">
                                                             <img  src={item.img} alt={item.title} className="w-20 md:w-24" />
                                                            <h3 className='text-2xl md:text-4xl font-medium'>{item.number}</h3>
                                                            <h6 className='text-sm font-semibold'>{item.title}</h6>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                  </div>
            </div>
      )
}

export default OurAchievement;
