import React from "react";
import {
    CheckCircleIcon,
    CloudIcon,
    CodeIcon,
    GlobeIcon,
    LayersIcon,
    LayoutIcon,
    LoaderIcon,
    RocketIcon,
    StarIcon,
    ZapIcon,
} from "lucide-react";

import SectionHeader from "../section-header";

const SiteFeatures = () => {
    const features = [
        {
            icon: StarIcon,
            title: "Customizable Animations",
            description:
                "Easily tweak animations to match your brand's unique style and personality.",
        },
        {
            icon: LayoutIcon,
            title: "Responsive Design",
            description:
                "All animations are fully responsive and adapt seamlessly to any device.",
        },
        {
            icon: LoaderIcon,
            title: "Performance Optimized",
            description:
                "Lightweight animations designed to keep your app fast and responsive.",
        },
        {
            icon: GlobeIcon,
            title: "Global Reach",
            description:
                "Support for internationalization and localization for global audiences.",
        },
        {
            icon: LayersIcon,
            title: "Layered Effects",
            description:
                "Create complex and stunning animations using pre-built layered effects.",
        },
        {
            icon: RocketIcon,
            title: "Fast Integration",
            description:
                "Plug-and-play solutions for developers to get started in minutes.",
        },
        {
            icon: CodeIcon,
            title: "Developer Friendly",
            description:
                "Clean and well-documented codebase designed for easy customization.",
        },
        {
            icon: ZapIcon,
            title: "Real-time Updates",
            description: "Dynamic animations that react to real-time data changes.",
        },
        {
            icon: CheckCircleIcon,
            title: "Accessibility First",
            description:
                "Built with accessibility in mind, ensuring inclusivity for all users.",
        },
    ];

    return (
        <div>
            <SectionHeader
                title="What you get from"
                highlightedText="Metamorix UI"
                description="Focus on building amazing products while we handle the animations – pre-built, customizable, and plug-and-play."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <div key={index} className="p-4">
                        <div className="flex items-center">
                            <feature.icon className="mr-2" />
                            <h3 className="font-medium">{feature.title}</h3>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-white/60">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SiteFeatures;
