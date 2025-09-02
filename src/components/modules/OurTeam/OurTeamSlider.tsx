
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'

const OurTeamSlider = () => {
      const data = [
            {
                  id: 1,
                  name: "A.S.M Nasim",
                  img: img1,
                  post: "Secretary",
            },
            {
                  id: 2,
                  name: "Azadur Rahman",
                  img: img2,
                  post: "Executive Director",
            },
            {
                  id: 3,
                  name: "Mehedi Hassan Rabbi",
                  img: img3,
                  post: "Operational Director",
            }
      ]

      return (
            <div className='py-4 md:py-7 my-6 md:my-10'>
                  <div className="main-container">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="left_content w-full md:w-[45%]">
                              <h5 className='text-primary font-bold capitalize md:text-sm'>Contact Us</h5>
                              <h2 className='section_title text-2xl md:text-4xl mt-2'>Our <span className='text-primary'>Team</span></h2>
                              <p className="my-2 md:my-3">
                              A task may be easy for one person, but with teamwork, success comes faster and more efficiently.
                              </p>
                              </div>
                              <div className="left_content w-full md:w-[55%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {data.map((item, i) => (
                                          <div key={i} className="flex flex-col items-center justify-center group ">
                                               <div className=" aspect-[16/20] w-full overflow-hidden  rounded-lg">
                                               <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                               </div>
                                                <h6 className="capitalize mt-2">{item.name}</h6>
                                                <p className='text-muted-foreground text-sm capitalize'>{item.post}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default OurTeamSlider;
