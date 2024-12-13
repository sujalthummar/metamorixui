import React from "react";

interface SectionHeaderProps {
    title: string;
    highlightedText?: string;
    description: string;
    className?: string; // Optional additional classes
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    highlightedText,
    description,
    className = "",
}) => {
    return (
        <div className={`flex flex-col items-center my-10 ${className}`}>
            <h1 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-100 md:text-4xl">
                {title}{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    {highlightedText}
                </span>
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300 md:text-lg max-w-2xl mx-auto text-center mt-4">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;
