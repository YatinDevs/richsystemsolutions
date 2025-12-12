import type { Metadata } from "next";
import { pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.about;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="text-slate-700">This is the About page.</p>
    </section>
  );
}
