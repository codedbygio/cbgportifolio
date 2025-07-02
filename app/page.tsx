"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Instagram,
  Send,
  Sun,
  Moon,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Menu,
  X,
} from "lucide-react"
import {
  FaPaintBrush,
  FaCode,
  FaMobile,
  FaRocket,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaComments,
  FaEye,
  FaHeart,
  FaStar,
  FaGem,
  FaMagic,
} from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiFramer, SiAdobecreativecloud } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Portfolio() {
  const [language, setLanguage] = useState("pt")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, 300])
  const y3 = useTransform(scrollY, [0, 1000], [0, -100])
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360])
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -180])
  const scale1 = useTransform(scrollY, [0, 500], [1, 1.2])
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      icon: <FaPaintBrush className="w-8 h-8" />,
      title: "Identidade Visual",
      description:
        "Criação de logos, paletas de cores e elementos visuais únicos para sua marca com delicadeza e sofisticação.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Interfaces intuitivas e experiências de usuário que convertem e encantam com design centrado no usuário.",
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Desenvolvimento Front-End",
      description: "Código limpo e performático com as tecnologias mais modernas, sempre priorizando a qualidade.",
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Design Responsivo",
      description: "Projetos que funcionam perfeitamente em todos os dispositivos com atenção aos detalhes.",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Landing Pages",
      description: "Páginas de alta conversão focadas em resultados, performance e experiência memorável.",
    },
  ]

  const skills = {
    design: [
      { name: "Figma", icon: <FaFigma className="w-5 h-5" /> },
      { name: "Adobe Creative Suite", icon: <SiAdobecreativecloud className="w-5 h-5" /> },
      { name: "UI/UX Design", icon: <FaEye className="w-5 h-5" /> },
      { name: "Branding", icon: <FaGem className="w-5 h-5" /> },
      { name: "Typography", icon: <FaMagic className="w-5 h-5" /> },
    ],
    dev: [
      { name: "React/Next.js", icon: <FaReact className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-5 h-5" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" /> },
    ],
    soft: [
      { name: "Comunicação", icon: <FaComments className="w-5 h-5" /> },
      { name: "Criatividade", icon: <FaStar className="w-5 h-5" /> },
      { name: "Atenção aos Detalhes", icon: <FaHeart className="w-5 h-5" /> },
      { name: "Trabalho em Equipe", icon: <FaUsers className="w-5 h-5" /> },
      { name: "Gestão de Projetos", icon: <FaClock className="w-5 h-5" /> },
    ],
  }

  const projects = [
    {
      id: 1,
      title: "Cheiro na Cuca",
      subtitle: "Bar e Mini Mercado",
      image: "/projects/cheiro-na-cuca.png",
      description:
        "Criação de uma marca vibrante e temática para um bar descontraído. Cores fortes, ícones personalizados e tipografia expressiva para transmitir a energia do ambiente esportivo e casual.",
      technologies: ["Identidade Visual", "Landing Page", "Branding", "UI/UX"],
      live: "https://cheironacuca.vercel.app/",
      category: "Branding + Web",
    },
    {
      id: 2,
      title: "Lari França",
      subtitle: "Body Piercing",
      image: "/projects/lari-franca.png",
      description:
        "Marca delicada e sofisticada para uma body piercer. A rosa simboliza feminilidade e arte corporal com elegância, em uma paleta acolhedora e romântica.",
      technologies: ["Identidade Visual", "Landing Page", "Design Delicado", "Branding"],
      github: "https://github.com/codedbygio/Site-lf",
      live: "https://lfbodypiercer.vercel.app/",
      category: "Branding + Web",
    },
    {
      id: 3,
      title: "Studio Create MKT",
      subtitle: "Marketing Digital",
      image: "/projects/studio-create.png",
      description:
        "Criação de uma marca criativa e versátil para estúdio de design e marketing. Ícones e cores vibrantes refletem inovação, clareza visual e personalidade marcante.",
      technologies: ["Identidade Visual", "Social Media", "Branding", "Marketing"],
      category: "Branding + Social",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "skills", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      setShowScrollTop(window.scrollY > 300)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const translations = {
    pt: {
      nav: {
        home: "Início",
        about: "Sobre",
        services: "Serviços",
        skills: "Habilidades",
        portfolio: "Portfólio",
        contact: "Contato",
      },
      home: {
        title: "Dev & Designer",
        subtitle: "com identidade própria.",
        cta: "Conheça meu trabalho",
      },
      about: {
        title: "Sobre Mim",
        text1:
          "Sou Gio, desenvolvedora e designer apaixonada por criar experiências digitais únicas e memoráveis. Especializada em identidade visual e desenvolvimento front-end, combino criatividade e técnica para transformar ideias em realidade digital.",
        text2:
          "Minha abordagem é sempre centrada no usuário, buscando soluções que não apenas funcionem perfeitamente, mas que também encantem e surpreendam com design delicado e sofisticado.",
        projects: "Projetos Concluídos",
        experience: "Anos de Experiência",
      },
      services: {
        title: "Serviços",
        subtitle:
          "Ofereço soluções completas em design e desenvolvimento, sempre focado na qualidade, inovação e atenção aos detalhes que fazem a diferença.",
        items: [
          {
            title: "Identidade Visual",
            description:
              "Criação de logos, paletas de cores e elementos visuais únicos para sua marca com delicadeza e sofisticação.",
          },
          {
            title: "UI/UX Design",
            description:
              "Interfaces intuitivas e experiências de usuário que convertem e encantam com design centrado no usuário.",
          },
          {
            title: "Desenvolvimento Front-End",
            description:
              "Código limpo e performático com as tecnologias mais modernas, sempre priorizando a qualidade.",
          },
          {
            title: "Design Responsivo",
            description: "Projetos que funcionam perfeitamente em todos os dispositivos com atenção aos detalhes.",
          },
          {
            title: "Landing Pages",
            description: "Páginas de alta conversão focadas em resultados, performance e experiência memorável.",
          },
        ],
      },
      skills: {
        title: "Habilidades",
        subtitle:
          "Tecnologias e habilidades que domino para criar soluções excepcionais com foco na experiência do usuário.",
        categories: {
          design: "Design",
          dev: "Desenvolvimento",
          soft: "Soft Skills",
        },
      },
      portfolio: {
        title: "Portfólio",
        subtitle: "Alguns dos projetos que desenvolvi com paixão, dedicação e atenção aos detalhes.",
        clickDetails: "Clique para ver detalhes",
        techServices: "Tecnologias e Serviços:",
      },
      contact: {
        title: "Contato",
        subtitle:
          "Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades e desafios criativos.",
        connect: "Vamos nos conectar!",
        followText:
          "Siga-me nas redes sociais para acompanhar meus projetos e novidades do mundo do design e desenvolvimento.",
        form: {
          name: "Seu nome",
          email: "Seu e-mail",
          message: "Sua mensagem",
          send: "Enviar Mensagem",
        },
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
      },
      home: {
        title: "Dev & Designer",
        subtitle: "with unique identity.",
        cta: "Discover my work",
      },
      about: {
        title: "About Me",
        text1:
          "I'm Gio, a developer and designer passionate about creating unique and memorable digital experiences. Specialized in visual identity and front-end development, I combine creativity and technique to transform ideas into digital reality.",
        text2:
          "My approach is always user-centered, seeking solutions that not only work perfectly, but also delight and surprise with delicate and sophisticated design.",
        projects: "Completed Projects",
        experience: "Years of Experience",
      },
      services: {
        title: "Services",
        subtitle:
          "I offer complete solutions in design and development, always focused on quality, innovation and attention to details that make the difference.",
        items: [
          {
            title: "Visual Identity",
            description:
              "Creation of logos, color palettes and unique visual elements for your brand with delicacy and sophistication.",
          },
          {
            title: "UI/UX Design",
            description:
              "Intuitive interfaces and user experiences that convert and delight with user-centered design.",
          },
          {
            title: "Front-End Development",
            description: "Clean and performant code with the most modern technologies, always prioritizing quality.",
          },
          {
            title: "Responsive Design",
            description: "Projects that work perfectly on all devices with attention to detail.",
          },
          {
            title: "Landing Pages",
            description: "High-conversion pages focused on results, performance and memorable experience.",
          },
        ],
      },
      skills: {
        title: "Skills",
        subtitle: "Technologies and skills I master to create exceptional solutions focused on user experience.",
        categories: {
          design: "Design",
          dev: "Development",
          soft: "Soft Skills",
        },
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "Some of the projects I developed with passion, dedication and attention to detail.",
        clickDetails: "Click to see details",
        techServices: "Technologies and Services:",
      },
      contact: {
        title: "Contact",
        subtitle: "Let's talk about your next project? I'm always open to new opportunities and creative challenges.",
        connect: "Let's connect!",
        followText:
          "Follow me on social media to keep up with my projects and news from the world of design and development.",
        form: {
          name: "Your name",
          email: "Your email",
          message: "Your message",
          send: "Send Message",
        },
      },
    },
  }

  const t = translations[language]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20 text-gray-800 dark:text-gray-100 overflow-x-hidden transition-colors duration-500">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-2xl"
          style={{ y: y1, rotate: rotate1, scale: scale1 }}
        />
        <motion.div
          className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-xl"
          style={{ y: y2, rotate: rotate2 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-200/15 to-purple-200/15 dark:from-pink-800/8 dark:to-purple-800/8 rounded-full blur-3xl"
          style={{ y: y3, opacity: opacity1 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-20 h-20 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 dark:from-indigo-800/10 dark:to-purple-800/10 rounded-full blur-xl"
          style={{ y: y1, rotate: rotate1 }}
        />
      </div>

      {/* Floating Design Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300/10 dark:text-purple-600/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            {
              [
                <FaPaintBrush key="brush" />,
                <FaCode key="code" />,
                <FaFigma key="figma" />,
                <FaReact key="react" />,
                <FaMagic key="magic" />,
                <FaGem key="gem" />,
                <FaEye key="eye" />,
                <FaStar key="star" />,
              ][i % 8]
            }
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-purple-100/20 dark:border-purple-800/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/logo-cbg.png"
                alt="CBG Logo"
                width={32}
                height={32}
                className="sm:w-10 sm:h-10 object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {[
                { id: "home", label: t.nav.home },
                { id: "about", label: t.nav.about },
                { id: "services", label: t.nav.services },
                { id: "skills", label: t.nav.skills },
                { id: "gallery", label: t.nav.portfolio },
                { id: "contact", label: t.nav.contact },
              ].map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`transition-all duration-300 font-light relative font-poppins text-sm ${
                    activeSection === section.id
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Language Switch */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 text-xs sm:text-sm font-light font-poppins px-2 sm:px-3"
              >
                {language === "pt" ? "EN" : "PT"}
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 w-8 h-8 sm:w-10 sm:h-10"
              >
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 w-8 h-8 sm:w-10 sm:h-10"
              >
                <motion.div animate={{ rotate: isMobileMenuOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  {isMobileMenuOpen ? (
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 pb-4 border-t border-purple-100/20 dark:border-purple-800/20"
              >
                <div className="flex flex-col space-y-3 pt-4">
                  {[
                    { id: "home", label: t.nav.home },
                    { id: "about", label: t.nav.about },
                    { id: "services", label: t.nav.services },
                    { id: "skills", label: t.nav.skills },
                    { id: "gallery", label: t.nav.portfolio },
                    { id: "contact", label: t.nav.contact },
                  ].map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => {
                        scrollToSection(section.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`text-left py-2 px-4 rounded-xl transition-all duration-300 font-light font-poppins ${
                        activeSection === section.id
                          ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
                          : "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/10"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {section.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
      >
        <div className="text-center z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-manrope font-extralight mb-6 sm:mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Dev
              </motion.span>
              <motion.span
                className="inline-block mx-2 sm:mx-4 text-gray-800 dark:text-gray-100"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                &
              </motion.span>
              <motion.span
                className="inline-block bg-gradient-to-l from-purple-700 via-pink-500 to-purple-600 dark:from-purple-500 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 2.5,
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Designer
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 font-poppins font-extralight tracking-wide px-4"
              animate={{
                color: [
                  "rgb(107, 114, 128)",
                  "rgb(147, 51, 234)",
                  "rgb(236, 72, 153)",
                  "rgb(147, 51, 234)",
                  "rgb(107, 114, 128)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {t.home.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 shadow-lg font-light font-poppins"
              >
                {t.home.cta}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 dark:text-purple-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="relative inline-block">
                <div className="w-80 h-80 mx-auto md:mx-0 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 rounded-[60px] opacity-20"
                    style={{ rotate: rotate1 }}
                  />
                  <motion.div
                    className="absolute inset-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-[50px]"
                    style={{ rotate: rotate2 }}
                  />
                  <Image
                    src="/profile.png"
                    alt="Coded By Gio - Desenvolvedor e Designer"
                    width={320}
                    height={320}
                    className="relative z-10 rounded-[50px] object-cover p-2"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-manrope font-light mb-8 text-purple-600 dark:text-purple-400">
                {t.about.title}
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed font-light font-poppins">
                {t.about.text1}
              </p>
              <p className="text-lg mb-10 text-gray-600 dark:text-gray-300 leading-relaxed font-light font-poppins">
                {t.about.text2}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 font-manrope">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-light font-poppins">
                    {t.about.projects}
                  </div>
                </motion.div>
                <motion.div
                  className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 font-manrope">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-light font-poppins">
                    {t.about.experience}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-950/30 relative overflow-hidden"
      >
        {/* Parallax Elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-700/10 dark:to-pink-700/10 rounded-full blur-xl"
          style={{ y: y2, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 dark:from-blue-700/10 dark:to-purple-700/10 rounded-full blur-2xl"
          style={{ y: y3, rotate: rotate2 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-manrope font-light mb-6 text-purple-600 dark:text-purple-400">
              {t.services.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light font-poppins">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  className="group"
                >
                  <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                    <CardContent className="p-8 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-400/5 dark:to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <motion.div
                        className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        {service.icon}
                      </motion.div>

                      <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-100 font-manrope">
                        {translations[language].services.items[index].title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light font-poppins">
                        {translations[language].services.items[index].description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        {/* Parallax Elements */}
        <motion.div
          className="absolute top-1/4 right-20 w-16 h-16 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 dark:from-indigo-700/10 dark:to-purple-700/10 rounded-full blur-lg"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-20 w-24 h-24 bg-gradient-to-br from-pink-300/20 to-purple-300/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-xl"
          style={{ y: y3, rotate: rotate2 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-manrope font-light mb-6 text-purple-600 dark:text-purple-400">
              {t.skills.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light font-poppins">
              {t.skills.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : categoryIndex === 1 ? 0 : 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-light mb-10 text-center text-purple-600 dark:text-purple-400 capitalize font-manrope">
                      {t.skills.categories[category]}
                    </h3>
                    <div className="space-y-6">
                      {skillList.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100/50 hover:to-pink-100/50 dark:hover:from-purple-800/30 dark:hover:to-pink-800/30 transition-all duration-300"
                        >
                          <div className="text-purple-600 dark:text-purple-400">{skill.icon}</div>
                          <span className="font-light text-gray-800 dark:text-gray-100 font-poppins">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-24 bg-gradient-to-br from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-950/30 relative overflow-hidden"
      >
        {/* Parallax Elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-28 h-28 bg-gradient-to-br from-purple-300/15 to-pink-300/15 dark:from-purple-700/8 dark:to-pink-700/8 rounded-full blur-2xl"
          style={{ y: y2, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-36 h-36 bg-gradient-to-br from-blue-300/15 to-purple-300/15 dark:from-blue-700/8 dark:to-purple-700/8 rounded-full blur-3xl"
          style={{ y: y1, rotate: rotate2 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-manrope font-light mb-6 text-purple-600 dark:text-purple-400">
              {t.portfolio.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light font-poppins">
              {t.portfolio.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProjectIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedProject(projects[currentProjectIndex])
                    setIsModalOpen(true)
                  }}
                >
                  <Card className="overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={projects[currentProjectIndex].image || "/placeholder.svg"}
                        alt={projects[currentProjectIndex].title}
                        width={800}
                        height={500}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                        <div className="p-8 text-white">
                          <p className="text-sm font-light font-poppins">{t.portfolio.clickDetails}</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-light text-purple-600 dark:text-purple-400 font-poppins">
                        {projects[currentProjectIndex].category}
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-light mb-2 text-gray-800 dark:text-gray-100 font-manrope">
                        {projects[currentProjectIndex].title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-light mb-4 font-poppins">
                        {projects[currentProjectIndex].subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light font-poppins">
                        {projects[currentProjectIndex].description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex
                      ? "bg-purple-600 dark:bg-purple-400 scale-125"
                      : "bg-purple-200 dark:bg-purple-800 hover:bg-purple-300 dark:hover:bg-purple-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-100/20 to-purple-200/30 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-purple-800/20" />

        {/* Parallax Elements */}
        <motion.div
          className="absolute top-10 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-700/10 dark:to-pink-700/10 rounded-full blur-xl"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 dark:from-blue-700/10 dark:to-purple-700/10 rounded-full blur-2xl"
          style={{ y: y2, rotate: rotate2 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-manrope font-light mb-6 text-purple-600 dark:text-purple-400">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light font-poppins">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <form className="space-y-8">
                    <div>
                      <Input
                        placeholder={t.contact.form.name}
                        className="bg-white/60 dark:bg-gray-700/60 border-purple-200/50 dark:border-purple-700/50 focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 rounded-2xl h-14 text-lg font-light font-poppins"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder={t.contact.form.email}
                        className="bg-white/60 dark:bg-gray-700/60 border-purple-200/50 dark:border-purple-700/50 focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 rounded-2xl h-14 text-lg font-light font-poppins"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder={t.contact.form.message}
                        rows={6}
                        className="bg-white/60 dark:bg-gray-700/60 border-purple-200/50 dark:border-purple-700/50 focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 resize-none rounded-2xl text-lg font-light font-poppins"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-light font-poppins"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      {t.contact.form.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-10"
            >
              <div>
                <h3 className="text-3xl font-light mb-8 text-purple-600 dark:text-purple-400 font-manrope">
                  {t.contact.connect}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light text-lg font-poppins">
                  {t.contact.followText}
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:codedbygio@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-light text-gray-800 dark:text-gray-100 font-poppins">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-poppins">codedbygio@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/5513991928012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-light text-gray-800 dark:text-gray-100 font-poppins">WhatsApp</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-poppins">(13) 99192-8012</p>
                  </div>
                </motion.a>
              </div>

              <div className="flex space-x-4">
                {[
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    href: "https://linkedin.com/in/codedbygio",
                    color: "from-blue-500 to-blue-600",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Github className="w-6 h-6" />,
                    href: "https://github.com/codedbygio",
                    color: "from-gray-700 to-gray-800",
                    label: "GitHub",
                  },
                  {
                    icon: <Instagram className="w-6 h-6" />,
                    href: "https://instagram.com/codedbygio",
                    color: "from-pink-500 to-purple-600",
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 text-xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="p-10">
                <div className="mb-6">
                  <h3 className="text-3xl font-light mb-2 text-purple-600 dark:text-purple-400 font-manrope">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xl text-purple-500 dark:text-purple-300 font-light font-poppins">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg font-light font-poppins">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-light mb-4 text-gray-800 dark:text-gray-100 text-lg font-poppins">
                    {t.portfolio.techServices}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-light font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProject.github && (
                    <Button
                      asChild
                      className="bg-gray-800 hover:bg-gray-900 text-white flex-1 rounded-2xl py-3 font-light font-poppins"
                    >
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-3" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.live && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white flex-1 rounded-2xl py-3 font-light font-poppins"
                    >
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-3" />
                        Ver Online
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
