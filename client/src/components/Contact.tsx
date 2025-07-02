import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { personalInfo } from "@/lib/constants";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const PRIMARY_API_URL =
  "https://contact-form-production-ba3c.up.railway.app/api/contact";
const BACKUP_API_URL = "https://contact-form-1-5y2q.onrender.com/api/contact";

export default function Contact() {
  const { toast } = useToast();
  const { theme } = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function sendContactRequest(url: string, data: ContactFormData) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const contentType = response.headers.get("Content-Type") || "";

      if (!response.ok) {
        let errorMessage = `Server responded with status ${response.status}`;
        if (contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } else {
          const text = await response.text();
          errorMessage = text || errorMessage;
        }
        throw new Error(errorMessage);
      }

      return contentType.includes("application/json")
        ? await response.json()
        : { message: await response.text() };
    } catch (error) {
      clearTimeout(timeoutId);
      if ((error as any).name === "AbortError") {
        throw new Error(
          "Request timed out. The server may be starting up, please try again.",
        );
      }
      throw error;
    }
  }

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      try {
        return await sendContactRequest(PRIMARY_API_URL, data);
      } catch (error) {
        console.warn("Primary API failed, trying backup...");
        return await sendContactRequest(BACKUP_API_URL, data);
      }
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: `${personalInfo.location} (Open to relocation)`,
    },
  ];

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-4xl lg:text-5xl font-light mb-12 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3
                  className={`text-xl font-medium mb-8 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                            theme === "dark" ? "bg-blue-600" : "bg-gray-900"
                          }`}
                        >
                          <Icon className="text-white h-5 w-5" />
                        </div>
                        <div>
                          <p
                            className={`font-medium text-sm uppercase tracking-wide transition-colors duration-300 ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className={`transition-colors duration-300 ${
                                theme === "dark"
                                  ? "text-gray-300 hover:text-white"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p
                              className={`transition-colors duration-300 ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="clean-card p-8 bg-gray-900 text-white"
              >
                <h4 className="font-medium text-lg mb-3">Download Resume</h4>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Get a comprehensive overview of my skills, experience, and
                  achievements in PDF format
                </p>
                <a
                  href="/Muhammad_Sufiyan.pdf"
                  download
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="clean-card p-8"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-8">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full btn-minimal flex items-center justify-center gap-2"
                >
                  {contactMutation.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {contactMutation.isPending && (
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium">
                      🚀 Sending your message...
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      This may take a moment if the server is starting up
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
