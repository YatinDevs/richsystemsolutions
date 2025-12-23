// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import Link from "next/link";

const seo = pageSEO.software_cloud;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function CloudSolutionsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud Solutions & Migration Services",
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
    },
    serviceType: "Cloud Solutions & Migration Services",
    areaServed: "IN",
  };

  const serviceDetails = {
    hero: {
      title: "Enterprise Cloud Solutions & Migration Services",
      description:
        "We specialize in designing, implementing, and managing scalable cloud infrastructure solutions that transform your business operations. Our cloud services help reduce costs, improve agility, and enhance security while ensuring optimal performance for your applications and workloads.",
      features: [
        "Scalable cloud infrastructure for business growth",
        "Cost optimization and pay-as-you-go models",
        "Enterprise-grade security and compliance",
        "High availability and disaster recovery",
        "Seamless migration with zero downtime",
        "24/7 monitoring and managed services",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive Cloud Solutions We Deliver",
      description:
        "We provide end-to-end cloud services including migration, implementation, and ongoing management across major cloud platforms.",
      solutions: [
        {
          title: "Cloud Migration & Modernization",
          description:
            "We help businesses seamlessly migrate their applications, data, and infrastructure to the cloud with minimal disruption and maximum efficiency.",
          features: [
            "Assessment and migration strategy planning",
            "Lift-and-shift, re-platform, and re-architecture migrations",
            "Legacy application modernization for cloud-native deployment",
            "Database migration (SQL Server, Oracle, PostgreSQL to cloud)",
            "Zero-downtime migration planning and execution",
            "Post-migration optimization and performance tuning",
          ],
        },
        {
          title: "Cloud Infrastructure Management",
          description:
            "We design, implement, and manage robust cloud infrastructure using Infrastructure as Code (IaC) and best practices.",
          features: [
            "AWS, Azure, and Google Cloud Platform implementation",
            "Virtual Private Cloud (VPC) and network architecture design",
            "Container orchestration with Kubernetes and Docker",
            "Serverless architecture implementation (Lambda, Functions, Cloud Run)",
            "Storage solutions (S3, Blob Storage, Cloud Storage)",
            "Load balancing and auto-scaling configuration",
          ],
        },
        {
          title: "DevOps & CI/CD Implementation",
          description:
            "We implement DevOps practices and continuous integration/continuous deployment pipelines to accelerate software delivery.",
          features: [
            "CI/CD pipeline setup with Jenkins, GitLab CI, GitHub Actions",
            "Infrastructure as Code with Terraform and CloudFormation",
            "Configuration management with Ansible, Chef, or Puppet",
            "Container registry and image management",
            "Monitoring and logging with Prometheus, Grafana, ELK stack",
            "Security scanning and vulnerability assessment integration",
          ],
        },
        {
          title: "Cloud Security & Compliance",
          description:
            "We implement enterprise-grade security measures and ensure compliance with industry regulations across your cloud environment.",
          features: [
            "Identity and Access Management (IAM) implementation",
            "Network security groups and firewall configuration",
            "Data encryption at rest and in transit",
            "Security monitoring and threat detection",
            "Compliance with GDPR, HIPAA, PCI-DSS, SOC 2",
            "Regular security audits and penetration testing",
          ],
        },
        {
          title: "Cloud Cost Optimization",
          description:
            "We help optimize your cloud spending through right-sizing, reserved instances, and efficient resource management.",
          features: [
            "Cloud cost analysis and spending optimization",
            "Reserved Instance and Savings Plans management",
            "Auto-scaling and resource scheduling",
            "Cost allocation tags and billing management",
            "Performance monitoring and optimization recommendations",
            "Cloud FinOps implementation and reporting",
          ],
        },
      ],
    },

    platforms: {
      title: "Cloud Platforms & Technologies",
      description:
        "We work with leading cloud platforms and cutting-edge technologies to deliver the best solutions for your business.",
      categories: [
        {
          platform: "Amazon Web Services (AWS)",
          services: [
            "EC2, S3, RDS",
            "Lambda, ECS/EKS",
            "VPC, CloudFront",
            "IAM, Security Hub",
            "CloudFormation",
            "Cost Explorer",
          ],
        },
        {
          platform: "Microsoft Azure",
          services: [
            "Virtual Machines",
            "Azure Kubernetes Service",
            "Blob Storage, SQL Database",
            "Azure Functions",
            "Azure DevOps",
            "Azure Security Center",
          ],
        },
        {
          platform: "Google Cloud Platform",
          services: [
            "Compute Engine",
            "Google Kubernetes Engine",
            "Cloud Storage",
            "Cloud Functions",
            "Cloud Run",
            "BigQuery",
          ],
        },
        {
          platform: "Cloud-Native Technologies",
          services: [
            "Kubernetes",
            "Docker",
            "Terraform",
            "Helm",
            "Prometheus",
            "Istio",
          ],
        },
        {
          platform: "Hybrid & Multi-Cloud",
          services: [
            "AWS Outposts",
            "Azure Arc",
            "Anthos",
            "Cloud Interconnect",
            "VPN/ExpressRoute",
            "Multi-cloud management",
          ],
        },
      ],
    },

    process: {
      title: "Our Cloud Implementation Process",
      description:
        "We follow a structured methodology to ensure successful cloud adoption and optimization.",
      steps: [
        {
          title: "Assessment & Planning",
          description:
            "Analyze your current infrastructure and plan the cloud strategy.",
          activities: [
            "Workload assessment",
            "Cost-benefit analysis",
            "Migration strategy",
            "Security requirements",
            "Timeline planning",
          ],
        },
        {
          title: "Architecture Design",
          description: "Design optimal cloud architecture for your needs.",
          activities: [
            "Solution architecture",
            "Network design",
            "Security architecture",
            "Disaster recovery plan",
            "Scalability planning",
          ],
        },
        {
          title: "Migration & Implementation",
          description: "Execute the migration with minimal disruption.",
          activities: [
            "Environment setup",
            "Data migration",
            "Application deployment",
            "Testing validation",
            "Performance tuning",
          ],
        },
        {
          title: "Optimization",
          description: "Continuously optimize for performance and cost.",
          activities: [
            "Performance monitoring",
            "Cost optimization",
            "Security hardening",
            "Automation implementation",
            "Documentation",
          ],
        },
        {
          title: "Management & Support",
          description: "Provide ongoing management and support.",
          activities: [
            "24/7 monitoring",
            "Incident response",
            "Regular updates",
            "Backup management",
            "Compliance audits",
          ],
        },
      ],
    },

    benefits: {
      title: "Benefits of Cloud Solutions",
      description:
        "Migrating to the cloud offers numerous advantages for modern businesses.",
      points: [
        {
          title: "Cost Efficiency",
          description:
            "Reduce capital expenditure with pay-as-you-go pricing and eliminate hardware maintenance costs.",
        },
        {
          title: "Scalability & Flexibility",
          description:
            "Easily scale resources up or down based on demand without upfront investments.",
        },
        {
          title: "Enhanced Security",
          description:
            "Enterprise-grade security features, regular updates, and compliance certifications.",
        },
        {
          title: "Business Continuity",
          description:
            "Built-in disaster recovery, backup solutions, and high availability configurations.",
        },
        {
          title: "Increased Agility",
          description:
            "Faster deployment of applications and services with DevOps automation.",
        },
        {
          title: "Global Reach",
          description:
            "Deploy applications closer to your users with global cloud regions and edge locations.",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="mx-auto max-w-6xl px-4 py-30 sm:py-40">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-600">
          <Link
            href="/"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/software-it-services"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Software & IT Services
          </Link>{" "}
          / <span className="text-slate-800 font-medium">Cloud Solutions</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {serviceDetails.hero.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-8 max-w-4xl leading-relaxed">
            {serviceDetails.hero.description}
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg mb-8">
            <h2 className="font-semibold text-blue-900 mb-4 text-base sm:text-lg">
              Key Features of Our Cloud Solutions
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceDetails.hero.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start p-2 hover:bg-white rounded transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-800 text-xs sm:text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.whatWeDeliver.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg mb-8 max-w-3xl">
              {serviceDetails.whatWeDeliver.description}
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {serviceDetails.whatWeDeliver.solutions.map((solution, index) => (
              <div
                key={index}
                className=" border-slate-200 rounded-xl p-4 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Header with responsive icon */}
                <div className="flex items-start mb-4">
                  {/* <div className="hidden sm:flex w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full items-center justify-center mr-3 text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div> */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed sm:pl-11 text-justify sm:text-left">
                  {solution.description}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 sm:pl-11">
                  {solution.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start p-2 md:p-3 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.process.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg mb-8 max-w-3xl">
              {serviceDetails.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {serviceDetails.process.steps.map((step, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  {step.description}
                </p>
                <div className="space-y-1.5 sm:space-y-2">
                  {step.activities.map((activity, aIndex) => (
                    <div
                      key={aIndex}
                      className="flex items-center text-xs sm:text-sm text-slate-700"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
