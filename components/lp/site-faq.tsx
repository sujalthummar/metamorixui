"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import SectionHeader from "../section-header";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  i: number;
  expanded: number | null;
  setExpanded: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
  description: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: "Can I customize the animations?",
    description: "Yes, you can customize the animations using Framer Motion.",
  },
  {
    title: "What frameworks are supported?",
    description:
      "Metamorix UI is compatible with any front-end framework like React, Vue, Angular, and more.",
  },
  {
    title: "Is Metamorix UI free to use?",
    description:
      "Yes, Metamorix UI is free to use for both personal and commercial projects. You can use it without any restrictions.",
  },
  {
    title: "Can i contribute to Metamorix UI?",
    description:
      "Yes, you can contribute to Metamorix UI on GitHub. We welcome contributions from the community.",
  },
  {
    title: "You want to build a website with Metamorix UI?",
    description:
      "Yes, you can build a website with Metamorix UI. Contact us for more information.",
  },
];

const SiteFaq: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl">
      <SectionHeader
        title="Frequently asked questions"
        description="Need help with something? Here are our most frequently asked questions."
      />
      <div className="space-y-4">
        {accordionItems.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  title,
  description,
}) => {
  const isOpen = i === expanded;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        delay: 0.2 * i,
        duration: 0.8,
      }}
      className="overflow-hidden rounded-lg border border-[#e4e4e7] dark:border-[#27272a]"
    >
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen
            ? "bg-gray-100 dark:bg-gray-800"
            : "bg-white dark:bg-gray-900",
        }}
        onClick={() => setExpanded(isOpen ? null : i)}
        className="flex cursor-pointer items-center justify-between p-4"
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <div>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="size-5 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-gray-500/10 p-4 text-gray-700 dark:bg-neutral-500/10 dark:text-gray-300">
              {description}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SiteFaq;
