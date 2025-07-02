import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, Settings, LogOut, Mail, Phone } from "lucide-react";

export default function DropdownDemo() {
  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Dropdown Components Demo
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Showcasing different dropdown implementations and interactions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="clean-card p-6 text-center"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Basic Dropdown
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  Options
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          {/* Contact Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="clean-card p-6 text-center"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Contact Options
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full gradient-primary text-white">
                  Get In Touch
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Contact Me</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Me
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          {/* Services Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="clean-card p-6 text-center"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              My Services
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  Services
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Web Development</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Frontend Development</DropdownMenuItem>
                <DropdownMenuItem>Backend Development</DropdownMenuItem>
                <DropdownMenuItem>Full Stack Solutions</DropdownMenuItem>
                <DropdownMenuItem>API Development</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="clean-card p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Interactive Components
            </h2>
            <p className="text-gray-700 mb-6">
              These dropdown components are built using Radix UI primitives for
              accessibility and smooth animations. They demonstrate the kind of
              interactive elements I can build for your web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">Learn More</Button>
              <Button className="gradient-primary text-white">
                Contact Me
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
