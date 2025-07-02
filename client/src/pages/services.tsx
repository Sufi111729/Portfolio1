import { motion } from "framer-motion";
import {
  Code,
  ShoppingCart,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Zap,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description:
        "Tailored web solutions built from scratch to meet your specific business requirements and goals.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description:
        "Complete online store solutions with payment integration, inventory management, and user-friendly interfaces.",
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description:
        "Scalable Software-as-a-Service platforms with subscription management and multi-tenant architecture.",
    },
    {
      icon: Database,
      title: "API Integration & Development",
      description:
        "RESTful APIs, third-party integrations, and microservices architecture for seamless connectivity.",
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps (PWAs)",
      description:
        "Mobile-first web applications that work offline and provide native app-like experiences.",
    },
    {
      icon: Shield,
      title: "Business Automation Tools",
      description:
        "Custom tools to automate repetitive tasks, streamline workflows, and improve operational efficiency.",
    },
  ];

  const technologies = [
    "React.js",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Python",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Docker",
    "Redis",
    "Express.js",
    "Spring Boot",
    "Java",
    "JavaScript",
    "HTML5",
    "CSS3",
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description:
        "Built with security best practices and future growth in mind",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Ongoing maintenance and support for your applications",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Professional Web Application Developer
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Custom, Scalable & Secure Solutions for Your Business
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Transform Your Business with Custom Web Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Are you looking for a custom web application tailored to your
              business needs? I specialize in developing high-quality,
              responsive, and user-friendly web applications that enhance
              productivity, streamline operations, and improve customer
              engagement. Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              My Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive web development services to meet all your business
              needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="clean-card p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Why Choose Me?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here's what sets my web development services apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Additional USPs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="clean-card p-8"
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
              Unique Selling Points
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "5+ Years Experience",
                "100+ Projects Completed",
                "Client-Centric Approach",
                "Modern Technologies",
                "Responsive Design",
                "SEO Optimized",
                "Performance Focused",
                "Clean Code Standards",
              ].map((usp, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{usp}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              I work with modern, industry-standard technologies to deliver
              robust solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-100 px-4 py-3 rounded-lg text-center text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-6">
              Ready to Build Your Next Big Idea?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that
              drives your business forward. Get started with a free consultation
              today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center"
                >
                  Start Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium"
              >
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center"
                >
                  Call Now: {personalInfo.phone}
                </a>
              </Button>
            </div>

            <div className="mt-8 text-gray-400">
              <p className="mb-2">📧 Email: {personalInfo.email}</p>
              <p className="mb-2">📱 Phone: {personalInfo.phone}</p>
              <p>🌐 Available for worldwide projects</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
