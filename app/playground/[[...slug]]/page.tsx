import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";
import { DocPager } from "@/components/pager";

import "@/styles/mdx.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: `${doc.title} | Metamorix UI`,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: doc.image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [doc.image],
      creator: "@dillionverma",
    },
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc || !doc.published) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <div className="mx-auto w-full min-w-0 min-h-screen">
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocPager doc={doc} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doc.structuredData),
        }}
      />
      <SiteFooter />
    </>
  );
}
