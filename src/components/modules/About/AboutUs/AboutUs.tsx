import about from '../../../../assets/images/who-we-are.jpg'

const AboutUs = () => {
      return (
            <div className='py-8 md:py-14'>
                  <div className="main-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                              {/* Left Images */}
                              <div>
                                    <h5 className='text-primary font-bold uppercase my-2 text-sm'>About us</h5>
                                    <h2 className='section_title text-2xl md:text-4xl leading-snug '>
                                          Your Support is Really Powerful
                                    </h2>
                                    <p className="my-1 md:my-5">
                                          Char-o-Janata Unnayan Sangstha (CJUS) was established in 2001 as non-government organization and subsequently received its legal status from Government of Bangladesh. Since its inception it has steadily concentrated and consolidated its expertise in different development sectors synchronizing government five years plan. Initially we worked for the vulnerable groups of our constituency i.e.in Rowmari, Rajibpur, and Chilmari Upazila under District of Kurigram district through implementing emergency support of flood victims’ people since long time .The support included rescue of flood victims, supply of dry food packet and excavation of flood victims water resources and create flood shelter through negotiation of local administration and uses School, College, high fellow land during flood mobilizing local resources. The function was a coordinated effort of our group involving local elite, young people, students and civil society. the three upazilas such as Rowmari, Rajibpur & Chilmari upazila under the District of Kurigram is situated in big river Brahmaputra and every year the areas 
                                    </p>
                              </div>
                              <div className="w-full">
                                    <div className="w-full bg-secondary p-4">
                                          <img
                                                src={about}
                                                alt="Child"
                                                className="w-full"
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AboutUs
