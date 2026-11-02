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
  CheckCircle,
  Clock,
  Award,
  ExternalLink,
  Download,
  Eye,
  Layers,
  ShieldCheck,
  Cpu,
  Zap,
  Sparkles,
  Code2,
  Terminal,
  Copy,
  Check,
  Briefcase,
  GraduationCap,
  Smartphone,
  Bot,
  Flame,
} from "lucide-react";
import ProfileCard from "@/components/ui/profileCard";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState<
    "all" | "saas" | "healthcare" | "mobile"
  >("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "why-hire",
        "experience",
        "projects",
        "skills",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
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

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Featured Projects Data
  const projects = [
    {
      id: "apertr",
      title: "Apertr",
      subtitle: "Retail Analytics B2B SaaS",
      category: "saas",
      role: "Full-Stack Development & Architecture",
      badge: "Full-Stack B2B SaaS Platform",
      liveUrl: "https://dev.apertr.ai",
      displayUrl: "dev.apertr.ai",
      summary:
        "Engineered a B2B SaaS retail analytics platform from ground up, managing full-stack development across the Next.js/TypeScript frontend, PostgreSQL database, and Python background task queue with direct client collaboration.",
      bullets: [
        "Delivered full-stack development of the B2B SaaS retail analytics platform across Next.js/TypeScript frontend, PostgreSQL database, and Python background worker while directly managing client communication.",
        "Built organization and subscription setup workflows, real-time delivery audit dashboards, and manifest-driven report preview viewers using Recharts, Next.js App Router, and Shadcn UI.",
        "Integrated a Python (Procrastinate) background task queue with the Mailjet API for automated email dispatch.",
        "Maintained high code quality and test coverage through Vitest, Playwright automated testing, and strict WCAG 2.2 AA accessibility standards.",
      ],
      tech: [
        "Next.js",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Python",
        "Procrastinate Queue",
        "Mailjet API",
        "Recharts",
        "Shadcn UI",
        "Vitest",
        "Playwright",
        "WCAG 2.2 AA",
      ],
      highlights: [
        "Live on dev.apertr.ai",
        "Next.js App Router & React 19",
        "Automated Task Worker",
        "Vitest & Playwright Tests",
      ],
    },
    {
      id: "survey-guard",
      title: "SurveyGuard",
      subtitle: "Healthcare Compliance & Audit Platform",
      category: "healthcare",
      role: "Full-Stack & Frontend Engineering",
      badge: "HIPAA-Ready Architecture",
      liveUrl: "https://surveyguard.com/",
      displayUrl: "surveyguard.com",
      summary:
        "Comprehensive healthcare compliance and facility audit system with dynamic drag-and-drop survey creation, real-time deficiency scoring, and integrated AI assistant.",
      bullets: [
        "Built a dynamic audit and survey builder with drag-and-drop form creation, and a mock survey and deficiencies engine supporting real-time scoring and categorization for healthcare facility compliance workflows.",
        "Developed analytical facility dashboards and KPI charts using Recharts and MUI Data Grid, and integrated an AI assistant for automated survey recommendations and compliance insights.",
        "Built automated PDF/Excel export pipelines for audit reporting, delivering executive-ready regulatory summaries.",
        "Optimized heavy survey form rendering with virtualization and memoization, cutting form latency by roughly 40%.",
      ],
      tech: [
        "React 19",
        "TypeScript",
        "Redux Toolkit",
        "Zustand",
        "Material-UI (MUI)",
        "MUI Data Grid",
        "Recharts",
        "AI Assistant",
        "Form Virtualization",
        "PDF/Excel Export",
      ],
      highlights: [
        "Live on surveyguard.com",
        "~40% Form Latency Reduction",
        "AI-Powered Insights",
        "Drag & Drop Builder",
      ],
    },
    {
      id: "radiologist-iq",
      title: "RadioLogist IQ",
      subtitle: "Radiology CME Platform & DICOM Viewer",
      category: "healthcare",
      role: "Specialized Medical Imaging & SDE",
      badge: "DICOM & WebAssembly",
      summary:
        "High-performance radiology continuing medical education platform featuring high-fidelity in-browser DICOM medical image viewer powered by CornerstoneJS and WebAssembly.",
      bullets: [
        "Integrated CornerstoneJS to build an interactive browser-based DICOM medical image viewer supporting window/level adjustment, pan, zoom, measurement, and ROI annotations for MRI, CT, and X-Ray scans.",
        "Built a step-by-step diagnostic CME quiz engine, a searchable radiology case library with multi-filter drawers, and an administrative case ingestion pipeline for uploading and configuring DICOM series.",
        "Built performance analytics dashboards with Recharts, implemented role-based route guards, and optimized the DICOM rendering pipeline to prevent canvas memory leaks.",
      ],
      tech: [
        "React 19",
        "TypeScript",
        "CornerstoneJS",
        "WebAssembly (Wasm)",
        "HTML5 Canvas",
        "Recharts",
        "DICOM Ingestion",
        "Role-Based Guards",
      ],
      highlights: [
        "Browser DICOM Viewer",
        "Zero Canvas Memory Leaks",
        "Wasm Rendering",
        "Multi-Frame MRI/CT/X-Ray",
      ],
    },
    {
      id: "aroma",
      title: "Aroma",
      subtitle: "Multi-Tenant Ticket Management System",
      category: "saas",
      role: "Full-Stack & Frontend Development",
      badge: "Multi-Tenant & Stripe Billing",
      liveUrl: "https://arom-a.com",
      displayUrl: "arom-a.com",
      summary:
        "Jira/Zoho-style multi-tenant issue and customer support platform featuring subdomain isolation, enterprise Microsoft Entra ID Single Sign-On, and Stripe subscription billing.",
      bullets: [
        "Contributed to frontend development on a Jira/Zoho-style multi-tenant ticket management platform, owning feature implementation, bug fixing, and sprint delivery.",
        "Architected the multi-tenant flow across a public landing app and a secure organization app accessed via subdomain redirection, and implemented SSO with Microsoft Entra ID.",
        "Integrated Stripe for subscription billing, and built core ticket management functionality end-to-end with React, TypeScript, Redux, MUI, and REST APIs.",
      ],
      tech: [
        "React",
        "TypeScript",
        "Redux",
        "Material-UI",
        "Stripe Billing",
        "Microsoft Entra ID (SSO)",
        "Subdomain Multi-Tenancy",
        "REST APIs",
      ],
      highlights: [
        "Subdomain Tenant Isolation",
        "Microsoft Entra ID SSO",
        "Stripe Subscription Engine",
        "Live on arom-a.com",
      ],
    },
    {
      id: "mr-match",
      title: "MR Match",
      subtitle: "Dating Mobile Application",
      category: "mobile",
      role: "Mobile Application Developer (React Native)",
      badge: "React Native & Safety Suite",
      liveUrl: "https://mrmatch.com",
      displayUrl: "mrmatch.com",
      summary:
        "Cross-platform dating mobile application with Tinder-style swipe profile discovery, real-time geolocation matching, live GPS safety sharing, and Google Play release validation.",
      bullets: [
        "Worked on the Android side of a Tinder/Bumble-style dating app focused on dating safety and LGBTQ+ inclusivity, fixing crashes, optimizing performance, and shipping new features on a partially built codebase.",
        "Built Tinder-style swipeable profile discovery with react-native-deck-swiper and geolocation-based matching, plus a live safe-dating feature with real-time GPS sharing, recording, and safety check-ins.",
        "Built group functionality with private/public groups and invite links, integrated Firebase and Socket.io for real-time features, and validated the app through Google Play closed testing.",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Socket.io",
        "react-native-deck-swiper",
        "Geolocation APIs",
        "Google Play Console",
        "Real-Time Chat",
      ],
      highlights: [
        "Live GPS Safety Sharing",
        "Swipeable Card Discovery",
        "Google Play Store Deployed",
        "Firebase & Socket.io Real-Time",
      ],
    },
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 theme-transition selection:bg-blue-500 selection:text-white">
      {/* Top Floating Navigation */}
      <nav className="fixed top-0 w-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md z-50 border-b border-slate-200/80 dark:border-slate-800/80 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              onClick={() => scrollToSection("home")}
              className="cursor-pointer flex items-center space-x-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                DG
              </div>
              <div>
                <span className="font-bold text-lg text-slate-800 dark:text-slate-100 block leading-tight">
                  Dhruvin Gabani
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Full Stack & Mobile Developer
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              {[
                { name: "About", id: "about" },
                { name: "Why Hire Me", id: "why-hire" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Education", id: "education" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors py-1 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="/Dhruvin_Gabani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 text-xs sm:text-sm font-medium"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Resume
                </Button>
              </a>

              <ThemeToggle />

              <Button
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm shadow-blue-500/20 text-xs sm:text-sm"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 sm:pt-28 pb-16 lg:pb-24 min-h-[92vh] flex items-center relative overflow-hidden"
      >
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Intro */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Agency Availability Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                <span>Full Stack Developer & Mobile App Engineer (SDE)</span>
                <span className="text-slate-400 dark:text-slate-500">|</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Open for Contracts
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                  Engineering Scalable,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                    High-Performance
                  </span>{" "}
                  Web & Mobile Applications.
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  Full Stack Developer & Mobile App Engineer (SDE) with
                  production experience across{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    React.js, Next.js, React Native, Node.js, and TypeScript
                  </strong>
                  . Specializing in{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    multi-tenant architecture
                  </span>
                  , HIPAA-compliant systems, DICOM/Wasm imaging, performance
                  optimization, and cutting-edge{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    AI-assisted engineering
                  </span>
                  .
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/25 group"
                >
                  Explore Featured Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <a
                  href="/Dhruvin_Gabani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold gap-2"
                  >
                    <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Download Resume (PDF)
                  </Button>
                </a>

                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Quick Impact Metrics Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      2.5+ Yrs
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Industry Experience
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                      5+
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Production SaaS & Apps
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      ~40%
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Form Latency Cut
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                      9.64
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      CGPA Distinction
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Centered 3D Profile Card with no bottom user-info box */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-sm flex justify-center">
                <ProfileCard
                  name="Dhruvin Gabani"
                  title="Full Stack & Mobile Developer (SDE)"
                  handle="dhruvin"
                  avatarUrl="/assets/profile_pic.png"
                  showUserInfo={false}
                  enableTilt={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why High-Profile Clients & Freelancing Agencies Choose Dhruvin */}
      <section
        id="why-hire"
        className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge
              variant="outline"
              className="mb-3 px-3 py-1 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold"
            >
              Enterprise & Agency Advantage
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why Agencies & High-Growth Startups Partner With Me
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Delivering full-cycle engineering across web and mobile platforms
              with battle-tested architecture, HIPAA compliance, rapid
              AI-accelerated delivery, and measurable performance optimizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Layers className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Multi-Tenant & Enterprise SaaS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  Experience architecting subdomain-based multi-tenant routing,
                  isolated organization contexts, role-based access control
                  (RBAC), and enterprise SSO via Microsoft Entra ID.
                </p>
                <div className="pt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                  Stripe Subscriptions & Subdomains
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:shadow-lg hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  HIPAA & Medical Imaging (Wasm)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  Hands-on compliance with HIPAA data handling, browser-based
                  DICOM imaging via CornerstoneJS & WebAssembly, window/level
                  tuning, ROI annotations, and zero canvas memory leaks.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Healthcare Audits & Wasm Viewers
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:shadow-lg hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  ~40% Latency Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  Form virtualization, aggressive memoization, dynamic
                  code-splitting, and intelligent client state (Zustand, Redux
                  Toolkit, React Query) delivering rapid 60 FPS interfaces.
                </p>
                <div className="pt-2 text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-500" />
                  Heavy Data Grids & Instant Renders
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:shadow-lg hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Bot className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  AI-Assisted Accelerated Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  Modern agentic workflows (Claude Code, Antigravity, MCP,
                  Context Engineering, Tool Calling), enabling fast production
                  turnaround with rigorous Vitest/Playwright test suites.
                </p>
                <div className="pt-2 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                  High Speed & Enterprise Code Quality
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase">
                <Code2 className="w-4 h-4" /> Professional Profile
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Architecting Full-Stack & Mobile Applications with Speed and Precision
              </h2>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  I am a{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Full Stack Developer & Mobile App Engineer (SDE)
                  </strong>{" "}
                  with extensive experience across React.js, Next.js (App
                  Router, React 19), React Native, Node.js, and TypeScript.
                  Currently at{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Multiminds Technology Pvt Ltd
                  </strong>
                  , I develop web and mobile solutions, owning feature
                  development, API integrations, and system performance.
                </p>
                <p>
                  My engineering background bridges cross-platform mobile
                  engineering (Android & iOS) and web architectures — including
                  independently publishing the team's first mobile application
                  to the{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Google Play Store
                  </strong>
                  , architecting multi-tenant SaaS platforms with subdomain
                  redirection, and handling HIPAA-compliant workflows for
                  healthcare platforms.
                </p>
                <p>
                  I graduated with a{" "}
                  <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                    9.64 CGPA
                  </strong>{" "}
                  in B.Tech Information Technology from Silver Oak University.
                  I focus on building clean, maintainable systems, maintaining
                  proactive communication, and delivering reliable software.
                </p>
              </div>

              {/* Core Strengths Badges */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Core Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js App Router (React 19)",
                    "Cross-Platform React Native",
                    "Full Stack Node.js & Express",
                    "PostgreSQL & MongoDB",
                    "Multi-Tenant Architecture",
                    "HIPAA-Compliant Systems",
                    "DICOM Medical Imaging (CornerstoneJS)",
                    "Subdomain Routing & Entra ID SSO",
                    "Stripe Subscription Billing",
                    "AI-Assisted Development (MCP)",
                    "Vitest & Playwright E2E",
                    "Performance Optimization (-40% Latency)",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/50 py-1 px-2.5 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stat Cards */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Cpu className="w-7 h-7 text-blue-600 dark:text-blue-400 mb-1" />
                  <CardTitle className="text-base font-bold">
                    Full-Stack Mastery
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 dark:text-slate-400">
                  End-to-end engineering across React, Next.js, Node.js,
                  PostgreSQL, Python background workers, and RESTful APIs.
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Smartphone className="w-7 h-7 text-emerald-600 dark:text-emerald-400 mb-1" />
                  <CardTitle className="text-base font-bold">
                    Mobile & Web Native
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 dark:text-slate-400">
                  Cross-platform React Native mobile applications for Android &
                  iOS, independently published and validated on Google Play.
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Award className="w-7 h-7 text-purple-600 dark:text-purple-400 mb-1" />
                  <CardTitle className="text-base font-bold">
                    Academic Distinction
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 dark:text-slate-400">
                  9.64 CGPA in B.Tech Information Technology from Silver Oak
                  University; solid foundation in algorithms and system design.
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Zap className="w-7 h-7 text-amber-600 dark:text-amber-400 mb-1" />
                  <CardTitle className="text-base font-bold">
                    Rapid Turnaround
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 dark:text-slate-400">
                  Leveraging modern AI-driven agentic toolchains to accelerate
                  scaffolding, testing, and debugging with high quality.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge
              variant="outline"
              className="mb-3 px-3 py-1 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold"
            >
              Career Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Professional Work Experience
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Demonstrated track record of delivering production software,
              developing modern web and mobile applications, and collaborating
              effectively across Agile sprints.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Position 1: Multiminds Technology */}
            <Card className="border-blue-200 dark:border-blue-900/60 shadow-md bg-white dark:bg-slate-900/90 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1">
                      <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        Software Development Engineer (Full Stack & Mobile)
                      </CardTitle>
                      <Badge className="bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs">
                        Current Role
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-semibold text-blue-600 dark:text-blue-400">
                      Multiminds Technology Pvt Ltd
                    </CardDescription>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> Ahmedabad, Gujarat
                    </p>
                  </div>
                  <Badge className="w-fit bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-medium">
                    Dec 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Build and maintain React.js and Next.js web applications
                      with TypeScript, owning feature development, bug fixing,
                      API integration, and performance optimization end-to-end.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Independently published the team’s first application on the{" "}
                      <strong className="text-slate-800 dark:text-slate-200">
                        Google Play Store
                      </strong>
                      , and implemented multi-tenant architecture and
                      HIPAA-compliant data handling for healthcare-focused client
                      projects.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Improved application performance through optimized
                      rendering and state management with{" "}
                      <strong className="text-slate-800 dark:text-slate-200">
                        Redux Toolkit, Zustand, and React Query
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Delivered frontend features on client projects, using Jira
                      for sprint planning, Slack for coordination, GitHub for
                      code review, and maintaining regular client communication.
                    </span>
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800">
                  {[
                    "Next.js",
                    "React.js",
                    "React Native",
                    "TypeScript",
                    "Redux Toolkit",
                    "Zustand",
                    "React Query",
                    "Google Play Store",
                    "Multi-Tenant Architecture",
                    "HIPAA Compliance",
                    "Jira Agile",
                  ].map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs bg-slate-50 dark:bg-slate-800/60"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Position 2: BMV System Integration (Software Engineer) */}
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-400 dark:bg-slate-600" />
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Software Engineer (Web & Mobile)
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-slate-700 dark:text-slate-300">
                      BMV System Integration Pvt Ltd
                    </CardDescription>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> Ahmedabad, Gujarat
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit text-slate-700 dark:text-slate-300 font-medium"
                  >
                    Mar 2025 – Nov 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Expanded expertise beyond web applications to{" "}
                      <strong className="text-slate-800 dark:text-slate-200">
                        React Native
                      </strong>
                      , building high-performance, cross-platform mobile
                      applications for Android and iOS.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Continued refining React.js skills, optimizing applications
                      for performance and maintainability while working
                      extensively on state management, API integrations, and
                      UI/UX enhancements.
                    </span>
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800">
                  {[
                    "React Native",
                    "React.js",
                    "Android & iOS",
                    "Cross-Platform",
                    "REST APIs",
                    "State Management",
                    "UI/UX Enhancement",
                  ].map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs bg-slate-50 dark:bg-slate-800/60"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Position 3: BMV System Integration (Software Engineer Intern) */}
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-300 dark:bg-slate-700" />
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Software Engineer Intern
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-slate-700 dark:text-slate-300">
                      BMV System Integration Pvt Ltd
                    </CardDescription>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> Ahmedabad, Gujarat
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit text-slate-600 dark:text-slate-400 font-medium"
                  >
                    Aug 2023 – Feb 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Developed responsive user interfaces using React.js,
                      managing state with Redux, Context API, and Hooks, and
                      integrated RESTful APIs with backend teams.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Optimized performance through lazy loading and
                      code-splitting, maintained client communication for
                      requirements and updates, and used Git in a collaborative
                      Agile environment.
                    </span>
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800">
                  {[
                    "React.js",
                    "Redux",
                    "Context API",
                    "RESTful APIs",
                    "Code Splitting",
                    "Git",
                    "Agile",
                  ].map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs bg-slate-50 dark:bg-slate-800/60"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge
              variant="outline"
              className="mb-3 px-3 py-1 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold"
            >
              Production Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Featured Enterprise Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              In-depth breakdown of high-profile platforms built and delivered,
              highlighting architecture, scale, and technical complexity.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Projects (5)" },
              { id: "saas", label: "B2B SaaS & Multi-Tenant" },
              { id: "healthcare", label: "Healthcare & DICOM" },
              { id: "mobile", label: "Mobile Apps (React Native)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  projectFilter === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="space-y-10">
            {filteredProjects.map((project, idx) => (
              <Card
                key={project.id}
                className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Left Column: Project Overview & Meta */}
                  <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/60 dark:bg-slate-900/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <Badge className="bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold py-1">
                          {project.badge}
                        </Badge>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                          0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          Key Architecture Highlights
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {project.highlights.map((h, hIdx) => (
                            <div
                              key={hIdx}
                              className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-700 flex items-center gap-1.5"
                            >
                              <Sparkles className="w-3 h-3 text-blue-500 flex-shrink-0" />
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Live link if available */}
                    {project.liveUrl && (
                      <div className="pt-6">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit {project.displayUrl}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Deep Technical Breakdown & Tech Stack */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Engineering Breakdown & Achievements
                      </div>

                      <ul className="space-y-3">
                        {project.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Technologies & Standards
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, tIdx) => (
                          <Badge
                            key={tIdx}
                            variant="secondary"
                            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-normal"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <section
        id="skills"
        className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge
              variant="outline"
              className="mb-3 px-3 py-1 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold"
            >
              Technical Arsenal
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Skills & Technology Stack
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Categorized matrix of technologies, frameworks, and methodologies
              used across production web, mobile, and full-stack systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Full Stack & Web Architecture */}
            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      Full-Stack & Frontend
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Modern React ecosystem & reactive stores
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React.js",
                    "Next.js (App Router)",
                    "React 19",
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "Redux",
                    "Redux Toolkit",
                    "Zustand",
                    "React Query (TanStack)",
                    "Context API",
                    "React Hooks",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 2. Mobile App Development */}
            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      Mobile App Development
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Cross-platform iOS & Android mobile apps
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React Native",
                    "Android & iOS",
                    "Google Play Console",
                    "react-native-deck-swiper",
                    "Geolocation APIs",
                    "Mobile Performance",
                    "Cross-Platform Architecture",
                    "Socket.io Mobile",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 3. Backend, Database & APIs */}
            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      Backend, Data & Workers
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Server runtimes, databases & queues
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Node.js",
                    "Express.js",
                    "PostgreSQL",
                    "MongoDB",
                    "Firebase",
                    "RESTful APIs",
                    "JWT Authentication",
                    "Python Background Workers",
                    "Procrastinate Queue",
                    "Mailjet API",
                    "Socket.io",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-900/40 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 4. Specialized & Performance */}
            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      Specialized Architecture
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Medical imaging, auth & payment integrations
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "CornerstoneJS (DICOM)",
                    "WebAssembly (Wasm)",
                    "HTML5 Canvas",
                    "Stripe Subscription Billing",
                    "Microsoft Entra ID (SSO)",
                    "Subdomain Tenant Routing",
                    "Virtualization & Memoization",
                    "HIPAA Data Compliance",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-900/40 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 5. DevOps, Cloud & Testing */}
            <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      DevOps, Tooling & QA
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Infrastructure, testing & code quality
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Git & GitHub",
                    "Docker",
                    "Terraform",
                    "CI/CD Pipelines",
                    "Vitest",
                    "Playwright E2E",
                    "Webpack",
                    "VS Code",
                    "Postman",
                    "npm",
                    "ESLint",
                    "Prettier",
                    "WCAG 2.2 AA",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-900/40 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 6. AI-Assisted Engineering */}
            <Card className="border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-amber-950/20">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold flex items-center gap-1.5">
                      AI-Assisted Development
                      <Flame className="w-4 h-4 text-amber-500 fill-current" />
                    </CardTitle>
                    <p className="text-xs text-amber-700/80 dark:text-amber-400/80">
                      Modern agentic tooling & context optimization
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Claude Code",
                    "Antigravity",
                    "GitHub Copilot",
                    "OpenAI Codex",
                    "Vibe Coding",
                    "Context Engineering",
                    "Prompt Engineering",
                    "Tool Calling",
                    "MCP (Model Context Protocol)",
                    "Token Optimization",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-amber-100/70 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-semibold"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section
        id="education"
        className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge
              variant="outline"
              className="mb-3 px-3 py-1 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold"
            >
              Academic Background
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Education & Academic Excellence
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Strong mathematical, algorithmic, and software engineering
              distinction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Degree */}
            <Card className="border-blue-200 dark:border-blue-900/60 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <Badge className="bg-blue-600 text-white font-bold text-sm">
                    CGPA: 9.64
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold pt-2">
                  Silver Oak University
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  B.Tech in Information Technology
                </CardDescription>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" /> Ahmedabad, Gujarat
                  <span>•</span>
                  <span>Oct 2021 – June 2025</span>
                </p>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  Graduated with top academic standing (9.64 CGPA). Deep
                  coursework across Data Structures & Algorithms, Object-Oriented
                  Design, Database Systems, Computer Networks, and Cloud
                  Architectures.
                </p>
              </CardContent>
            </Card>

            {/* School */}
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold text-sm"
                  >
                    84.55%
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold pt-2">
                  Shree Swaminarayn Gurukul
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Higher Secondary Education (12th Boards)
                </CardDescription>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" /> Surat, Gujarat
                  <span>•</span>
                  <span>Completed May 2021</span>
                </p>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  Completed science and mathematics curriculum with high
                  distinction (84.55%), establishing strong analytical and
                  computational reasoning skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Download Callout Banner */}
      <section className="py-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Reviewing for a Freelancing Agency or Enterprise Contract?
              </h3>
              <p className="text-blue-100 text-base max-w-2xl">
                Download the official 2026 PDF resume detailing complete
                experience at Multiminds Technology & BMV System Integration,
                metrics, and full project scopes.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/Dhruvin_Gabani_Resume.pdf"
                download="Dhruvin_Gabani_Resume.pdf"
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-slate-100 text-blue-700 font-bold shadow-xl gap-2 px-6 py-3"
                >
                  <Download className="w-4 h-4 text-blue-700" />
                  Download Resume PDF
                </Button>
              </a>
              <a
                href="/Dhruvin_Gabani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white border-2 border-white/80 hover:border-white font-semibold gap-2 shadow-xl px-6 py-3 transition-all"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  Preview in Browser
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Freelance Inquiry Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-slate-900 text-white theme-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <Badge className="bg-blue-900/60 text-blue-300 border border-blue-700 mb-3 px-3 py-1">
                  Ready to Collaborate
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Let's Discuss Your Project or Agency Roster
                </h2>
                <p className="mt-3 text-slate-300 text-base leading-relaxed">
                  Available for freelance contracts, full-stack & mobile
                  engineering engagements, and agency partnerships. Open to
                  overlapping with US, EU, and APAC time zones.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">
                        Email
                      </div>
                      <a
                        href="mailto:gabannidhruvin30@gmail.com"
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        gabannidhruvin30@gmail.com
                      </a>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      copyToClipboard("gabannidhruvin30@gmail.com", "email")
                    }
                    className="text-slate-300 hover:text-white"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Phone / WhatsApp with copy button */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">
                        Phone / WhatsApp
                      </div>
                      <a
                        href="tel:+918799300227"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        +91 8799300227
                      </a>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      copyToClipboard("+918799300227", "phone")
                    }
                    className="text-slate-300 hover:text-white"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Location */}
                <div className="flex items-center p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-x-3">
                  <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      Location & Timezone
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Ahmedabad, Gujarat, India (IST / Flexible Global Overlaps)
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Dhruvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dhruvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <Card className="bg-slate-800/90 border-slate-700 text-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Send a Project Inquiry
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Provide project context or scope details and I will reply
                    within 12–24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-center space-y-2">
                      <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                      <div className="font-bold text-lg">
                        Thank you for reaching out!
                      </div>
                      <p className="text-sm text-emerald-300">
                        Your message has been received. You can also reach me
                        directly at gabannidhruvin30@gmail.com or +91 8799300227.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                            Your Name *
                          </label>
                          <Input
                            required
                            placeholder="e.g. Sarah Jenkins"
                            className="bg-slate-900 border-slate-700 text-white focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                            Work Email *
                          </label>
                          <Input
                            type="email"
                            required
                            placeholder="sarah@agency.com"
                            className="bg-slate-900 border-slate-700 text-white focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                            Project Type / Scope
                          </label>
                          <select className="w-full h-10 px-3 bg-slate-900 border border-slate-700 rounded-md text-sm text-white focus:outline-none focus:border-blue-500">
                            <option>B2B SaaS / Web Platform</option>
                            <option>React Native Mobile App</option>
                            <option>Healthcare & HIPAA Platform</option>
                            <option>Multi-Tenant / Subdomain Architecture</option>
                            <option>Performance Optimization (-40% Latency)</option>
                            <option>Full-Stack Contract / Retainer</option>
                            <option>Freelancing Agency Roster Onboarding</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                            Target Timeline / Budget
                          </label>
                          <Input
                            placeholder="e.g. Immediate / Flexible"
                            className="bg-slate-900 border-slate-700 text-white focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                          Project Details & Requirements *
                        </label>
                        <Textarea
                          required
                          placeholder="Tell me about your tech stack, requirements, deliverables, or agency talent needs..."
                          className="bg-slate-900 border-slate-700 text-white min-h-[120px] focus:border-blue-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 shadow-md shadow-blue-500/20"
                      >
                        Send Inquiry
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                DG
              </div>
              <div>
                <span className="font-bold text-slate-200">
                  Dhruvin Gabani
                </span>
                <span className="text-xs text-slate-500 block">
                  Full Stack Developer & Mobile App Engineer (SDE)
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-500 text-center sm:text-right">
              <p>
                © {new Date().getFullYear()} Dhruvin Gabani. Built with Next.js,
                React 19, TypeScript & Tailwind CSS.
              </p>
              <p className="mt-1">
                Ahmedabad, Gujarat, India • Available for Remote Worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
