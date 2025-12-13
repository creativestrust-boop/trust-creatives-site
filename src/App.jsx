import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  PenTool, 
  Megaphone, 
  TrendingUp, 
  MessageCircle, 
  Phone,
  DollarSign,
  Calendar,
  Star,
  Globe,
  Send,
  Users,
  ShieldCheck,
  FileText,
  Zap,
  Target,
  Award
} from 'lucide-react';

// --- Components ---

const AdSpace = ({ position, className = "" }) => (
  <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
    <div className="bg-slate-800/30 border border-slate-700/50 border-dashed rounded-xl h-28 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-800/50 transition-colors cursor-help group relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
      <div className="flex items-center gap-2 mb-1">
        <DollarSign size={16} className="text-green-500" />
        <span className="font-semibold tracking-wider text-xs text-slate-400">ADVERTISEMENT</span>
      </div>
      <p className="text-sm font-medium text-slate-300">Google AdSense: {position}</p>
    </div>
  </div>
);

const SectionHeading = ({ subtitle, title, align = "center" }) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"}`}>
    <span className="inline-block py-1 px-3 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase mb-4">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
      {title}
    </h2>
    <div className={`h-1 w-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-6 ${align === "center" ? "mx-auto" : ""}`}></div>
  </div>
);

// Legal Modal Component
const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="text-sky-500" /> {title}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-slate-300 text-sm leading-relaxed space-y-4 custom-scrollbar">
          {content}
        </div>
        <div className="p-6 border-t border-slate-800 bg-slate-900/50 rounded-b-2xl">
          <button onClick={onClose} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-lg transition-colors">
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeModal, setActiveModal] = useState(null); // 'privacy' or 'terms'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // IMPORTANT: This filename must match exactly what you upload to GitHub!
  const logoSrc = "2a658c3c-02d9-487c-90b1-e70bb454e3f6.jpg";
  const whatsappLink = "https://wa.me/254743422225";
  const emailLink = "mailto:modern@trustcreative.design";

  // Legal Content Data
  const privacyContent = (
    <>
      <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
      <p>At Trust Creatives, accessible from <strong className="text-white">https://trustcreative.design</strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Trust Creatives and how we use it.</p>
      <p><strong className="text-white">Log Files</strong><br/>Trust Creatives follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
      <p><strong className="text-white">Cookies and Web Beacons</strong><br/>Like any other website, Trust Creatives uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
      <p><strong className="text-white">Google DoubleClick DART Cookie</strong><br/>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.</p>
    </>
  );

  const termsContent = (
    <>
      <p><strong>1. Introduction</strong><br/>By accessing this website we assume you accept these terms and conditions. Do not continue to use <strong className="text-white">trustcreative.design</strong> if you do not agree to take all of the terms and conditions stated on this page.</p>
      <p><strong>2. License</strong><br/>Unless otherwise stated, Trust Creatives and/or its licensors own the intellectual property rights for all material on <strong className="text-white">trustcreative.design</strong>. All intellectual property rights are reserved.</p>
      <p><strong>3. Services</strong><br/>Trust Creatives offers digital marketing, branding, and social media management services. All deliverables are subject to the specific contracts signed with individual clients.</p>
      <p><strong>4. User Comments</strong><br/>Certain parts of this website offer the opportunity for users to post and exchange opinions and information. Trust Creatives does not filter, edit, publish or review Comments prior to their presence on the website.</p>
    </>
  );

  const services = [
    {
      title: "Social Media Management",
      icon: <Megaphone className="w-6 h-6" />,
      description: "We don't just post; we build communities. From content calendar creation to engagement strategies, we turn followers into loyal customers.",
      features: ["Content Strategy", "Community Management", "Analytics Reports"]
    },
    {
      title: "Brand Identity Design",
      icon: <PenTool className="w-6 h-6" />,
      description: "Your brand is your promise. We craft memorable visual identities, logos, and guidelines that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Assets"]
    },
    {
      title: "Business Growth Strategy",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Data-driven roadmaps to scale your operations. We analyze your market position and identify untapped revenue streams.",
      features: ["Market Analysis", "Scaling Roadmaps", "Revenue Optimization"]
    },
    {
      title: "Performance Marketing",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Stop guessing. We run targeted ad campaigns on Google, Meta, and LinkedIn that deliver measurable ROI and qualified leads.",
      features: ["PPC Campaigns", "SEO Optimization", "Lead Generation"]
    }
  ];

  const processSteps = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Discovery",
      description: "We dive deep into your business goals and market position."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategy",
      description: "Our experts build a tailored roadmap for your success."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Creation",
      description: "We design world-class assets and campaigns."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growth",
      description: "We launch, measure, and optimize for maximum ROI."
    }
  ];

  const portfolio = [
    { 
      category: "Social Media Management", 
      title: "Viral Community Growth", 
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Brand Design", 
      title: "Luxury Retail Identity", 
      image: "https://images.unsplash.com/photo-1572044162444-ad6021202414?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Google Ads", 
      title: "High-ROI PPC Campaign", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Business Growth", 
      title: "Market Expansion Strategy", 
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Meta Ads", 
      title: "Instagram & FB Conversion", 
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Sales Strategy", 
      title: "Retail Revenue Optimization", 
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Digital Marketing", 
      title: "E-commerce Scale-Up", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Web Design", 
      title: "Corporate Fintech UI", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      category: "Creative Content", 
      title: "Product Photography", 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden">
      
      {/* --- Legal Modals --- */}
      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy" 
        content={privacyContent} 
      />
      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service" 
        content={termsContent} 
      />

      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0B1120]/90 backdrop-blur-md shadow-2xl border-b border-slate-800' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-sky-500 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img 
                  src={logoSrc} 
                  alt="Trust Creatives" 
                  className="relative w-full h-full rounded-lg object-cover border border-slate-700 shadow-xl"
                  onError={(e) => {
                    // Fallback in case image isn't loaded yet
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold">TC</div>';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tight leading-none">TRUST <span className="text-sky-500">CREATIVES</span></span>
                <span className="text-[10px] text-slate-400 font-medium tracking-[0.2em] uppercase mt-1">Agency</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {["Services", "Process", "Work", "About", "Insights"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {item}
                </a>
              ))}
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noreferrer"
                className="ml-4 bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                Let's Talk
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2 transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1120] border-b border-slate-800 animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 pt-2 pb-8 space-y-2">
              {["Services", "Process", "Work", "About", "Insights"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="block px-4 py-4 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium border border-transparent hover:border-slate-700 transition-all">
                  {item}
                </a>
              ))}
              <a href={whatsappLink} className="block w-full text-center mt-4 bg-sky-600 text-white px-4 py-4 rounded-xl font-bold shadow-lg shadow-sky-500/20">
                Start Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[#0B1120]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sky-400 text-sm font-semibold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                #1 Creative Agency in Kenya
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Elevate Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  Brand Authority
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Trust Creatives combines elite design with aggressive growth strategies to turn your business into a dominant brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a 
                  href={whatsappLink}
                  className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-sky-50 hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Book Strategy Call
                </a>
                <a 
                  href="#work"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all hover:border-slate-500"
                >
                  View Our Work
                </a>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-semibold uppercase tracking-widest">
                <span>Google Ads</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <span>Meta Partner</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <span>SEO Pro</span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block relative">
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-4 shadow-2xl shadow-sky-900/20 rotate-3 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dashboard Strategy" 
                  className="rounded-lg opacity-80"
                />
                <div className="absolute -bottom-10 -left-10 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                   <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                     <TrendingUp size={24} />
                   </div>
                   <div>
                     <p className="text-slate-400 text-xs uppercase font-bold">Client Growth</p>
                     <p className="text-white text-xl font-bold">+127% ROI</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSpace position="Hero Banner" className="-mt-10 relative z-20" />

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-[#0F1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="What We Do" title="Comprehensive Digital Solutions" />

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeService === index 
                    ? "bg-slate-800 border-sky-500/50 shadow-lg shadow-sky-900/20" 
                    : "bg-transparent border-slate-800 hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${activeService === index ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400"}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${activeService === index ? "text-white" : "text-slate-300"}`}>{service.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                      
                      {/* Animated Features List - Only shows on active */}
                      <div className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-300 ${activeService === index ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                            <CheckCircle2 size={12} /> {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Side for Services - Dynamic */}
            <div className="relative hidden lg:flex items-center justify-center bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
               <div className="p-12 text-center relative z-10">
                 <div className="w-24 h-24 bg-sky-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg shadow-sky-500/30">
                   {React.cloneElement(services[activeService].icon, { className: "w-12 h-12 text-white" })}
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4">{services[activeService].title}</h3>
                 <a href={whatsappLink} className="text-sky-400 font-bold hover:text-sky-300 flex items-center justify-center gap-2">
                   Get a Quote <ArrowRight size={16} />
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Process Section (NEW) --- */}
      <section id="process" className="py-24 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="How We Work" title="Our Proven Process" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-sky-900/50 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-700 -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Portfolio Section --- */}
      <section id="work" className="py-24 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Our Portfolio" title="Recent Masterpieces" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <button className="text-white flex items-center gap-2 text-sm font-medium">View Case Study <ArrowRight size={16}/></button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href={whatsappLink} className="inline-block border border-slate-700 text-slate-300 hover:text-white hover:border-white px-8 py-3 rounded-full text-sm font-bold transition-all">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <AdSpace position="Mid-Page Banner" />

      {/* --- Testimonials --- */}
      <section className="py-24 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-sky-500 mx-auto mb-6 fill-sky-500" />
          <h2 className="text-3xl font-bold text-white mb-12">"The ROI we've seen since working with Trust Creatives is unprecedented. They don't just design; they understand business."</h2>
          <div className="flex justify-center items-center gap-4">
             <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
             <div className="text-left">
               <div className="text-white font-bold">James M.</div>
               <div className="text-sky-500 text-sm">Director, Nairobi Ventures</div>
             </div>
          </div>
        </div>
      </section>

      {/* --- Blog / Insights --- */}
      <section id="insights" className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <SectionHeading subtitle="Latest Insights" title="Growth Knowledge" align="left" />
             <a href="#" className="hidden md:flex text-slate-400 hover:text-white items-center gap-2 mb-16 transition-colors">View All <ArrowRight size={16}/></a>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {[1,2,3].map((i) => (
               <article key={i} className="bg-[#0F1629] border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group">
                 <div className="flex items-center gap-2 text-xs text-sky-500 font-bold uppercase mb-4">
                   <Calendar size={14} /> Oct 24, 2024
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                   {i === 1 ? "The Future of Digital Marketing in East Africa" : i === 2 ? "Why Your Brand Identity is Losing You Money" : "5 Social Media Hacks for 2025"}
                 </h3>
                 <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                   Discover the strategies that top brands are using to dominate the market share in the current economic climate.
                 </p>
                 <div className="flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all">
                   Read Article <ArrowRight size={16} />
                 </div>
               </article>
             ))}
           </div>
        </div>
      </section>

      <AdSpace position="Footer Banner" />

      {/* --- Contact / Footer --- */}
      <section id="contact" className="py-24 bg-[#050914] relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to dominate your market?</h2>
              <p className="text-slate-400 text-lg mb-8">
                Your competition isn't resting. Neither should you. Let's build a strategy that puts you on top.
              </p>
              
              <div className="space-y-6">
                <a href={emailLink} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-sky-500 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Email Us</p>
                    <p className="text-lg font-medium">modern@trustcreative.design</p>
                  </div>
                </a>
                
                <a href={whatsappLink} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Call / WhatsApp</p>
                    <p className="text-lg font-medium">+254 743 422 225</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Mock Contact Form */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" />
                  <input type="text" placeholder="Phone" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" />
                <textarea rows="4" placeholder="Tell us about your project..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"></textarea>
                <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-lg hover:bg-sky-50 transition-colors flex justify-center items-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-bold text-white">TRUST <span className="text-sky-500">CREATIVES</span></span>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              {/* These buttons now trigger the LegalModal */}
              <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button>
              <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors text-left">Terms of Service</button>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
