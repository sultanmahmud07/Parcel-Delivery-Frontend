import { Link } from "react-router";

const OurPrice = () => {
  const plans = [
    {
      id: 1,
      title: "BASIC",
      price: "$50",
      subtitle: "for single product",
      features: [
        "PRODUCT WEIGHT: < 3KG",
        "COUNTRY: ALL",
        "DURATION: 7-14 DAYS",
        "SUPPORT: YES",
      ],
      highlight: false,
    },
    {
      id: 2,
      title: "PREMIUM",
      price: "$250",
      subtitle: "for package product",
      features: [
        "PRODUCT WEIGHT: < 3KG",
        "COUNTRY: ALL",
        "DURATION: 7-14 DAYS",
        "SUPPORT: YES",
      ],
      highlight: true,
    },
    {
      id: 3,
      title: "STANDARD",
      price: "$150",
      subtitle: "for multiple product",
      features: [
        "PRODUCT WEIGHT: < 3KG",
        "COUNTRY: ALL",
        "DURATION: 7-14 DAYS",
        "SUPPORT: YES",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="py-8 md:py-14">
      <div className="main-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h5 className="text-primary font-bold capitalize md:text-sm">
            Pricing & Plans
          </h5>
          <h2 className="section_title text-2xl md:text-4xl mt-2 font-bold">
            Know about our pricing & plans
          </h2>
          <p className="my-2 md:my-4 max-w-2xl mx-auto text-muted-foreground">
            Choose a plan that suits your needs. We deliver worldwide with fast
            and reliable support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border p-6 text-center flex flex-col justify-between
                ${plan.highlight ? "bg-primary text-white shadow-xl scale-105" : "bg-secondary"}
              `}
            >
              {/* Price */}
              <div>
                <h3 className={`text-3xl font-bold ${plan.highlight ? "text-white" : ""}`}>
                  {plan.price}
                </h3>
                <p className={`mt-1 ${plan.highlight ? "text-white/90" : ""}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Badge */}
              <div className="my-4">
                <span
                  className={`inline-block px-6 py-1 rounded-full font-semibold text-sm 
                    ${plan.highlight ? "bg-white text-yellow-500" : "bg-yellow-400 text-white"}
                  `}
                >
                  {plan.title}
                </span>
              </div>

              {/* Features */}
              <ul className="text-sm space-y-2 text-left mt-4 mb-6">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className={`${plan.highlight ? "text-white" : ""} font-medium`}
                  >
                    {f}
                  </li>
                ))}
              </ul>

              {/* Action */}
             <Link className="cursor-pointer" to={"/contact"}>
              <button
                className={`mt-auto cursor-pointer w-full py-2 rounded-lg font-semibold transition 
                  ${plan.highlight ? "bg-white text-yellow-500 hover:bg-gray-100" : "bg-primary text-white hover:bg-yellow-500"}
                `}
              >
                Choose Plan
              </button>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPrice;
