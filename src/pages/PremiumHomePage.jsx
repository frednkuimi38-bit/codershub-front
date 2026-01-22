import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Target, 
  Network, 
  Briefcase, 
  Rocket, 
  Brush, 
  Settings,
  Code,
  Star,
  TrendingUp,
  Quote,
  Play,
  Shield,
  Zap,
  Globe,
  Award,
  BookOpen,
  Heart,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { poles } from '../data/poles.js';
import { testimonials } from '../data/testimonials.js';
import { teamMembers } from '../data/team.js';
import Button from '../components/shared/Button.jsx';
import Card from '../components/shared/Card.jsx';
import PoleCard from '../components/shared/PoleCard.jsx';
import TestimonialCard from '../components/shared/TestimonialCard.jsx';
import MetaTags from '../components/shared/MetaTags.jsx';

const PremiumHomePage = () => {
  const iconMap = {
    Code,
    FlaskConical: Lightbulb,
    Target,
    Network,
    Briefcase,
    Rocket,
    Brush,
    Settings
  };

  const stats = [
    { number: '8+', label: 'Pôles d\'excellence', icon: Star, description: 'Domaines spécialisés' },
    { number: '500+', label: 'Développeurs formés', icon: Users, description: 'Membres actifs' },
    { number: '50+', label: 'Projets incubés', icon: Lightbulb, description: 'Innovations lancées' },
    { number: '100%', label: 'Taux de satisfaction', icon: Heart, description: 'Retours positifs' }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Formation Expert',
      description: 'Cours de pointe dispensés par des experts de l\'industrie',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Mentorat Personnalisé',
      description: 'Accompagnement individuel par des professionnels expérimentés',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Projets Réels',
      description: 'Travaillez sur des projets concrets qui ont un impact',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Certification',
      description: 'Obtenez des certifications reconnues par l\'industrie',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Réseau Mondial',
      description: 'Connectez-vous avec des développeurs du monde entier',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Standards de qualité et meilleures pratiques garanties',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <MetaTags 
        title="CodersHub Innovations - Écosystème Technologique Social"
        description="Organisation technologique à vocation sociale, valorisant les talents et formant la prochaine génération de leaders technologiques."
        url="https://codershub.com"
      />
      
      {/* Hero Section - Premium avec fond bleu */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 sm:mb-6">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-300" />
                  <span className="text-xs sm:text-sm font-medium">Bienvenue dans l'écosystème</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    CodersHub
                  </span>
                  <br />
                  <span className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl text-blue-200">
                    Innovations
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  L'écosystème technologique qui transforme les talents en leaders. 
                  Rejoignez une communauté passionnée et développez votre potentiel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
                  Explorer les pôles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                  <Play className="mr-2 h-5 w-5" />
                  Voir la démo
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8">
                <div className="flex -space-x-3 lg:-space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs lg:text-sm font-bold text-white">U{i}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-blue-200">
                    <span className="font-semibold">500+</span> membres satisfaits
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Demo */}
            <div className="relative hidden lg:block">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 lg:p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold text-white mb-2">
                    Commencez votre voyage
                  </h3>
                  <p className="text-sm lg:text-base text-blue-200">
                    Choisissez votre pôle d'excellence
                  </p>
                </div>

                {/* Mini Pole Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {poles.slice(0, 6).map((pole) => (
                    <div
                      key={pole.id}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
                    >
                      <div className={`w-8 h-8 bg-${pole.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        {iconMap[pole.icon] && React.createElement(iconMap[pole.icon], { className: `w-4 h-4 text-${pole.color}-400` })}
                      </div>
                      <p className="text-xs text-white/80 text-center">{pole.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi CodersHub ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les fonctionnalités qui font de notre écosystème la plateforme de référence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos 8 Pôles d'Excellence
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque pôle est spécialisé dans un domaine clé de l'écosystème technologique
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {poles.map((pole, index) => (
              <PoleCard key={pole.id} pole={pole} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ce Que Disent Nos Membres
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de ceux qui ont transformé leur carrière
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe d'Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée dédiée à votre succès
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <Card className="text-center h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {member.expertise}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Transformer Votre Carrière ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de développeurs qui ont déjà transformé leur passion en profession
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-700">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumHomePage;
