import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Brain, Rocket, Database, Globe, Terminal } from "lucide-react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const skills = [
    { icon: Code2, name: "React & Next.js", desc: "Component-based architecture with SSR/SSG" },
    { icon: Database, name: "Backend Engineering", desc: "Node.js, PostgreSQL, Redis, microservices" },
    { icon: Brain, name: "AI/ML Integration", desc: "TensorFlow, PyTorch, LangChain, RAG systems" },
    { icon: Zap, name: "Cloud & DevOps", desc: "AWS, Docker, K8s, CI/CD pipelines" },
  ];

  const projects = [
    {
      title: "AI-Powered SaaS Platform",
      tech: "Next.js, OpenAI API, Stripe, Supabase",
      desc: "Built a multi-tenant SaaS with GPT-4 integration, implementing RAG architecture for context-aware responses. Features include real-time collaboration, usage-based billing, and vector embeddings for semantic search. Scaled to 10K+ users with 99.9% uptime.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Real-Time Analytics Dashboard",
      tech: "React, WebSockets, D3.js, Apache Kafka",
      desc: "Engineered a high-performance dashboard processing 100K+ events/sec using event-driven architecture. Implemented custom data visualization with D3, WebSocket connections for live updates, and Redis caching layer reducing query times by 80%.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "ML Model Deployment Pipeline",
      tech: "Python, FastAPI, Docker, MLflow, AWS",
      desc: "Designed end-to-end ML pipeline with automated model training, versioning, and A/B testing. Dockerized microservices architecture with Kubernetes orchestration. Reduced deployment time from hours to minutes with CI/CD automation.",
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-flow 20s linear infinite'
        }}></div>
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'left 0.3s, top 0.3s'
        }}
      ></div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(50px) translateX(50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8); }
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Terminal className="text-indigo-400 w-6 h-6" />
            <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              jay.dev
            </h1>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 font-medium">
            {['Home', 'Stack', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-indigo-400 transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all"></span>
              </motion.a>
            ))}
          </div>

          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-black/90 backdrop-blur-xl px-6 py-4 space-y-4 border-t border-indigo-500/20"
          >
            {['Home', 'Stack', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-indigo-400">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative z-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Sparkles className="w-16 h-16 text-indigo-400 mx-auto" style={{ animation: 'float 3s ease-in-out infinite' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full-Stack Engineer
          </span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-400 font-light">& AI Architect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300 leading-relaxed"
        >
          Shipping production-grade applications with modern web frameworks, distributed systems, and cutting-edge AI. 
          Obsessed with performance optimization, clean architecture, and developer experience.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-bold transition shadow-lg shadow-indigo-500/50"
            style={{ animation: 'glow 2s ease-in-out infinite' }}
          >
            <span className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              View Projects
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-indigo-500 hover:bg-indigo-500/10 rounded-full font-bold transition"
          >
            Let's Talk
          </a>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-indigo-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-indigo-500 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </section>
        <section id="about" className="py-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Student, Developer, and AI Enthusiast
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="image.png"
                alt="Jay Thakare"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-indigo-500/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-indigo-500/20 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Current Education</h4>
                      <p className="text-indigo-400 text-sm">2023 - 2027</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold mb-1">Bachelor of Engineering</p>
                  <p className="text-gray-300 mb-1">Computer Science & Engineering (AI & ML)</p>
                  <p className="text-gray-400 text-sm">A. P. Shah Institute of Technology</p>
                  <p className="text-gray-400 text-sm">Mumbai University</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">HSC (12th)</h4>
                      <p className="text-purple-400 text-sm">2023</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold mb-1">Science Stream</p>
                  <p className="text-gray-300 mb-1">Smt. CHM College, Ulhasnagar</p>
                  <p className="text-gray-400 text-sm">Maharashtra Board</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">SSC (10th)</h4>
                      <p className="text-pink-400 text-sm">2021</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-1">S.I.C.E.S English High School</p>
                  <p className="text-gray-400 text-sm">Maharashtra Board</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enterprise-grade solutions built with industry-leading technologies and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-indigo-500/20 p-8 rounded-2xl hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <skill.icon className="w-12 h-12 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-2 text-white">{skill.name}</h4>
                <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="man.jpg"
                alt="Developer"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-indigo-500/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Building the Future
                </span>
                <br />
                <span className="text-gray-400 text-3xl">One Line at a Time</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-indigo-500/10">
                  <Zap className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Scalable Architecture</h4>
                    <p className="text-gray-400 text-sm">Microservices, event-driven systems, and serverless computing for applications that handle millions of requests with horizontal scalability and fault tolerance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-indigo-500/10">
                  <Brain className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">AI-Native Development</h4>
                    <p className="text-gray-400 text-sm">Integrating LLMs, implementing RAG pipelines, fine-tuning models, and building intelligent features with OpenAI, Anthropic, and custom ML models in production.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-indigo-500/10">
                  <Code2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Performance Obsessed</h4>
                    <p className="text-gray-400 text-sm">Optimizing Core Web Vitals, implementing edge caching, code splitting, lazy loading, and database query optimization for lightning-fast user experiences.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <p className="text-gray-400 text-lg">Production applications serving thousands of users daily</p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-indigo-500/20 p-8 rounded-2xl hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-bold mb-4`}>
                    Featured
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-3 text-white">{project.title}</h4>
                  <p className="text-indigo-400 font-mono text-sm mb-4">{project.tech}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition group"
                  >
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Epic
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Open to freelance projects, full-time opportunities, and collaboration on innovative ideas. 
              If you're working on something that pushes boundaries, let's connect.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:jay@example.com"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-bold transition shadow-lg shadow-indigo-500/50"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="px-8 py-4 border-2 border-indigo-500 hover:bg-indigo-500/10 rounded-full font-bold transition"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-indigo-500/20 text-center text-gray-400 relative z-20">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-indigo-400 transition">GitHub</a>
          <a href="#" className="hover:text-indigo-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-indigo-400 transition">Twitter</a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Jay Thakare | Crafted with React, Framer Motion & Tailwind
        </p>
      </footer>
    </div>
  );
};

export default App;