const pricingTiers = [
  { name: "Free", price: "$0", popular: false },
  { name: "Team", price: "$99", popular: false },
  { name: "Popular", price: "$150", popular: true },
  { name: "Enterprise", price: "$490", popular: false },
];

const features = [
  { name: "Website number", values: ["01", "10", "50", "Unlimited"] },
  {
    name: "Server storage",
    values: ["100 GB", "500 GB", "1 TB", "Unlimited"],
  },
  { name: "Database", values: ["-", "15", "Unlimited", "Unlimited"] },
  {
    name: "Support",
    values: ["Community", "Email", "Priority", "Priority"],
  },
  {
    name: "Customization",
    values: ["-", "-", "Basic", "Advanced"],
  },
  {
    name: "API Access",
    values: ["-", "-", "-", "Yes"],
  },
  {
    name: "Security",
    values: ["Basic", "Advanced", "Advanced", "Advanced"],
  },
  {
    name: "SSL Certificate",
    values: ["-", "-", "Yes", "Yes"],
  },
];

const Pricing = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Pricing &amp; Plans
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* lg+ */}
        <div className="mt-16 hidden lg:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-8 pr-4" />
                {pricingTiers.map((tier, index) => (
                  <th
                    key={index}
                    className={`px-4 py-8 text-center ${
                      tier.popular
                        ? "rounded-t-xl bg-gray-900 dark:bg-gray-800"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-base font-medium ${
                        tier.popular
                          ? "rounded-full bg-blue-600 px-4 py-2 text-white"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {tier.name}
                    </span>
                    <p
                      className={`mt-6 text-4xl font-bold ${
                        tier.popular
                          ? "text-white"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {tier.price}
                    </p>
                    <p
                      className={`mt-2 text-base font-normal ${
                        tier.popular
                          ? "text-gray-200"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      Per month
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex}>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium dark:border-gray-700">
                    {feature.name}
                  </td>
                  {feature.values.map((value, valueIndex) => (
                    <td
                      key={valueIndex}
                      className={`border-b border-gray-200 p-4 text-center dark:border-gray-700 
                        ${pricingTiers[valueIndex].popular ? "border-white/20 bg-gray-900 text-white dark:bg-gray-800" : ""}`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="py-5"></td>
                {pricingTiers.map((tier, index) => (
                  <td
                    key={index}
                    className={`rounded-b-xl px-4 py-5 text-center ${tier.popular ? "bg-gray-900 dark:bg-gray-800" : ""}`}
                  >
                    <a
                      href="#"
                      className={`inline-flex w-full items-center justify-center px-4 py-2 text-base font-semibold transition-all duration-200 ${
                        tier.popular
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      } rounded-md border border-transparent`}
                    >
                      Get Started
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* xs to lg */}
        <div className="mt-12 block divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:hidden ">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-4 py-8 text-center sm:px-6"
            >
              <span className="text-base font-medium text-blue-600 dark:text-blue-400">
                {tier.name}
              </span>
              <p className="mt-4 text-4xl font-bold text-black dark:text-white">
                {tier.price}
              </p>
              <span className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                Per month
              </span>
              <ul className="mt-6 w-full">
                {features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex justify-between border-b border-gray-200 py-2 text-gray-600 dark:border-gray-700 dark:text-gray-300"
                  >
                    <span>{feature.name}</span>
                    <span>{feature.values[index]}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
