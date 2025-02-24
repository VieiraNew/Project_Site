import React, { useState, useEffect } from 'react';
import { Activity, Calendar, FileText, Clock, Shield, Globe, BarChart, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
        <div className="container">
          <a className="navbar-brand text-primary fw-bold" href="#">
            <Activity className="me-2" />
            ForteSystems
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre Nós</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#benefits">Benefícios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Depoimentos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contato</a>
              </li>
              <li className="nav-item ms-lg-3">
                <a className="btn btn-primary" href="#try">Experimente Grátis</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Transformação Digital para o SUS</h1>
              <p className="lead mb-4">Otimize a gestão da saúde pública com nossa plataforma integrada. Simplifique processos, melhore o atendimento e transforme dados em resultados.</p>
              <a href="#try" className="btn btn-primary btn-lg">Comece Agora</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Por que ForteSystems?</h2>
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <p className="lead">
                Somos especialistas em oferecer soluções inovadoras para melhorar o agendamento de consultas médicas, controle da vacinação e teleconsultas no Sistema Único de Saúde (SUS). Nosso foco é tornar o atendimento mais eficiente e ampliar o acesso a serviços de saúde de qualidade, especialmente com o crescente uso da telemedicina, que tem se mostrado uma ferramenta essencial para atender a demanda crescente de cuidados à distância.
              </p>
            </div>
          </div>
          <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="p-4 text-center">
                  <Globe size={48} className="text-primary mb-3" />
                  <h3>Inovação Constante</h3>
                  <p>Tecnologia de ponta adaptada às necessidades do SUS</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="p-4 text-center">
                  <Shield size={48} className="text-primary mb-3" />
                  <h3>Infraestrutura Robusta</h3>
                  <p>Servidores redundantes e backup em tempo real</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="p-4 text-center">
                  <BarChart size={48} className="text-primary mb-3" />
                  <h3>Vantagem Competitiva</h3>
                  <p>Líder em satisfação do cliente no setor de saúde</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Nossos Serviços</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body text-center">
                  <Calendar className="text-primary mb-3" size={48} />
                  <h3 className="h5">Agendamento Online</h3>
                  <p>Sistema inteligente de agendamento para otimizar o fluxo de pacientes</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body text-center">
                  <Activity className="text-primary mb-3" size={48} />
                  <h3 className="h5">Telemedicina</h3>
                  <p>Consultas remotas seguras e integradas ao prontuário eletrônico</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body text-center">
                  <FileText className="text-primary mb-3" size={48} />
                  <h3 className="h5">Prontuário Eletrônico</h3>
                  <p>Gestão completa do histórico médico com acesso seguro</p>
                </div>
              </div>
            </div>
            {/* Novo Serviço - Cartão de Vacina Digital */}
            <div className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body text-center">
                  <Shield className="text-primary mb-3" size={48} />
                  <h3 className="h5">Cartão de Vacina Digital</h3>
                  <p>Acesso rápido e seguro ao histórico de vacinação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Benefícios</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="benefit-item text-center p-4 rounded">
                <Clock className="text-primary mb-3" size={48} />
                <h3 className="h5">Economia de Tempo</h3>
                <p>Reduza em até 70% o tempo em processos administrativos</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="benefit-item text-center p-4 rounded">
                <Shield className="text-primary mb-3" size={48} />
                <h3 className="h5">Segurança de Dados</h3>
                <p>Proteção total dos dados conforme LGPD</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="benefit-item text-center p-4 rounded">
                <Globe className="text-primary mb-3" size={48} />
                <h3 className="h5">Acesso Remoto</h3>
                <p>Acesse informações de qualquer lugar</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="benefit-item text-center p-4 rounded">
                <BarChart className="text-primary mb-3" size={48} />
                <h3 className="h5">Gestão Aprimorada</h3>
                <p>Dashboards e relatórios em tempo real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Depoimentos</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="text-center">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80" 
                       alt="Dr. Carla" className="testimonial-img mb-3" />
                  <h4>Dr. Silva</h4>
                  <p className="text-muted">UBS Parnamirim</p>
                  <p className="mx-auto" style={{ maxWidth: '600px' }}>
                    "O sistema transformou completamente nossa operação. A eficiência aumentou significativamente."
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center">
                  <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80" 
                       alt="Dra. Santos" className="testimonial-img mb-3" />
                  <h4>Dra. Santos</h4>
                  <p className="text-muted">Hospital Municipal de Natal</p>
                  <p className="mx-auto" style={{ maxWidth: '600px' }}>
                    "A implementação foi suave e o suporte é excepcional. Recomendo fortemente."
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80" 
                       alt="Dr. Oliveira" className="testimonial-img mb-3" />
                  <h4>Dr. Oliveira</h4>
                  <p className="text-muted">Centro de Saúde Belo Horizonte</p>
                  <p className="mx-auto" style={{ maxWidth: '600px' }}>
                    "A telemedicina integrada ao prontuário eletrônico revolucionou nosso atendimento remoto. Conseguimos ampliar significativamente o acesso à saúde."
                  </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">Entre em Contato</h2>
              <p className="mb-4">Descubra como podemos transformar sua gestão de saúde</p>
              <a href="#try" className="btn btn-primary btn-lg">Agende uma Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="mb-3">ForteSystems</h5>
              <p className="mb-0">Transformando a saúde pública através da tecnologia</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="mb-3">Contato</h5>
              <p className="mb-1">
                <Phone size={16} className="me-2" />
                (84) 3232-2323
              </p>
              <p className="mb-1">
                <Mail size={16} className="me-2" />
                <a href="http://www.fortesystems.com.br" className="text-light text-decoration-none">
                  www.fortesystems.com.br
                </a>
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="mb-3">Endereço</h5>
              <p className="mb-0">
                <MapPin size={16} className="me-2" />
                Natal - RN, Brasil
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="mb-0">&copy; 2025 ForteSystems. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;