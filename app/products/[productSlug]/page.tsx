// app/products/[productSlug]/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import { productSlugToSeoKey } from "@/utils/seoMapping";

type PageParams = {
  productSlug: string;
};

type PageProps = {
  params: PageParams;
};

// Helper to get the SEO entry for a given slug
function getSeoForSlug(slug: string) {
  const key = productSlugToSeoKey[slug] ?? "products";
  const seo = pageSEO[key];

  if (!seo) {
    return pageSEO.products;
  }

  return seo;
}

// Dynamic metadata for each product
export function generateMetadata({ params }: PageProps): Metadata {
  const seo = getSeoForSlug(params.productSlug);

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
  };
}

// Page component with Product JSON-LD
export default function ProductPage({ params }: PageProps) {
  const { productSlug } = params;
  const seo = getSeoForSlug(productSlug);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: seo.title,
    description: seo.description,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    brand: {
      "@type": "Brand",
      name: siteSEO.siteName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Product: {productSlug}</h1>
        <p className="text-slate-700">{seo.description}</p>
      </section>
    </>
  );
}
