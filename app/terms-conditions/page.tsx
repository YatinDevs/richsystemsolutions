import Breadcrumb from "@/includes/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rich System Solution",
  description:
    "Read our terms and conditions to understand the rules and guidelines for using our website and services.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "legal terms",
  ],
};

interface TermsCondition {
  id: number;
  term_heading: string;
  description: string;
  order_index?: number;
}

interface TermsResponse {
  data: TermsCondition[];
  status: string;
  message?: string;
}

async function getTermsData(): Promise<TermsCondition[]> {
  try {
    const base_url = process.env.NEXT_PUBLIC_API_URL + "terms-conditions";
    const res = await fetch(base_url, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch terms: ${res.status}`);
    }

    const data: TermsResponse = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    // Return fallback data if API fails
    return getFallbackTerms();
  }
}

// Fallback data in case API fails
function getFallbackTerms(): TermsCondition[] {
  return [
    {
      id: 1,
      term_heading: "1. ACCEPTANCE OF TERMS",
      description:
        "Welcome to Rich System Solution. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time. All such guidelines or rules are hereby incorporated by reference into the Terms and Conditions.",
    },
    {
      id: 2,
      term_heading: "2. SERVICES DESCRIPTION",
      description:
        "Rich System Solution provides software development, digital marketing, web development, mobile app development, SEO services, social media marketing, UI/UX design, and IT consulting services (collectively, the 'Services'). The Services are subject to the terms and conditions of this Agreement. We reserve the right to modify, suspend, or discontinue any part of the Services at any time without notice.",
    },
    {
      id: 3,
      term_heading: "3. USER OBLIGATIONS",
      description:
        "As a user of this website or our Services, you agree not to: (a) use the Services for any illegal purpose; (b) violate any laws in your jurisdiction; (c) infringe upon any intellectual property rights; (d) harass, abuse, or harm another person; (e) upload or transmit viruses or any other malicious code; (f) attempt to gain unauthorized access to our Services, other accounts, computer systems, or networks; (g) interfere with or disrupt the Services or servers; (h) collect or store personal data about other users without their express permission.",
    },
    {
      id: 4,
      term_heading: "4. INTELLECTUAL PROPERTY",
      description:
        "All content included on this website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Rich System Solution or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Rich System Solution and protected by international copyright laws. All software used on this site is the property of Rich System Solution or its software suppliers and protected by international copyright laws.",
    },
    {
      id: 5,
      term_heading: "5. PAYMENT TERMS",
      description:
        "For paid Services, payment terms will be specified in individual service agreements or project proposals. Unless otherwise agreed in writing: (a) All fees are quoted in Indian Rupees (INR); (b) Payment is due within 30 days of invoice date; (c) Late payments may be subject to interest charges of 1.5% per month; (d) Client is responsible for all taxes associated with Services; (e) All fees are non-refundable unless otherwise specified.",
    },
    {
      id: 6,
      term_heading: "6. CONFIDENTIALITY",
      description:
        "Both parties agree to maintain the confidentiality of any proprietary information received from the other party during the term of this Agreement and for a period of three (3) years after termination. Proprietary information shall include, but not be limited to, trade secrets, know-how, inventions, techniques, processes, algorithms, software programs, schematics, customer lists, financial information, sales and marketing plans, and business plans.",
    },
    {
      id: 7,
      term_heading: "7. WARRANTY DISCLAIMER",
      description:
        "THE SERVICES AND ALL MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' FOR YOUR USE. RICH SYSTEM SOLUTION MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SERVICES, OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THE SERVICES. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, RICH SYSTEM SOLUTION DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.",
    },
    {
      id: 8,
      term_heading: "8. LIMITATION OF LIABILITY",
      description:
        "RICH SYSTEM SOLUTION SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF RICH SYSTEM SOLUTION HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (I) THE USE OR INABILITY TO USE THE SERVICES; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICES; OR (V) ANY OTHER MATTER RELATING TO THE SERVICES.",
    },
    {
      id: 9,
      term_heading: "9. INDEMNIFICATION",
      description:
        "You agree to indemnify, defend, and hold harmless Rich System Solution, its officers, directors, employees, agents, licensors, suppliers, and any third-party information providers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of this Agreement (including negligent or wrongful conduct) by you or any other person accessing the Services using your account.",
    },
    {
      id: 10,
      term_heading: "10. TERMINATION",
      description:
        "Rich System Solution reserves the right, in its sole discretion, to terminate your access to all or part of the Services, with or without notice, for any reason, including, without limitation, breach of this Agreement. Upon termination, you must destroy all materials obtained from the Services and all copies thereof. The provisions relating to Intellectual Property, Warranty Disclaimer, Limitation of Liability, Indemnification, and Miscellaneous shall survive any termination of this Agreement.",
    },
    {
      id: 11,
      term_heading: "11. GOVERNING LAW",
      description:
        "This Agreement shall be governed by and construed in accordance with the laws of the Republic of India, without giving effect to any principles of conflicts of law. You agree that any action at law or in equity arising out of or relating to these terms shall be filed only in the courts located in Nashik, Maharashtra, and you hereby consent and submit to the personal jurisdiction of such courts for the purposes of litigating any such action.",
    },
    {
      id: 12,
      term_heading: "12. CHANGES TO TERMS",
      description:
        "Rich System Solution reserves the right, at its sole discretion, to change, modify, add, or remove portions of these Terms and Conditions at any time. It is your responsibility to check these Terms and Conditions periodically for changes. Your continued use of the Services following the posting of changes will mean that you accept and agree to the changes. As long as you comply with these Terms and Conditions, Rich System Solution grants you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Services.",
    },
    {
      id: 13,
      term_heading: "13. CONTACT INFORMATION",
      description:
        "If you have any questions about these Terms and Conditions, please contact us at: Rich System Solution, 4th Floor, Akravi Disha, 401, opposite Hotel City Pride, Tilakwadi, Nashik, Maharashtra 422002. Email: support@richsol.com. Phone: 9595902003 / 9595902006. Business Hours: Monday to Friday, 9:00 AM to 6:00 PM IST.",
    },
  ];
}

const TermsConditions = async () => {
  const termsData = await getTermsData();
  const lastUpdated = "October 17, 2022";

  // Sort terms by ID or order_index if available
  const sortedTerms = [...termsData].sort(
    (a, b) => (a.order_index || a.id) - (b.order_index || b.id)
  );

  return (
    <>
      <Breadcrumb page="Terms & Conditions" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6">
              <div className="w-2 h-2 rounded-full bg-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Legal Agreement
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm md:text-base">
                  Last Updated: {lastUpdated}
                </span>
              </div>

              <div className="hidden md:block text-gray-300">•</div>

              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm md:text-base">
                  Reading time: 8 minutes
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our website or
              services. These terms govern your relationship with Rich System
              Solution.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Quick Summary */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-blue-800 mb-3">
                    By accessing or using our website and services, you
                    acknowledge that you have read, understood, and agree to be
                    bound by these Terms and Conditions. If you do not agree
                    with any part of these terms, you must not use our services.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-700">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      These terms constitute a legally binding agreement between
                      you and Rich System Solution.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Table of Contents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sortedTerms.map((term, index) => (
                  <a
                    key={term.id}
                    href={`#term-${term.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-200 group-hover:bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                      {term.term_heading.replace(/^\d+\.\s*/, "")}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-12">
              {sortedTerms.map((term, index) => (
                <div
                  key={term.id}
                  id={`term-${term.id}`}
                  className="scroll-mt-20"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-700">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {term.term_heading}
                      </h2>
                      <div className="mt-1 w-20 h-1 bg-blue-600 rounded-full" />
                    </div>
                  </div>

                  <div className="ml-16">
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {term.description}
                      </div>

                      {/* Add visual indicators for important terms */}
                      {term.term_heading.includes("LIABILITY") && (
                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center gap-2 text-red-700">
                            <svg
                              className="w-5 h-5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L4.072 16.5c-.77.833.192 2.5 1.732 2.5z"
                              />
                            </svg>
                            <span className="text-sm font-medium">
                              Important: Please review this section carefully as
                              it limits our liability.
                            </span>
                          </div>
                        </div>
                      )}

                      {term.term_heading.includes("PAYMENT") && (
                        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center gap-2 text-yellow-700">
                            <svg
                              className="w-5 h-5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm font-medium">
                              Note: Specific payment terms may vary by project
                              and will be detailed in your service agreement.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Acceptance Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Acceptance of Terms</h3>
                <p className="text-blue-100 mb-6">
                  By using our website or services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  and Conditions. If you have any questions about these terms,
                  please contact us before proceeding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact for Clarifications
                  </a>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 11l7-7 7 7M5 19l7-7 7 7"
                      />
                    </svg>
                    Back to Top
                  </button>
                </div>
              </div>
            </div>

            {/* Update Notice */}
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Last Updated
                    </p>
                    <p className="text-sm text-gray-600">{lastUpdated}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium"
                >
                  View Version History
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Legal Documents
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/privacy-policy"
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
                    Privacy Policy
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Learn how we collect, use, and protect your personal
                  information.
                </p>
              </a>

              <a
                href="/cookie-policy"
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-700">
                    Cookie Policy
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Understand how we use cookies and similar technologies on our
                  website.
                </p>
              </a>

              <a
                href="/refund-policy"
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700">
                    Refund Policy
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Review our policies regarding refunds and cancellations for
                  our services.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
