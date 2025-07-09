"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Star,
  CheckCircle,
  Users,
  Clock,
  Award,
  ExternalLink,
} from "lucide-react";
import ProfileCard from "@/components/ui/profileCard";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 theme-transition">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg z-50 border-b border-slate-200 dark:border-slate-700 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800 dark:text-slate-100">
              Dhruvin Gabani
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Full Stack Developer
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
                  Building Modern
                  <span className="text-blue-600 dark:text-blue-400 block">
                    Web & Mobile Apps
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg">
                  Experienced in MERN Stack and React Native, specializing in
                  scalable web and mobile applications with optimized
                  performance and user-friendly interfaces.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 group"
                >
                  View My Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                    2+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                    10+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Projects Built
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                    9.64
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    CGPA
                  </div>
                </div>
              </div>
            </div>

            {/* Lanyard Card */}
            <ProfileCard
              name="Dhruvin Gabani"
              title="Software Engineer"
              handle="dhruvin_gabani"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/profile_pic2.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => scrollToSection("contact")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-slate-900 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                About Me
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p className="text-lg">
                  I'm a passionate Full Stack Developer with experience in MERN
                  Stack and React Native, specializing in building scalable web
                  and mobile applications. Currently working at BMV System
                  Integration Pvt Ltd, where I develop high-performance
                  applications for both web and mobile platforms.
                </p>
                <p>
                  My expertise includes optimizing performance, integrating
                  RESTful APIs, creating user-friendly interfaces, and
                  maintaining effective client communication for project updates
                  and functionality requirements. I'm pursuing B.Tech in
                  Information Technology from Silver Oak University with a CGPA
                  of 9.64.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Technical Skills
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "React Native",
                        "Redux",
                        "Context API",
                        "React Hooks",
                        "JavaScript (ES6+)",
                        "HTML5",
                        "CSS3",
                        "Tailwind CSS",
                        "Material-UI",
                        "Bootstrap",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "RESTful APIs",
                        "JWT Authentication",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Development Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git",
                        "VS Code",
                        "Postman",
                        "Webpack",
                        "npm",
                        "ESLint",
                        "Prettier",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow theme-transition">
                <CardHeader className="pb-3">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-lg">Team Player</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Collaborative development experience
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow theme-transition">
                <CardHeader className="pb-3">
                  <Clock className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
                  <CardTitle className="text-lg">Agile Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Experienced in Agile methodologies
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow theme-transition">
                <CardHeader className="pb-3">
                  <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                  <CardTitle className="text-lg">High Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    9.64 CGPA academic excellence
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow theme-transition">
                <CardHeader className="pb-3">
                  <CheckCircle className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-2" />
                  <CardTitle className="text-lg">Client Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Strong client communication skills
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-slate-50 dark:bg-slate-800 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              My journey in software development with hands-on experience in
              modern technologies
            </p>
          </div>

          <div className="space-y-8">
            {/* Current Position */}
            <Card className="border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 theme-transition">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                      Software Engineer
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-slate-700 dark:text-slate-200">
                      BMV System Integration Pvt Ltd
                    </CardDescription>
                    <p className="text-slate-500 dark:text-slate-400">
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    Mar 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    Expanded expertise beyond web applications and worked on
                    React Native to build high-performance, cross-platform
                    mobile applications for Android and iOS
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    Designed and implemented responsive UI components with React
                    Native's core components and third-party libraries for
                    enhanced user experience
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    Continued refining skills in React.js, optimizing
                    applications for better performance and maintainability with
                    state management, API integrations, and UI/UX enhancements
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Previous Position */}
            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 theme-transition">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Software Engineer Intern
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-slate-700 dark:text-slate-200">
                      BMV System Integration Pvt Ltd
                    </CardDescription>
                    <p className="text-slate-500 dark:text-slate-400">
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                  <Badge variant="outline" className="dark:border-slate-600">
                    Aug 2023 – Feb 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    Developed responsive user interfaces using React.js,
                    managing state with Redux, Context API, and Hooks
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    Collaborated with backend teams to integrate RESTful APIs
                    and optimized performance through lazy loading and
                    code-splitting
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    Maintained regular client communication to gather
                    requirements, provide project updates, and ensure
                    functionality alignment with business needs
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    Participated in Agile processes and used Git for version
                    control in a collaborative team environment
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-slate-900 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Here are some of my key projects that showcase my technical skills
              and problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Diamond Management System",
                description:
                  "Comprehensive MERN stack application for managing client and diamond records with full CRUD operations, monthly tracking, and dynamic billing reports.",
                tech: [
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "React-Router",
                  "Axios",
                ],
                features: [
                  "Client Management",
                  "Diamond Records",
                  "Monthly Tracking",
                  "Billing Reports",
                  "User Authentication",
                ],
                image:
                  "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=500",
              },
              {
                title: "Doorways - Real Estate Platform",
                description:
                  "Full-featured real estate platform with secure authentication, role-based access control, and property management capabilities.",
                tech: [
                  "React",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Context API",
                  "React Router",
                ],
                features: [
                  "Property Management",
                  "User Authentication",
                  "Role-based Access",
                  "Secure Navigation",
                ],
                image:
                  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=500",
                liveUrl: "https://doorwaysapp.co.za",
              },
              {
                title: "KT-Inventory Management System",
                description:
                  "Advanced inventory management system with real-time tracking, barcode scanning, and location-based audits with counter-auditor verification.",
                tech: [
                  "React",
                  "Material-UI",
                  "Tailwind CSS",
                  "Axios",
                  "JavaScript",
                ],
                features: [
                  "Real-time Tracking",
                  "Barcode Scanning",
                  "Location Audits",
                  "Device Integration",
                ],
                image:
                  "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=500",
              },
              {
                title: "KT-Dometic Dashboard",
                description:
                  "Comprehensive system for generating backflush process tickets with interactive dashboard, statistical visualization, and parts dependency viewer.",
                tech: [
                  "React",
                  "Redux",
                  "React ApexCharts",
                  "Tailwind CSS",
                  "RESTful APIs",
                ],
                features: [
                  "Process Automation",
                  "Data Visualization",
                  "Parts Explorer",
                  "Dependency Viewer",
                ],
                image:
                  "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 theme-transition"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs dark:border-slate-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">
                        Key Features
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-slate-900 dark:bg-slate-950 text-white theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-xl text-slate-300 dark:text-slate-400">
                  Ready to bring your project to life? Get in touch and let's
                  discuss how I can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 dark:text-blue-300" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-slate-300 dark:text-slate-400">
                      gabannidhruvin30@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 dark:text-blue-300" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-slate-300 dark:text-slate-400">
                      +91 8799300227
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 dark:text-blue-300" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-slate-300 dark:text-slate-400">
                      Ahmedabad, Gujarat, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-600 dark:border-slate-500 hover:bg-slate-800 dark:hover:bg-slate-700"
                  asChild
                >
                  <a
                    href="https://github.com/GDhruvin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-slate-700 dark:text-white" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-600 dark:border-slate-500 hover:bg-slate-800 dark:hover:bg-slate-700"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/dhruvin-gabani-653863223/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-slate-700 dark:text-white" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="bg-slate-800 dark:bg-slate-900 border-slate-700 dark:border-slate-600 theme-transition">
              <CardHeader>
                <CardTitle className="text-white">Send me a message</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-400">
                  Fill out the form below and I'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 dark:text-slate-400 mb-2 block">
                      First Name
                    </label>
                    <Input className="bg-slate-900 dark:bg-slate-800 border-slate-600 dark:border-slate-500 text-white" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300 dark:text-slate-400 mb-2 block">
                      Last Name
                    </label>
                    <Input className="bg-slate-900 dark:bg-slate-800 border-slate-600 dark:border-slate-500 text-white" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 dark:text-slate-400 mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="bg-slate-900 dark:bg-slate-800 border-slate-600 dark:border-slate-500 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 dark:text-slate-400 mb-2 block">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-900 dark:bg-slate-800 border border-slate-600 dark:border-slate-500 rounded-md text-white">
                    <option>Web Application</option>
                    <option>Mobile Application</option>
                    <option>Full Stack Development</option>
                    <option>API Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 dark:text-slate-400 mb-2 block">
                    Project Details
                  </label>
                  <Textarea
                    className="bg-slate-900 dark:bg-slate-800 border-slate-600 dark:border-slate-500 text-white min-h-[120px]"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-950 text-white py-8 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-bold text-xl mb-2">Dhruvin Gabani</div>
            <p className="text-slate-400 dark:text-slate-500">
              © 2024 Dhruvin Gabani. All rights reserved. Built with Next.js and
              Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
