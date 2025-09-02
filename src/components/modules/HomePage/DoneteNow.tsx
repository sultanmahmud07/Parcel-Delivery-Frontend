import Button from "./Button"

const DonateNow = () => {
      const archiveData = [
            {
                  id: 1,
                  number: 145,
                  name: "Archived Campaigns"
            },
            {
                  id: 1,
                  number: 1200,
                  name: "Donation Received"
            },
            {
                  id: 1,
                  number: 545,
                  name: "Clarity in the Last Year"
            },
      ]
      return (
            <div className="md:absolute md:bottom-[-5rem] md:left-0 w-full py-10 md:py-0">
                  <div className="main-container flex flex-col md:flex-row items-end gap-5 md:gap-10">
                        <div className="w-full md:w-3/5">
                              <div className="archive_section p-5 md:p-6 md:pt-12 grid grid-cols-3 gap-5 bg-gradient-to-r from-primary to-secondary rounded-tr-2xl md:rounded-tr-[3.7rem]">
                                    {
                                          archiveData.map((item, i) => {
                                                return (
                                                      <div key={i} className="text-white flex flex-col gap-2 md:gap-3">
                                                            <h3 className='text-2xl md:text-4xl'>{item.number}+</h3>
                                                            <h6 className='text-sm md:text-base'>{item.name}</h6>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                        </div>
                        <div className="donate_section w-full md:w-2/5 ">
                              <div className="bg-gradient-to-r from-secondary to-primary p-5 md:p-8 rounded-xl md:rounded-3xl">
                                    <div className="bg-white p-4 rounded-lg mb-5">
                                          <div className="flex justify-between items-center text-sm font-medium mb-1">
                                                <span className="text-primary font-semibold">29%</span>
                                                <span className="text-black">$05,480 <span className="font-normal">Raised</span></span>
                                                <span className="text-black">$20,000 <span className="font-normal">Goal</span></span>
                                          </div>
                                          <div className="w-full my-2 mt-4 h-2 bg-gray-200 rounded-full">
                                                <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '29%' }}></div>
                                          </div>
                                    </div>

                                    <Button></Button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default DonateNow