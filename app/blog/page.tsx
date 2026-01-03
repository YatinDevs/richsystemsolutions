// app/blog/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";

const seo = pageSEO.blog;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    siteName: siteSEO.siteName,
    images: [
      {
        url: `${siteSEO.baseUrl}/blog-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Blog - Rich System Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: seo.title,
    description: seo.description,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    publisher: {
      "@type": "Organization",
      name: siteSEO.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteSEO.baseUrl}/logo.png`,
      },
    },
    blogPost: [
      {
        "@type": "BlogPosting",
        headline: "The Future of Software Development in 2024",
        url: `${siteSEO.baseUrl}/blog/future-software-development-2024`,
        datePublished: "2024-01-15",
        dateModified: "2024-01-15",
        author: {
          "@type": "Person",
          name: "Tech Team",
        },
      },
      // Add more blog posts as needed
    ],
  };

  const blogPosts = [
    {
      id: 1,
      slug: "future-software-development-2024",
      title: "The Future of Software Development in 2024: Trends to Watch",
      excerpt:
        "Explore the latest trends in software development including AI integration, low-code platforms, and cloud-native solutions that are shaping the industry.",
      category: "Software Development",
      readTime: "6 min read",
      date: "January 15, 2024",
      author: "Tech Team",
      image: "/blog/software-trends.jpg",
    },
    {
      id: 2,
      slug: "seo-strategies-2024",
      title: "SEO Strategies That Actually Work in 2024",
      excerpt:
        "Discover proven SEO techniques and strategies that can help your business rank higher in search results and attract more organic traffic.",
      category: "Digital Marketing",
      readTime: "8 min read",
      date: "December 20, 2023",
      author: "Marketing Team",
      image: "/blog/seo-strategies.jpg",
    },
    {
      id: 3,
      slug: "whatsapp-business-api-guide",
      title: "Complete Guide to WhatsApp Business API for Enterprises",
      excerpt:
        "Learn how to leverage WhatsApp Business API for customer engagement, marketing automation, and business communication.",
      category: "Business Communication",
      readTime: "10 min read",
      date: "November 10, 2023",
      author: "Communication Team",
      image: "/blog/whatsapp-api.jpg",
    },
    {
      id: 4,
      slug: "cloud-migration-best-practices",
      title: "Cloud Migration Best Practices: A Step-by-Step Guide",
      excerpt:
        "Planning to move to the cloud? Learn the best practices for a successful cloud migration without disrupting your business operations.",
      category: "Cloud Solutions",
      readTime: "12 min read",
      date: "October 5, 2023",
      author: "Cloud Team",
      image: "/blog/cloud-migration.jpg",
    },
    {
      id: 5,
      slug: "ui-ux-design-principles",
      title: "Essential UI/UX Design Principles for Better User Engagement",
      excerpt:
        "Master the fundamental principles of UI/UX design that can significantly improve user engagement and conversion rates.",
      category: "Design",
      readTime: "7 min read",
      date: "September 18, 2023",
      author: "Design Team",
      image: "/blog/ui-ux-design.jpg",
    },
    {
      id: 6,
      slug: "bulk-sms-marketing-tips",
      title: "10 Proven Bulk SMS Marketing Tips for Higher Conversion",
      excerpt:
        "Learn how to create effective bulk SMS campaigns that deliver results and maximize your return on investment.",
      category: "Marketing",
      readTime: "5 min read",
      date: "August 22, 2023",
      author: "Marketing Team",
      image: "/blog/sms-marketing.jpg",
    },
  ];

  const categories = [
    "All Posts",
    "Software Development",
    "Digital Marketing",
    "Business Communication",
    "Cloud Solutions",
    "Design",
    "IT Training",
  ];

  const popularTags = [
    "React",
    "Next.js",
    "SEO",
    "Digital Marketing",
    "Cloud Computing",
    "UI/UX",
    "API",
    "Automation",
    "Business Growth",
    "Technology",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen mt-30 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights & Resources
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Expert articles, tutorials, and insights on software
                development, digital marketing, and business technology from
                Rich System Solutions.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search articles, tutorials, guides..."
                    className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-6xl py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts - Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Post */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Featured Article
                </h2>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 h-64 md:h-auto flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="text-sm font-semibold mb-2">
                          FEATURED
                        </div>
                        <div className="text-4xl font-bold mb-4">AI</div>
                        <div className="text-xl">Integration Guide</div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                          Software Development
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">
                          January 15, 2024
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        <Link
                          href="/blog/future-software-development-2024"
                          className="hover:text-blue-600 transition-colors"
                        >
                          The Future of Software Development in 2024: Trends to
                          Watch
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Explore the latest trends in software development
                        including AI integration, low-code platforms, and
                        cloud-native solutions that are shaping the industry.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="text-gray-700">Tech Team</span>
                        </div>
                        <Link
                          href="/blog/future-software-development-2024"
                          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                        >
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Recent Articles
                  </h2>
                  <div className="text-sm text-gray-500">
                    Showing {blogPosts.length} articles
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-3xl font-bold mb-2">
                            {post.category
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>
                          <div className="text-sm opacity-90">
                            {post.category}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                            {post.category}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-500 text-sm flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                            <span className="text-sm text-gray-700">
                              {post.author}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    2
                  </button>
                  <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    10
                  </button>
                  <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {index === 0
                            ? blogPosts.length
                            : Math.floor(Math.random() * 10) + 5}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold mb-3">
                  Subscribe to Newsletter
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest articles and insights delivered directly to
                  your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-xs opacity-75 mt-3">
                  No spam. Unsubscribe at any time.
                </p>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold mb-4">Most Read Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold">
                        {post.category
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {post.title.split(" ").slice(0, 6).join(" ")}...
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Write for Us?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Are you an expert in software development, digital marketing, or
              business technology? We&apos;re always looking for quality content
              contributors.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Submit Guest Post
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
