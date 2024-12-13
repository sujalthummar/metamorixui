import { Check } from "lucide-react";

const SiteCTA = () => {
    return (
        <section className="block items-center justify-between gap-14 xl:gap-16 md:flex">
            <div className="mx-auto md:mt-0 md:w-1/2">
                <h1 className="text-balance text-center text-3xl font-bold md:text-left lg:max-w-3xl lg:text-4xl">
                    Wants to build{" "}
                    <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        {" "}
                        website?
                    </span>{" "}
                    Build it with us
                </h1>
                <ul className="my-8 space-y-4">
                    {[
                        "24 / 5 support with a dedicated team of experts",
                        "Secure and reliable infrastructure with 99.9% uptime",
                        "Fast and efficient deployment with a global CDN",
                    ].map((pointer: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                            <div>
                                <Check className="size-6 rounded-full border-2 border-orange-500 p-0.5 text-orange-500" />
                            </div>
                            <span className="text-neutral-600 dark:text-neutral-300">
                                {pointer}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-6">
                    <a href="/pricing">
                        <button className="group h-10 select-none rounded-lg bg-orange-600 px-3 text-sm leading-8 text-zinc-50 shadow-[inset_0_1px_0px_0px_#fdba74] hover:bg-orange-700 active:bg-orange-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]">
                            <span className="block group-active:[transform:translate3d(0,1px,0)]">
                                Get started now
                            </span>
                        </button>
                    </a>
                    <button
                        role="link"
                        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
                    >
                        Learn more
                    </button>
                </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
                <div className="w-fit rounded-lg bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-slate-300/10 dark:ring-slate-500/10 lg:rounded-2xl lg:p-3">
                    <img
                        src="https://ui.metamorix.com/dashboard.png"
                        width={500}
                        height={500}
                        alt="CTA"
                        className="w-full rounded-lg bg-white ring-1 ring-gray-900/10 dark:bg-black"
                    />
                </div>
            </div>
        </section>
    );
};

export default SiteCTA;
