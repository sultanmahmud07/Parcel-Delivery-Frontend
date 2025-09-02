
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false); // ⬅️ loader state

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true); // ⬅️ show loader
    // try {
    //   const response = await axios.post(`${""}/contact-request`, formData);
    //   console.log('Server Response:', response.data);

    //   Swal.fire({
    //     title: 'Message sent successfully!',
    //     text: "Thank you for contacting us!",
    //     icon: "success"
    //   });

    //   // ⬅️ Reset form after success
    //   setFormData({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    //   });
    //   setIsLoading(false); // ⬅️ hide loader
    // } catch (error) {
    //   console.error('Error sending message:', error.response?.data || error.message);
    //   Swal.fire({
    //     title: "Oops!",
    //     text: "Failed to send message. Please try again later.",
    //     icon: "error"
    //   });
    //   setIsLoading(false); // ⬅️ hide loader
    // } finally {
    //   setIsLoading(false); // ⬅️ hide loader
    // }
  };

  return (
    <div className="py-16">
      <div className="main-container">
        {/* Header */}
        <div className="mb-8">
          <h6 className="text-lg font-medium  border-l-4 border-primary pl-2">
            Get In Touch
          </h6>
          <h2 className="text-3xl font-bold  mt-2">Send Me A Message</h2>
        </div>

        {/* Form and Address */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Form */}
          <div className="w-full md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm  mb-1">Fast name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border bg-secondary rounded focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-1">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border bg-secondary rounded focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-1">Mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border bg-secondary rounded focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+880"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border bg-secondary rounded focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm  mb-1">Massage</label>
                <textarea
                  name="message"
                  placeholder="Type Your Massage Here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border bg-secondary rounded focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white hover:bg-secondary transition flex items-center gap-2 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

            </form>
          </div>

          {/* Address */}
          <div className="w-full md:w-2/5">
            <div className=" bg-secondary mt-6 p-6 rounded shadow-sm">
              <h4 className="text-xl md:text-2xl font-bold mb-3">Address</h4>
              <p className=" mb-4">
                Quam Elementum Pulvinar Etiam Non Quam Lacus Suspendisse.
                A Scelerisque Purus Semper Eget Duis At Lobortisscelerisque
                Fermentum Dui Faucibus In Ornare....
              </p>

              <p className="font-semibold ">
                Location(Corporate Office): <br />
                <span className="font-normal">
                  House- 4, Level- 2, Road-15 Block- D, Banani, Dhaka Bangladesh.
                </span>
              </p>

              <p className="mt-2 font-semibold">
                Phone: <span className="font-normal">+8801814-115544</span>
              </p>

              <p className="mt-2 font-semibold">
                Email: <span className="font-normal">Hello@Cjus.Ngo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
