import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Zap, 
  Grid3X3, 
  ShieldCheck, 
  Cpu, 
  FileText, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  ArrowRight,
  ChevronRight,
  Database,
  Smartphone,
  Briefcase,
  GraduationCap,
  Globe,
  Wind
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// --- Components ---

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn("text-3xl md:text-4xl font-heading font-bold mb-2", light ? "text-white" : "text-primary")}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-sm md:text-base font-mono", light ? "text-slate-300" : "text-slate-500")}
      >
        // {subtitle}
      </motion.p>
    )}
  </div>
);

const ProjectCard = ({ title, status, description, tags, icon: Icon, link, highlights }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col h-full overflow-hidden relative group"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 flex -rotate-12 transition-transform group-hover:scale-110">
      <Icon size={120} />
    </div>
    
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-slate-100 rounded-lg text-accent">
          <Icon size={24} />
        </div>
        {status && (
          <span className="text-[10px] font-mono tracking-wider uppercase bg-accent/10 text-accent px-2 py-1 rounded-full border border-accent/20">
            {status}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 text-sm mb-4">
        {description}
      </p>

      {highlights && (
        <ul className="space-y-1 mb-6 flex-grow">
          {highlights.slice(0, 3).map((h: string, i: number) => (
            <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
              <ChevronRight size={14} className="mt-0.5 text-accent flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto pt-4 flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-mono bg-slate-50 text-slate-500 px-2 py-0.5 border border-slate-200 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceItem = ({ period, company, title, description }: any) => (
  <div className="relative pl-8 pb-10 border-l border-slate-200 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-accent border-2 border-white" />
    <span className="text-xs font-mono text-accent mb-1 inline-block">{period}</span>
    <h4 className="text-lg font-bold text-primary">{title}</h4>
    <p className="text-sm font-medium text-slate-500 mb-2">{company}</p>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// --- Content Data ---

const PROJECTS = [
  {
    title: "Mémoire de Master : Régulation Réseau",
    status: "PROJET PHARE",
    description: "Étude technique sur la régulation du réseau HTB/HTA de la zone fleuve du Niger intégrant les EnR à l'horizon 2030.",
    tags: ["NEPLAN", "Power Factory", "SCADA", "AVR/PSS"],
    icon: Zap,
    highlights: [
      "Modélisation du réseau stratégique zone fleuve",
      "Simulations de perturbations (court-circuits, fréquence)",
      "Stratégies de régulation pour absorber 30% d'EnR"
    ]
  },
  {
    title: "Electro-Technique Service",
    status: "ENTREPRENEUR",
    description: "Startup apportant des solutions clés en main : installation solaire, pompage, audits et maintenance industrielle.",
    tags: ["Solaire PV", "Audit Énergétique", "Maintenance", "Niamey"],
    icon: Sun,
    highlights: [
      "RCCM : NE-NIM-01-2025-A10-04046",
      "Installation solaire résidentielle & industrielle",
      "Pompage solaire pour l'agriculture thermique"
    ]
  },
  {
    title: "App d'Inspection Énergétique",
    status: "DEVELOPPEMENT",
    description: "Application Flutter pour digitaliser les rapports d'inspection techniques des groupes électrogènes.",
    tags: ["Flutter", "Python", "PDF Generation", "Dart"],
    icon: Smartphone,
    highlights: [
      "Checklists personnalisées & signatures clients",
      "Capture de rapports avec images",
      "Génération automatique de PDF professionnels"
    ]
  }
];

const SKILLS = [
  { 
    category: "Réseau & Régulation", 
    items: ["NEPLAN", "Power Factory", "Analyse SCADA", "AVR / PSS", "Réseaux HTB/HTA"],
    icon: Grid3X3
  },
  { 
    category: "Énergies & Terrain", 
    items: ["PVsyst", "SketchUp", "Centrale Solaire (30MWc)", "Irrigation Solaire (SPIS)", "Froid Industriel"],
    icon: Wind
  },
  { 
    category: "Digital & Dev", 
    items: ["Flutter", "Dart", "Python", "HTML/CSS/JS", "Analyse de données"],
    icon: Cpu
  }
];

const EXPERIENCE = [
  {
    period: "4 mois",
    company: "NIGELEC – Centrale solaire 30 MWc Gorou Banda",
    title: "Stagiaire Maintenance",
    description: "Inspection quotidienne, diagnostic de pannes, relevé SCADA et maintenance des transformateurs."
  },
  {
    period: "5 mois",
    company: "Manutention Africaine Niger / CAT",
    title: "Technicien Maintenance",
    description: "Installation et maintenance de groupes électrogènes, utilisation des logiciels CAT-Inspect et Praxedo."
  },
  {
    period: "4 mois",
    company: "ESPERANCE SARL",
    title: "Planificateur Maintenance",
    description: "Gestion administrative, suivi client et planification de la maintenance des groupes électrogènes."
  }
];

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent">
      {/* Background Technical Grid */}
      <div className="fixed inset-0 pointer-events-none technical-grid opacity-[0.03] z-0" />

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-primary tracking-tight">AR. ALI YAHOUZA</span>
            <span className="text-[10px] font-mono text-accent -mt-1 uppercase tracking-widest hidden md:block">Engineering Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-slate-600 hover:text-accent transition-colors">À propos</a>
            <a href="#projects" className="text-slate-600 hover:text-accent transition-colors">Projets</a>
            <a href="#skills" className="text-slate-600 hover:text-accent transition-colors">Compétences</a>
            <a href="#experience" className="text-slate-600 hover:text-accent transition-colors">Parcours</a>
            <a 
              href="#contact" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Contact
            </a>
          </div>
          
          <button className="md:hidden text-primary">
            <Grid3X3 size={24} />
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center px-6 pt-32 pb-24 max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                DISPONIBLE POUR NÉGOCIATIONS & PROJETS
              </div>
              
              <h1 className="text-4xl md:text-7xl font-heading font-black text-primary leading-[1.1] mb-6">
                Ingénieur <span className="text-accent underline decoration-solar decoration-4 underline-offset-8">Génie Électrique</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-600 font-medium mb-4">
                Énergies Renouvelables & Régulation des Réseaux.
              </p>
              
              <p className="text-base md:text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
                De la simulation NEPLAN à l’installation solaire terrain. Je transforme les défis énergétiques du Niger en solutions techniques durables.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl transition-transform hover:scale-105 active:scale-95"
                >
                  Voir mes projets <ArrowRight size={20} />
                </a>
                <button 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Download size={20} /> Télécharger mon CV
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative border border-slate-800">
                <div className="absolute inset-0 opacity-40 technical-grid bg-[size:30px_30px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-3/4 h-3/4 border-2 border-slate-700 rounded-full border-dashed p-12"
                  >
                    <div className="w-full h-full border-2 border-slate-800 rounded-full flex items-center justify-center">
                      <Zap className="text-solar" size={64} />
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-mono text-[10px]"
                >
                  <div>STATUS: STABLE</div>
                  <div className="text-energy">SYSTEM_SYNC: 98.4%</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-12 right-12 p-4 bg-accent/20 backdrop-blur-md rounded-2xl border border-accent/30 text-white font-mono text-[10px]"
                >
                  <div>GRID_CAPACITY: 30MWc</div>
                  <div className="text-solar">SOLAR_EFF: HIGH</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle light subtitle="Profil Professionnel">À propos de moi</SectionTitle>
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <p>
                    Technicien supérieur et futur master en génie électrique, je me situe à l'intersection de la <span className="text-accent font-semibold">simulation avancée</span> et de la <span className="text-energy font-semibold">réalité terrain</span>.
                  </p>
                  <p>
                    Mon parcours est marqué par une double expertise : la maîtrise des outils de simulation des réseaux (NEPLAN, Power Factory) et une expérience concrète en maintenance de centrales solaires et groupes électrogènes. 
                  </p>
                  <p className="bg-white/5 p-6 rounded-2xl border-l-4 border-solar italic text-white font-medium">
                    « Je ne suis pas qu’un théoricien. Je ne suis pas qu’un technicien. Je suis les deux. »
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { label: "Centrale Maintenue", val: "30MWc", color: "text-accent" },
                  { label: "Horizon Réseau", val: "2030", color: "text-solar", offset: true },
                  { label: "Outils de Simulation", val: "3+", color: "text-energy" },
                  { label: "Expériences Terrain", val: "5+", color: "text-white", offset: true }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 transition-colors hover:bg-white/10 flex flex-col items-center justify-center",
                      stat.offset && "mt-8 lg:mt-12"
                    )}
                  >
                    <div className={cn("text-3xl md:text-4xl font-heading font-black mb-2", stat.color)}>{stat.val}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionTitle subtitle="Défis & Solutions">Projets Stratégiques</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Electro-Technique Service Feature */}
        <section className="py-24 px-6 bg-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 grid lg:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-0.5 w-12 bg-solar" />
                  <span className="text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">Vision Entrepreneuse</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-8 leading-tight">
                  Electro-Technique Service
                </h2>
                <div className="space-y-6 mb-10 text-slate-600">
                  <p className="text-base md:text-lg">
                    Une entreprise dédiée à l'intégration des énergies renouvelables et à l'excellence opérationnelle au Niger.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Installation Solaire PV",
                      "Pompage Solaire (Irrigation)",
                      "Audit Énergétique",
                      "Maintenance Industrielle",
                      "Froid & Climatisation",
                      "Electricité Bâtiment"
                    ].map(trait => (
                      <div key={trait} className="flex items-center gap-2 text-sm">
                        <ShieldCheck className="text-energy shrink-0" size={18} />
                        <span>{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 shrink-0">
                    <Database className="text-accent" size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">RCCM / NIF</p>
                    <p className="text-sm font-bold text-primary">NE-NIM-01-2025-A10-04046</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary relative min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 opacity-10 technical-grid bg-[size:40px_40px] rotate-12 scale-150" />
                <div className="relative z-10 text-center">
                  <motion.div 
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
                  >
                    <Sun className="text-solar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
                  </motion.div>
                  <div className="mt-8">
                    <h4 className="text-white text-xl md:text-2xl font-bold">Partenaire Énergétique</h4>
                    <p className="text-slate-400 mt-2">Bassora, Niamey – Niger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionTitle subtitle="Boîte à outils technique">Expertise & Savoir-faire</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 p-8 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-accent">
                    <skillGroup.icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-primary">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-primary rounded-2xl text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4">Compétences Linguistiques</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { l: "Français", v: "Courant" },
                    { l: "Hausa & Zarma", v: "Maternel" },
                    { l: "Anglais", v: "Progression (A1)" },
                    { l: "Russe", v: "Notions (A1)" }
                  ].map((lang, idx) => (
                    <div key={idx} className="bg-white/10 px-4 py-2 rounded-lg text-sm border border-white/5">
                      <span className="text-slate-400 italic mr-2">{lang.l}</span> {lang.v}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <div className="text-center md:text-right">
                  <p className="text-[10px] font-mono text-slate-400 mb-2 uppercase tracking-widest">Formation Continue</p>
                  <p className="text-sm opacity-80 leading-relaxed max-w-sm">
                    Flutter Master, Bootcamps Data Science & IA, SPIS (Irrigation Solaire), QHSE, Leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16">
            <div>
              <SectionTitle subtitle="Parcours Professionnel">Expériences Clés</SectionTitle>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Un parcours construit sur le terrain et enrichi par la rigueur académique. Chaque étape a renforcé ma vision d'une électricité durable au Niger.
                </p>
                <div className="pt-6">
                  <div className="flex items-center gap-4 text-sm font-bold text-primary">
                    <GraduationCap className="text-accent" />
                    Master Professionnel en Génie Électrique
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 font-mono ml-10 uppercase tracking-widest">En attente de soutenance</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200">
              {EXPERIENCE.map((exp, i) => (
                <ExperienceItem key={i} {...exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="pt-24 pb-12 px-6 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 mb-24">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight">Discutons de vos projets énergétiques.</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/20 transition-colors">
                      <Mail className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Email Professionnel</p>
                      <a href="mailto:contact.enime@gmail.com" className="text-lg md:text-xl font-bold hover:text-accent transition-colors break-all">contact.enime@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-energy/20 transition-colors">
                      <Phone className="text-energy" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Téléphone / WhatsApp</p>
                      <div className="flex flex-col">
                        <a href="tel:+22792664436" className="text-lg md:text-xl font-bold hover:text-energy transition-colors">+227 92 66 44 36</a>
                        <a href="tel:+22786232640" className="text-lg md:text-xl font-bold hover:text-energy transition-colors">+227 86 23 26 40</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center">
                <Linkedin className="text-accent mb-6" size={48} />
                <h3 className="text-xl md:text-2xl font-bold mb-4">Connectons-nous sur LinkedIn</h3>
                <p className="text-sm text-slate-400 mb-8 max-w-sm">
                  Suivez mon actualité technique, mes réflexions sur l'énergie au Niger et mes avancées entrepreneuriales.
                </p>
                <a 
                  href="https://www.linkedin.com/in/abdoulrahimali" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-sm"
                >
                  Ouvrir le profil <ExternalLink size={18} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="font-heading font-bold text-xl tracking-tight uppercase">Abdou Rahim ALI YAHOUZA</span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Ingénieur Génie Électrique | Énergies Renouvelables</span>
              </div>
              
              <p className="text-[10px] font-mono text-slate-500 text-center">
                &copy; {new Date().getFullYear()} – Bassora, Niamey, Niger.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
