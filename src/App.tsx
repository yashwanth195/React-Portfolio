import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Server, Database, Code, Award, BookOpen, Briefcase, ChevronRight, User, Coffee, Globe, Menu, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              const sectionId = entry.target.getAttribute('id') || '';
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.2 }
      );

      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = ['about', 'education', 'experience', 'projects', 'skills', 'achievements'];

  return (
    <div className="min-h-screen bg-pattern">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className={`font-bold transition-all duration-300 ${
              isScrolled ? 'gradient-text text-xl' : 'text-white text-2xl'
            }`}>
              YRV
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize gradient-border px-2 py-1 ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : isScrolled ? 'text-gray-700' : 'text-white'
                  } hover:text-blue-600 transition-colors duration-300`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
              <div className="flex flex-col space-y-4 px-4">
                {navigationItems.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left py-2 ${
                      activeSection === section
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700'
                    } hover:text-blue-600 transition-colors duration-300`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div 
          className="absolute inset-0"
          style={{
            // backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundImage: 'url("dist/assets/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                Yashwanth Reddy Verupaka
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-delay">
                Site Reliability Engineer & Cloud Computing Expert
              </p>
              <div className="flex flex-wrap gap-4 text-sm animate-fade-in-delay-2">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                  <MapPin size={16} />
                  <span>Fairfax, Virginia</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                  <Phone size={16} />
                  <a href="tel:+12028026761" className="hover:text-blue-200">+1-202-802-6761</a>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                  <Mail size={16} />
                  <a href="mailto:reddy.yashwanth195@gmail.com" className="hover:text-blue-200">reddy.yashwanth195@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-4 mt-8 animate-fade-in-delay-3">
                <a
                  href="https://www.linkedin.com/in/yashwanth195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yashwanth195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight size={24} className="rotate-90" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* About Section */}
        <section id="about" className="mb-20 scroll-mt-20 section-animate">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <User className="text-blue-500" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
              <img 
                // src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                src="dist/assets/profile-img.jpg"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-5 h-5" />
                  <span>Passionate about Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Based in Virginia, USA</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                As a Site Reliability Engineer with a strong background in cloud computing and distributed systems, I'm passionate about building and maintaining scalable, reliable infrastructure that powers modern applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in technology began at the National Institute of Technology Karnataka, where I developed a strong foundation in computer science. Now, as a Master's student at George Mason University, I'm further expanding my expertise in cloud computing and advanced systems design.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-gray-800 mb-2">Technical Focus</h3>
                  <p className="text-gray-600 text-sm">Cloud Architecture, Kubernetes, DevOps</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-gray-800 mb-2">Industry Experience</h3>
                  <p className="text-gray-600 text-sm">SRE, Cloud Computing, System Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20 scroll-mt-20 section-animate">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <BookOpen className="text-blue-500" />
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">George Mason University</h3>
                  <p className="text-blue-600">Masters, Computer Science</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GPA: 3.81</span>
                  <p className="text-gray-500 mt-2">Aug 2023 - May 2025</p>
                </div>
              </div>
              <p className="text-gray-600">Focusing on advanced computer science concepts with specialization in cloud computing and distributed systems.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">National Institute of Technology Karnataka</h3>
                  <p className="text-blue-600">Bachelors, Computer Science Engineering</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GPA: 8.16</span>
                  <p className="text-gray-500 mt-2">Jun 2018 - May 2022</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20 scroll-mt-20 section-animate">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <Briefcase className="text-blue-500" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">OLA</h3>
                  <p className="text-blue-600">Site Reliability Engineer (SDE-I)</p>
                </div>
                <p className="text-gray-500">Jun 2022 - Jul 2023</p>
              </div>
              <ul className="space-y-3 text-gray-600 mt-4">
                <li className="flex items-start gap-3">
                  <Server className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                  <span>Managed Kubernetes cluster and deployed applications, ensuring high availability and fault tolerance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                  <span>Implemented cloud solutions using AWS EKS, EC2, Auto-scaling, S3, Cloud Watch, and Cloud Trail</span>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                  <span>Operated Apache Kafka for high-performance throughput and system scalability</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Strand Life Sciences</h3>
                  <p className="text-blue-600">Research Intern</p>
                </div>
                <p className="text-gray-500">May 2021 - Jul 2021</p>
              </div>
              <ul className="space-y-3 text-gray-600 mt-4">
                <li className="flex items-start gap-3">
                  <Code className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                  <span>Optimized logging framework in Linux environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                  <span>Designed interactive dashboards for tracking logs and API calls</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 scroll-mt-20 section-animate">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <Code className="text-blue-500" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Hybrid Text Summarization",
                description: "Machine learning-based project using both abstractive and extractive summarisation techniques to summarise paragraphs with salient features.",
                tags: ["Machine Learning", "NLP", "Python"],
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Group-Signatures",
                description: "Project focused on maintaining the secrecy of group member identities through encryption, accessible only to the group manager.",
                tags: ["Cryptography", "Security", "Java"],
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Block-Chain based voting system",
                description: "Developed a secure voting system using blockchain technology to prevent voter fraud and ensure vote integrity.",
                tags: ["Blockchain", "Smart Contracts", "Web3"],
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-20 section-animate">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <Server className="text-blue-500" />
            Skills & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-600 font-medium mb-2">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      {['C', 'HTML', 'CSS', 'Python', 'SQL', 'JavaScript', 'Django'].map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-600 font-medium mb-2">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Kubernetes', 'Kafka', 'Flink', 'Docker'].map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-600 font-medium mb-2">Monitoring</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Grafana', 'Prometheus', 'Alertmanager', 'Kibana'].map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h3>
                <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <Award className="text-blue-500 w-8 h-8" />
                  <div>
                    <p className="font-medium text-gray-800">AWS Certified Cloud Practitioner</p>
                    <p className="text-gray-600 text-sm">Amazon Web Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-20 scroll-mt-20 section-animate">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <Award className="text-blue-500" />
            Achievements
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Academic Excellence",
                  description: "Secured All India Rank 1417 in JEE-MAIN",
                  icon: <Award className="w-8 h-8 text-blue-500" />
                },
                {
                  title: "Scholarship",
                  description: "Won merit-based scholarship in Undergrad",
                  icon: <BookOpen className="w-8 h-8 text-blue-500" />
                },
                {
                  title: "Community Service",
                  description: "Active member of National Service Scheme (NSS)",
                  icon: <Globe className="w-8 h-8 text-blue-500" />
                },
                {
                  title: "Leadership",
                  description: "Member of Organizing committee for various events in Undergrad",
                  icon: <User className="w-8 h-8 text-blue-500" />
                }
              ].map((achievement, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/yashwanth195/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-110 transition-transform duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yashwanth195" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-110 transition-transform duration-300">
              <Github size={24} />
            </a>
            <a href="mailto:reddy.yashwanth195@gmail.com" className="hover:text-blue-400 transform hover:scale-110 transition-transform duration-300">
              <Mail size={24} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Yashwanth Reddy Verupaka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;