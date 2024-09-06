import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="mx-auto my-10 max-w-7xl">
      <div className="text-center text-sm font-semibold text-orange-600">
        PRICING
      </div>
      <h1 className="my-5 text-center text-2xl font-semibold leading-tight">
        Predictable pricing, designed to scale
      </h1>
      <p className="mx-auto max-w-lg text-center text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
        Our pricing is designed to scale with your business. Our plans have no
        hidden fees, and we never take a cut of your sales.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`mx-auto mt-6 flex w-full flex-col rounded-xl p-4 shadow-sm ${
              plan.id === "pro"
                ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500 via-orange-500 to-amber-500 text-white"
                : "border border-[#e4e4e7] dark:border-[#27272a]"
            }`}
          >
            <div className="w-full space-y-4">
              <p className="text-lg font-semibold">{plan.name.toUpperCase()}</p>
              <p
                className={`text-sm ${plan.id === "pro" ? "text-white" : "text-gray-600 dark:text-gray-400"}`}
              >
                {plan.description}
              </p>
              <p className="text-4xl font-semibold">
                <span>{plan.sellingPrice.monthly}</span>
                <span
                  className={`text-base ${plan.id === "pro" ? "text-white" : "text-gray-700 dark:text-gray-300"}`}
                >
                  /mo
                </span>
              </p>
            </div>
            <div className="mt-6">
              {plan.id === "pro" ? (
                <a href="mailto:hevinatwork@gmail.com?subject=I want to build software">
                  <button className="group h-10 w-full select-none rounded-lg bg-white px-3 text-sm leading-8 text-orange-600 shadow-[0_-1px_0_1px_orange_inset,0_0_0_1px_orange_inset,0_0.5px_0_1.5px_orange_inset] hover:bg-gray-100 active:bg-gray-200 active:shadow-[-1px_0px_1px_0px_orange_inset,1px_0px_1px_0px_orange_inset,0px_0.125rem_0px_0px_orange_inset]">
                    <span className="block group-active:[transform:translate3d(0,1px,0)]">
                      Contact us
                    </span>
                  </button>
                </a>
              ) : (
                <a href="mailto:hevinatwork@gmail.com?subject=I want to build software">
                  <button className="w-full rounded-lg border border-orange-600 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-400/10">
                    Contact us
                  </button>
                </a>
              )}
            </div>
            <ul role="list" className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 font-medium"
                >
                  <span className="size-5">
                    <Check
                      className={`size-5 rounded-full p-0.5 ${plan.id === "pro" ? "bg-white text-orange-600" : "bg-orange-600 text-white"}`}
                    />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

const plans = [
  {
    name: "Free",
    id: "free",
    description: "Perfect for individuals and small projects",
    sellingPrice: { monthly: "$0" },
    features: [
      "Free UI Blocks",
      "MIT Licence. Personal or commercial projects.",
      "React, NextJS and Tailwind CSS",
    ],
  },
  {
    name: "Pro",
    id: "pro",
    description: "Ideal for growing businesses and teams",
    sellingPrice: { monthly: "$499" },
    features: [
      "Priority Support",
      "Private Repository Access",
      "30-day Audit Log Retention",
      "Customizable Themes",
      "Weekly Updates",
      "Integration with 3rd Party APIs",
      "Unlimited API Requests",
      "30-day Analytics Retention",
    ],
  },
  {
    name: "Ultimate",
    id: "ultimate",
    description: "For large enterprises with advanced needs",
    sellingPrice: { monthly: "$999+" },
    features: [
      "Dedicated Support",
      "Advanced Analytics",
      "Customizable Dashboards",
      "24/7 Monitoring",
      "Automated Backups",
      "Role-Based Access Control",
      "Custom Integrations",
      "Unlimited API Requests",
      "Dedicated Account Manager",
      "Custom Code Implementation",
    ],
  },
];
