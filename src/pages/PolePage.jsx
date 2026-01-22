import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, CheckCircle, Star, Calendar, Award, BookOpen, MessageSquare, Zap, Shield } from 'lucide-react';
import { getPoleById } from '../utils/domainDetector.js';
import Button from '../components/shared/Button.jsx';
import Card from '../components/shared/Card.jsx';
import MetaTags from '../components/shared/MetaTags.jsx';

const PolePage = () => {
  const { poleId } = useParams();
  const pole = getPoleById(poleId);
  
  if (!pole) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pôle non trouvé</h1>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    {
      icon: BookOpen,
      title: 'Formation spécialisée',
      description: `Programmes de formation adaptés aux besoins du pôle ${pole.name}`
    },
    {
      icon: Users,
      title: 'Mentorat d\'experts',
      description: 'Accompagnement par des professionnels du secteur'
    },
    {
      icon: Target,
      title: 'Projets concrets',
      description: 'Travaillez sur des projets réels avec impact mesurable'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Obtenez des certifications reconnues dans le domaine'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Développeuse Senior',
      content: `Le pôle ${pole.name} m'a permis de développer des compétences pointues et d'accéder à des opportunités de carrière exceptionnelles.`,
      rating: 5,
      avatar: 'MD'
    },
    {
      id: 2,
      name: 'Jean Martin',
      role: 'Lead Tech',
      content: `L'approche pratique et les mentors experts du pôle ${pole.name} ont transformé ma manière de travailler.`,
      rating: 5,
      avatar: 'JM'
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      role: 'Product Manager',
      content: `La communauté du pôle ${pole.name} est incroyable. J'ai pu collaborer sur des projets innovants.`,
      rating: 5,
      avatar: 'SL'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Workshop Technique',
      date: '15 Janvier 2024',
      description: 'Session pratique sur les dernières technologies du secteur',
      type: 'workshop'
    },
    {
      id: 2,
      title: 'Meetup Communauté',
      date: '22 Janvier 2024',
      description: 'Echange d\'exériences et networking avec les membres',
      type: 'meetup'
    },
    {
      id: 3,
      title: 'Hackathon Innovation',
      date: '5 Février 2024',
      description: 'Competition d\'innovation avec des prix attractifs',
      type: 'hackathon'
    }
  ];

  return (
    <div className="min-h-screen">
      <MetaTags 
        title={`${pole.name} - CodersHub Innovations`}
        description={pole.description}
        url={`https://codershub.com/${pole.id}`}
      />
      
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
            
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              {React.createElement(pole.icon, { className: "w-12 h-12 text-white" })}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {pole.name}
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {pole.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Rejoindre le pôle
                <Target className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-lg font-semibold text-gray-700">Membres actifs</div>
              <div className="text-sm text-gray-500">Professionnels passionnés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-lg font-semibold text-gray-700">Projets lancés</div>
              <div className="text-sm text-gray-500">Innovations réussies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-700">Satisfaction</div>
              <div className="text-sm text-gray-500">Retours positifs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que nous offrons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages exclusifs du pôle {pole.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins professionnels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pole.services.map((service, index) => (
              <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 mr-1" />
                  Garantie de satisfaction
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Événements à venir
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez nos événements pour développer votre réseau et vos compétences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {event.type}
                  </span>
                  <Button variant="outline" size="sm">
                    S'inscrire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que nos membres disent de leur expérience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center border-0 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-600">{testimonial.avatar}</span>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à rejoindre {pole.name} ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté de passionnés et développez votre potentiel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Postuler maintenant
                <Target className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                Contacter un mentor
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolePage;
