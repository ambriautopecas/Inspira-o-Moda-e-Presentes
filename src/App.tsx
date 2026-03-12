/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronRight, 
  Star, 
  ShoppingBag, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  CreditCard,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// --- Constants ---
const COLORS = {
  primary: '#D81B60', // Deep Pink
  secondary: '#FCE4EC', // Light Pink
  accent: '#B8860B', // Dark Goldenrod
  dark: '#1A1A1A',
  light: '#FDFDFD',
};

const CATEGORIES: Category[] = [
  { id: 1, name: 'Vestidos', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800', description: 'Modelos elegantes para todas as ocasiões.' },
  { id: 2, name: 'Blusas', image: 'https://images.unsplash.com/photo-1564252234532-68527707424f?auto=format&fit=crop&q=80&w=800', description: 'Estilo e conforto no seu dia a dia.' },
  { id: 3, name: 'Calças', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800', description: 'Modelagem perfeita para você.' },
  { id: 4, name: 'Acessórios', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800', description: 'O toque final que seu look precisa.' },
];

const TESTIMONIALS: Testimonial[] = [
  { 
    id: 1, 
    name: 'Maria Silva', 
    role: 'Cliente há 3 anos', 
    content: 'A Inspiração Moda e Presentes é simplesmente incrível! Sempre encontro peças exclusivas e de excelente qualidade. O atendimento é personalizado e me sinto super especial.', 
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=maria'
  },
  { 
    id: 2, 
    name: 'Ana Paula', 
    role: 'Cliente VIP', 
    content: 'Qualidade premium e estilo incomparável! As peças são lindas e duradouras. A consultoria de moda me ajuda sempre a escolher o look perfeito. Super recomendo!', 
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ana'
  },
  { 
    id: 3, 
    name: 'Juliana Costa', 
    role: 'Cliente fiel', 
    content: 'Sou apaixonada pela loja! Além das roupas maravilhosas, o atendimento VIP faz toda a diferença. Me sinto única e valorizada. Vale cada centavo!', 
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=juliana'
  },
];

const FAQS: FAQItem[] = [
  { id: 1, question: 'Como funciona a política de trocas?', answer: 'Oferecemos troca facilitada em até 30 dias após a compra, mediante apresentação da etiqueta e sem sinais de uso.' },
  { id: 2, question: 'Vocês trabalham com quais formas de pagamento?', answer: 'Aceitamos todos os cartões de crédito (parcelamos em até 6x sem juros), débito, PIX e dinheiro.' },
  { id: 3, question: 'As peças são originais e autênticas?', answer: 'Sim, trabalhamos apenas com marcas renomadas e coleções cuidadosamente selecionadas para garantir autenticidade.' },
  { id: 4, question: 'Vocês fazem entregas? Como funciona?', answer: 'Sim! Fazemos entregas em toda Ribeirão Preto. Consulte as taxas e prazos para sua região via WhatsApp.' },
  { id: 5, question: 'Posso agendar um atendimento personalizado?', answer: 'Com certeza! Oferecemos consultoria de moda exclusiva. Entre em contato para agendar seu horário VIP.' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Categorias', href: '#categorias' },
    { name: 'Trocas', href: '#trocas' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-lg shrink-0">I</div>
          <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Inspiração <span className="text-pink-600">Moda</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-pink-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5516997634639" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-pink-700 transition-all shadow-lg hover:scale-105"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-pink-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 text-lg font-medium border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5516997634639" 
              className="bg-pink-600 text-white text-center py-3 rounded-xl font-bold uppercase tracking-widest mt-2"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000" 
          alt="Loja de Roupas" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Multi-directional gradients for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-950/90 via-pink-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block bg-pink-600/20 backdrop-blur-sm border border-pink-500/30 text-pink-200 px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Boutique de Moda Feminina
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Elegância e Estilo em <span className="italic text-pink-400">Cada Peça</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            Descubra nossa coleção exclusiva de roupas femininas. Qualidade premium, atendimento VIP e peças únicas para realçar sua beleza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#categorias" 
              className="bg-pink-600 text-white px-8 md:px-10 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-pink-700 transition-all shadow-xl hover:scale-105"
            >
              <ShoppingBag size={20} /> Ver Coleção
            </a>
            <a 
              href="#contato" 
              className="bg-white text-pink-600 px-8 md:px-10 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              <MapPin size={20} /> Visite-nos
            </a>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-8 md:gap-12 opacity-80">
            <div>
              <p className="text-2xl md:text-3xl font-bold">5000+</p>
              <p className="text-[10px] uppercase tracking-widest text-pink-300">Clientes</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-pink-300">Anos</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-pink-300">Autêntico</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Image Card for Desktop - Adjusted position and z-index */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden xl:block absolute right-10 2xl:right-20 top-1/2 -translate-y-1/2 w-[350px] 2xl:w-[400px] h-[500px] 2xl:h-[550px] rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" 
          alt="Modelo Moda" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Nossa Loja" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-pink-200 rounded-3xl -z-0"></div>
          </div>

          <div>
            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Inspiração Moda - Sua Boutique de Confiança
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Há mais de 10 anos no mercado, a Inspiração Moda se destaca como referência em moda feminina de qualidade. Nossa missão é proporcionar uma experiência única de compra, oferecendo peças exclusivas que combinam elegância, conforto e sofisticação.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Trabalhamos com marcas renomadas e coleções cuidadosamente selecionadas para atender mulheres que valorizam o estilo e a autenticidade. Cada peça em nossa boutique é escolhida pensando em você.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Peças exclusivas e autênticas',
                'Atendimento personalizado',
                'Qualidade garantida',
                'Política de troca facilitada'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="text-pink-600" size={20} /> {item}
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/5516997634639" 
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-pink-700 transition-all shadow-lg"
            >
              <MessageCircle size={20} /> Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <section id="galeria" className="py-24 bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Galeria</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Conheça Nossa Boutique</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Explore nosso espaço e algumas de nossas coleções exclusivas.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-xl group">
          <img src={images[0]} alt="Galeria 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl group">
          <img src={images[1]} alt="Galeria 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl group">
          <img src={images[2]} alt="Galeria 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl group">
          <img src={images[3]} alt="Galeria 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl group">
          <img src={images[4]} alt="Galeria 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section id="categorias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossas Categorias</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Explore Nossa Coleção</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Encontre a peça perfeita para cada ocasião.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((cat) => (
          <motion.div 
            key={cat.id}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg mb-6">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-sm italic">{cat.description}</p>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 flex items-center justify-between">
              {cat.name} <ChevronRight className="text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Differentials = () => {
  const diffs = [
    { icon: <Star />, title: 'Peças Exclusivas', desc: 'Coleções selecionadas com modelos únicos e diferenciados.' },
    { icon: <ShieldCheck />, title: 'Qualidade Premium', desc: 'Trabalhamos apenas com marcas renomadas e tecidos de primeira.' },
    { icon: <ShoppingBag />, title: 'Atendimento VIP', desc: 'Consultoria de moda personalizada e atendimento exclusivo.' },
    { icon: <Truck />, title: 'Entrega Rápida', desc: 'Receba suas peças no conforto de sua casa com agilidade.' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Por que escolher</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Nossos Diferenciais</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diffs.map((diff, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                {React.cloneElement(diff.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
              <p className="text-gray-500 leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">O Que Dizem Nossas Clientes</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Confira a experiência de quem já conhece a Inspiração Moda.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-pink-50/50 p-8 rounded-[32px] border border-pink-100 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-pink-500 text-pink-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-pink-600 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-500">Tire suas dúvidas sobre nossos processos e serviços.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="font-bold text-gray-800">{faq.question}</span>
                <ChevronDown className={`text-pink-600 transition-transform ${openId === faq.id ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReturnsPolicy = () => {
  const policies = [
    { 
      icon: <Clock />, 
      title: 'Prazos', 
      desc: '7 dias corridos para devolução por arrependimento e 30 dias para trocas por outros modelos ou tamanhos.' 
    },
    { 
      icon: <CheckCircle2 />, 
      title: 'Condições', 
      desc: 'A peça deve estar com a etiqueta original, sem sinais de uso, lavagem, odores ou manchas.' 
    },
    { 
      icon: <MessageCircle />, 
      title: 'Como solicitar', 
      desc: 'Basta entrar em contato pelo nosso WhatsApp (16) 99763-4639 informando o motivo e o número do pedido.' 
    },
    { 
      icon: <Truck />, 
      title: 'Logística', 
      desc: 'A primeira troca em nossa loja física é gratuita. Para envios, consulte as condições de frete reverso.' 
    },
  ];

  return (
    <section id="trocas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Transparência</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Política de Trocas e Devoluções
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Queremos que você se sinta totalmente satisfeita com sua compra. Se por algum motivo precisar trocar ou devolver um produto, nossa política é simples e transparente, respeitando o Código de Defesa do Consumidor.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {policies.map((p, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center">
                    {React.cloneElement(p.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <h4 className="font-bold text-gray-900">{p.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-pink-50 rounded-[40px] p-8 md:p-12 border border-pink-100">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Importante saber:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0"></div>
                <p>Peças em promoção possuem regras específicas de troca informadas no ato da compra.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0"></div>
                <p>Acessórios e moda íntima não possuem troca por questões de higiene.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0"></div>
                <p>O reembolso em caso de devolução é feito pelo mesmo método de pagamento utilizado.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0"></div>
                <p>Em caso de defeito de fabricação, o prazo para reclamação é de 90 dias.</p>
              </li>
            </ul>
            <div className="mt-10 p-6 bg-white rounded-3xl border border-pink-100 text-center">
              <p className="text-sm font-medium text-gray-800 mb-4">Dúvidas sobre sua troca?</p>
              <a 
                href="https://wa.me/5516997634639" 
                className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-pink-700 transition-all"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const contactInfo = [
    { icon: <Phone />, title: 'Telefone', value: '(16) 99763-4639', link: 'tel:16997634639', label: 'Ligar agora' },
    { icon: <MessageCircle />, title: 'WhatsApp', value: '(16) 99763-4639', link: 'https://wa.me/5516997634639', label: 'Enviar mensagem' },
    { icon: <MapPin />, title: 'Endereço', value: 'Rua Paraíba 533, Ribeirão Preto', link: 'https://maps.google.com/?q=Rua+Paraiba+533+Ribeirao+Preto', label: 'Ver no mapa' },
    { icon: <Clock />, title: 'Horário', value: 'Seg-Sex: 08h às 18h | Sáb: 08h às 12h', label: 'Aberto agora' },
  ];

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Fale Conosco</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-gray-500">Visite nossa loja ou entre em contato pelos nossos canais.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-pink-50/30 p-10 rounded-[40px] text-center border border-pink-100 group hover:bg-pink-600 transition-all duration-500">
              <div className="w-14 h-14 bg-white text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {React.cloneElement(info.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white">{info.title}</h3>
              <p className="text-gray-600 mb-6 text-sm group-hover:text-pink-100">{info.value}</p>
              {info.link ? (
                <a href={info.link} className="text-pink-600 font-bold uppercase tracking-widest text-xs group-hover:text-white underline underline-offset-4">
                  {info.label}
                </a>
              ) : (
                <span className="text-pink-600 font-bold uppercase tracking-widest text-xs group-hover:text-white">
                  {info.label}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-[40px] overflow-hidden h-[400px] shadow-2xl border-8 border-gray-50">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.597652701449!2d-47.804444!3d-21.168333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0000000000%3A0x0!2zMjHCsDEwJzA2LjAiUyA0N8KwNDgnMTYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1625567890123!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Mapa da Loja"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-serif italic text-xl">I</div>
            <span className="font-serif text-2xl font-bold tracking-tight">
              Inspiração <span className="text-pink-500">Moda</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8">
            Sua boutique de moda feminina com peças exclusivas e atendimento VIP em Ribeirão Preto. Elegância e estilo em cada detalhe.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/inspiracaomodaepresentes/" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/inspiracaomodaepresentes/" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://wa.me/5516997634639" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Links Rápidos</h4>
          <ul className="space-y-4">
            {['Início', 'Sobre', 'Galeria', 'Categorias', 'Trocas', 'Depoimentos', 'FAQ'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" /> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Categorias</h4>
          <ul className="space-y-4">
            {['Vestidos', 'Blusas', 'Calças', 'Acessórios', 'Novidades', 'Promoções'].map((link) => (
              <li key={link}>
                <a href="#categorias" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" /> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Contato</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin className="text-pink-500 shrink-0" size={20} />
              <span className="text-gray-400 text-sm">Rua Paraíba 533, Ribeirão Preto - SP, 14080-020</span>
            </li>
            <li className="flex gap-4">
              <Phone className="text-pink-500 shrink-0" size={20} />
              <span className="text-gray-400 text-sm">(16) 99763-4639</span>
            </li>
            <li className="flex gap-4">
              <MessageCircle className="text-pink-500 shrink-0" size={20} />
              <span className="text-gray-400 text-sm">WhatsApp: (16) 99763-4639</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2024 Inspiração Moda e Presentes. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/5516997634639" 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">1</span>
    </motion.a>
  );
};

const LGPDModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lgpd-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lgpd-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white border border-pink-100 shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-gray-900 mb-2">Privacidade e Cookies (LGPD)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nós utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o desempenho do site e personalizar conteúdos. Ao continuar navegando, você concorda com a nossa <a href="#" className="text-pink-600 underline font-medium">Política de Privacidade</a>.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button 
                onClick={handleAccept}
                className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-pink-700 transition-all shadow-lg"
              >
                Aceitar e Continuar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-100 selection:text-pink-600 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Categories />
        <Differentials />
        <Testimonials />
        <FAQ />
        <ReturnsPolicy />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <LGPDModal />
    </div>
  );
}
