import { useState, useEffect } from "react";

const COLORS = {
  brandOrange1: "#FFD801",
  brandOrange2: "#FFE23F",
  brandClaret1: "#791A3B",
  brandClaret2: "#93274D",
  brandBunting1: "#171C4E",
  brandBunting2: "#686EAE",
  brandBunting3: "#232967",
  brandUltramarine1: "#1D0CB6",
  brandUltramarine2: "#4534E6",
  brandGray1: "#EFF0F2",
  brandGray2: "#F8F8F9",
  brandGray3: "#F0EFF2",
  brandGray4: "#F1F1F1",
  brandDark1: "#1E030C",
  brandDark2: "#6F6D68",
  brandAzure1: "#0052b4",
  white: "#FFFFFF",
  black: "#000000",
};

// TODO: Replace placeholder images with real BeeSpeaker app screenshots
const PLACEHOLDER_APP = "https://via.placeholder.com/300x600/171C4E/FFD801?text=BeeSpeaker+App";
const PLACEHOLDER_TUTOR = "https://via.placeholder.com/80x80/FFD801/171C4E?text=Tutor";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("hablar");
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Funcionalidades", id: "funcionalidades" },
    { label: "Tutores IA", id: "tutores" },
    { label: "Lecciones", id: "lecciones" },
    { label: "Precios", id: "precios" },
    { label: "Testimonios", id: "testimonios" },
  ];

  const features = [
    {
      icon: "🎙️",
      title: "Habla desde el día 1",
      desc: "Practica la pronunciación con tecnología de reconocimiento de voz avanzada. Di adiós al miedo a hablar.",
    },
    {
      icon: "🤖",
      title: "Tutores con IA",
      desc: "Conversa con inteligencia artificial disponible 24/7. Sin juicios, a tu ritmo, cuando quieras.",
    },
    {
      icon: "👩‍🏫",
      title: "Tutores humanos",
      desc: "Reserva clases con tutores nativos certificados. Corrección en tiempo real y feedback personalizado.",
    },
    {
      icon: "📚",
      title: "+3000 lecciones",
      desc: "Desde nivel A0 hasta C1. Cubre todos los aspectos del idioma: gramática, vocabulario, conversación.",
    },
    {
      icon: "🎯",
      title: "Aprendizaje adaptativo",
      desc: "El sistema se adapta a tu nivel y ritmo. Cada lección es personalizada para maximizar tu progreso.",
    },
    {
      icon: "🏆",
      title: "Gamificación",
      desc: "Gana puntos, sube de nivel y mantén tu racha diaria. Aprender inglés nunca fue tan divertido.",
    },
  ];

  const levels = [
    { code: "A0", label: "Principiante absoluto", color: "#00C896" },
    { code: "A1", label: "Principiante", color: "#00B4D8" },
    { code: "A2", label: "Elemental", color: "#4895EF" },
    { code: "B1", label: "Intermedio", color: "#4534E6" },
    { code: "B2", label: "Intermedio alto", color: "#791A3B" },
    { code: "C1", label: "Avanzado", color: "#171C4E" },
  ];

  const tutors = [
    { name: "Sarah M.", origin: "🇬🇧 Reino Unido", specialty: "Conversación", rating: 4.9, lessons: 1240 },
    { name: "James K.", origin: "🇺🇸 EE.UU.", specialty: "Negocios", rating: 4.8, lessons: 980 },
    { name: "Emily R.", origin: "🇦🇺 Australia", specialty: "Pronunciación", rating: 4.9, lessons: 1560 },
    { name: "Tom B.", origin: "🇨🇦 Canadá", specialty: "Gramática", rating: 4.7, lessons: 820 },
  ];

  const plans = [
    {
      name: "Gratis",
      price: "0€",
      period: "para siempre",
      color: COLORS.brandGray1,
      textColor: COLORS.brandBunting1,
      features: ["10 lecciones por día", "Tutor IA básico", "Niveles A0–A1", "App móvil"],
      cta: "Empezar gratis",
      highlight: false,
    },
    {
      name: "Premium",
      price: "9,99€",
      period: "/ mes",
      color: COLORS.brandBunting1,
      textColor: COLORS.white,
      features: ["Lecciones ilimitadas", "Tutor IA avanzado", "Todos los niveles A0–C1", "2 clases con tutor humano/mes", "Descarga offline", "Sin anuncios"],
      cta: "Probar 7 días gratis",
      highlight: true,
    },
    {
      name: "Pro",
      price: "19,99€",
      period: "/ mes",
      color: COLORS.brandClaret1,
      textColor: COLORS.white,
      features: ["Todo lo de Premium", "Clases ilimitadas con tutores humanos", "Coach personal", "Certificado de nivel", "Soporte prioritario"],
      cta: "Empezar Pro",
      highlight: false,
    },
  ];

  const testimonials = [
    {
      name: "María García",
      location: "Madrid, España",
      text: "¡Increíble! Llevaba años intentando aprender inglés y nunca conseguí hablar. Con BeeSpeaker en solo 3 meses ya mantengo conversaciones fluidas.",
      stars: 5,
      avatar: "MG",
    },
    {
      name: "Carlos López",
      location: "México DF, México",
      text: "Los tutores de IA son fantásticos. Puedo practicar a las 2 de la mañana sin vergüenza. Mi inglés mejoró un 200% en 2 meses.",
      stars: 5,
      avatar: "CL",
    },
    {
      name: "Ana Martínez",
      location: "Buenos Aires, Argentina",
      text: "Necesitaba el inglés para mi trabajo. BeeSpeaker me ayudó a preparar entrevistas en inglés y conseguí el trabajo de mis sueños.",
      stars: 5,
      avatar: "AM",
    },
    {
      name: "Pedro Ruiz",
      location: "Barcelona, España",
      text: "La mejor inversión que he hecho. Las +3000 lecciones cubren exactamente lo que necesito. La IA corrige mi pronunciación al instante.",
      stars: 5,
      avatar: "PR",
    },
  ];

  const tabContent = {
    hablar: {
      icon: "🎙️",
      title: "Habla inglés desde el primer día",
      desc: "Nuestra tecnología de reconocimiento de voz analiza tu pronunciación en tiempo real. Repite frases, mantén conversaciones y mejora tu acento con feedback instantáneo.",
      bullets: ["Reconocimiento de voz en tiempo real", "Análisis de pronunciación fonema a fonema", "Más de 500 temas de conversación"],
    },
    ia: {
      icon: "🤖",
      title: "Tu tutor de IA personal",
      desc: "Practica inglés con nuestro tutor de inteligencia artificial disponible las 24 horas. Sin vergüenza, sin presión, a tu propio ritmo.",
      bullets: ["Disponible 24/7 sin cita previa", "Adapta el nivel a tus respuestas", "Conversaciones naturales sobre cualquier tema"],
    },
    lecciones: {
      icon: "📖",
      title: "Más de 3000 lecciones estructuradas",
      desc: "Sigue un plan de estudios completo desde cero hasta nivel avanzado. Cada lección combina vocabulario, gramática y práctica oral.",
      bullets: ["Currículum de A0 a C1", "Lecciones de 10-15 minutos", "Revisión espaciada inteligente"],
    },
  };

  // ============ STYLES ============
  const styles = {
    app: {
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      color: COLORS.brandDark1,
      overflowX: "hidden",
      background: COLORS.white,
    },
    // NAV
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? COLORS.brandBunting1 : "transparent",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      transition: "all 0.3s ease",
      padding: "0 1.5rem",
    },
    navInner: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "70px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      textDecoration: "none",
    },
    logoIcon: {
      width: "36px",
      height: "36px",
      background: COLORS.brandOrange1,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
    },
    logoText: {
      fontSize: "1.4rem",
      fontWeight: "800",
      color: COLORS.white,
      letterSpacing: "-0.5px",
    },
    logoSpan: {
      color: COLORS.brandOrange1,
    },
    navLinks: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: COLORS.white,
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: "500",
      cursor: "pointer",
      opacity: 0.9,
      transition: "opacity 0.2s",
    },
    navCta: {
      background: COLORS.brandOrange1,
      color: COLORS.brandBunting1,
      border: "none",
      borderRadius: "25px",
      padding: "10px 24px",
      fontWeight: "700",
      fontSize: "0.9rem",
      cursor: "pointer",
      transition: "all 0.2s",
    },
    hamburger: {
      display: "none",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: "5px",
    },
    hamburgerLine: {
      width: "25px",
      height: "2px",
      background: COLORS.white,
      borderRadius: "2px",
      transition: "all 0.3s",
    },
    mobileMenu: {
      position: "fixed",
      top: "70px",
      left: 0,
      right: 0,
      background: COLORS.brandBunting1,
      padding: "1.5rem",
      zIndex: 999,
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      gap: "1rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    },
    mobileLink: {
      color: COLORS.white,
      textDecoration: "none",
      fontSize: "1.1rem",
      fontWeight: "500",
      cursor: "pointer",
      padding: "0.5rem 0",
      borderBottom: `1px solid rgba(255,255,255,0.1)`,
    },
    // HERO
    hero: {
      background: `linear-gradient(135deg, ${COLORS.brandBunting1} 0%, ${COLORS.brandBunting3} 60%, ${COLORS.brandUltramarine1} 100%)`,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "70px",
      overflow: "hidden",
      position: "relative",
    },
    heroBg: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 20% 50%, rgba(255,216,1,0.08) 0%, transparent 50%), 
                   radial-gradient(circle at 80% 20%, rgba(69,52,230,0.2) 0%, transparent 50%)`,
      pointerEvents: "none",
    },
    heroInner: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "4rem 1.5rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      alignItems: "center",
      width: "100%",
      position: "relative",
      zIndex: 1,
    },
    heroTag: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(255,216,1,0.15)",
      border: `1px solid rgba(255,216,1,0.4)`,
      borderRadius: "50px",
      padding: "6px 16px",
      color: COLORS.brandOrange1,
      fontSize: "0.85rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
    },
    heroH1: {
      fontSize: "clamp(2.2rem, 5vw, 4rem)",
      fontWeight: "900",
      color: COLORS.white,
      lineHeight: "1.15",
      margin: "0 0 1.5rem 0",
    },
    heroHighlight: {
      color: COLORS.brandOrange1,
      display: "block",
    },
    heroDesc: {
      fontSize: "1.15rem",
      color: "rgba(255,255,255,0.8)",
      lineHeight: "1.7",
      margin: "0 0 2.5rem 0",
    },
    heroButtons: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
    },
    btnPrimary: {
      background: COLORS.brandOrange1,
      color: COLORS.brandBunting1,
      border: "none",
      borderRadius: "50px",
      padding: "16px 36px",
      fontWeight: "800",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.25s",
      boxShadow: `0 4px 20px rgba(255,216,1,0.4)`,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    },
    btnSecondary: {
      background: "transparent",
      color: COLORS.white,
      border: `2px solid rgba(255,255,255,0.4)`,
      borderRadius: "50px",
      padding: "14px 32px",
      fontWeight: "700",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.25s",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    },
    heroStats: {
      display: "flex",
      gap: "2rem",
      marginTop: "2.5rem",
      flexWrap: "wrap",
    },
    statItem: {
      textAlign: "center",
    },
    statNum: {
      fontSize: "1.8rem",
      fontWeight: "900",
      color: COLORS.brandOrange1,
      display: "block",
    },
    statLabel: {
      fontSize: "0.8rem",
      color: "rgba(255,255,255,0.6)",
      fontWeight: "500",
    },
    heroImageWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    heroPhone: {
      width: "260px",
      height: "520px",
      background: `linear-gradient(145deg, ${COLORS.brandBunting3}, #0a0e2e)`,
      borderRadius: "40px",
      border: `3px solid rgba(255,216,1,0.3)`,
      boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255,216,1,0.1)`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
      zIndex: 2,
    },
    phoneScreen: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "20px 16px",
      background: `linear-gradient(180deg, ${COLORS.brandBunting1} 0%, #0d1138 100%)`,
    },
    phoneNotch: {
      width: "100px",
      height: "24px",
      background: "#0a0e2e",
      borderRadius: "0 0 18px 18px",
      margin: "0 auto 16px",
    },
    phoneAppLabel: {
      color: COLORS.brandOrange1,
      fontWeight: "900",
      fontSize: "1.1rem",
      textAlign: "center",
      marginBottom: "4px",
    },
    phoneSubLabel: {
      color: "rgba(255,255,255,0.5)",
      fontSize: "0.7rem",
      textAlign: "center",
      marginBottom: "20px",
    },
    phoneLessonCard: {
      background: "rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "14px",
      marginBottom: "12px",
      border: "1px solid rgba(255,216,1,0.15)",
    },
    phoneLessonTitle: {
      color: COLORS.white,
      fontWeight: "700",
      fontSize: "0.85rem",
      marginBottom: "6px",
    },
    phoneLessonBar: {
      height: "4px",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "4px",
      overflow: "hidden",
    },
    phoneLessonBarFill: (pct) => ({
      height: "100%",
      width: pct,
      background: COLORS.brandOrange1,
      borderRadius: "4px",
    }),
    phoneMicBtn: {
      width: "56px",
      height: "56px",
      background: COLORS.brandOrange1,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      fontSize: "1.5rem",
      boxShadow: `0 4px 20px rgba(255,216,1,0.5)`,
    },
    floatingBadge: (pos) => ({
      position: "absolute",
      ...pos,
      background: COLORS.white,
      borderRadius: "16px",
      padding: "10px 16px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      zIndex: 3,
      animation: "float 3s ease-in-out infinite",
    }),
    badgeText: {
      fontSize: "0.8rem",
      fontWeight: "700",
      color: COLORS.brandBunting1,
    },
    // SECTION COMMON
    section: (bg) => ({
      background: bg || COLORS.white,
      padding: "5rem 1.5rem",
    }),
    sectionInner: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    sectionTag: {
      display: "inline-block",
      background: `rgba(255,216,1,0.15)`,
      color: COLORS.brandClaret1,
      borderRadius: "50px",
      padding: "5px 16px",
      fontSize: "0.8rem",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "1rem",
    },
    sectionH2: {
      fontSize: "clamp(1.8rem, 4vw, 3rem)",
      fontWeight: "900",
      color: COLORS.brandBunting1,
      margin: "0 0 1rem 0",
      lineHeight: "1.2",
    },
    sectionDesc: {
      fontSize: "1.1rem",
      color: COLORS.brandDark2,
      maxWidth: "600px",
      lineHeight: "1.7",
      margin: "0 0 3rem 0",
    },
    // FEATURES GRID
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
    },
    featureCard: (idx, hovered) => ({
      background: hovered === idx ? COLORS.brandBunting1 : COLORS.white,
      border: `2px solid ${hovered === idx ? COLORS.brandOrange1 : COLORS.brandGray1}`,
      borderRadius: "20px",
      padding: "2rem",
      transition: "all 0.3s ease",
      cursor: "default",
      boxShadow: hovered === idx ? `0 12px 40px rgba(23,28,78,0.2)` : "0 2px 15px rgba(0,0,0,0.05)",
      transform: hovered === idx ? "translateY(-4px)" : "none",
    }),
    featureIcon: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      display: "block",
    },
    featureTitle: (hovered, idx) => ({
      fontSize: "1.1rem",
      fontWeight: "800",
      color: hovered === idx ? COLORS.white : COLORS.brandBunting1,
      marginBottom: "0.75rem",
    }),
    featureDesc: (hovered, idx) => ({
      fontSize: "0.95rem",
      color: hovered === idx ? "rgba(255,255,255,0.8)" : COLORS.brandDark2,
      lineHeight: "1.6",
    }),
    // TABS
    tabsWrap: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2.5rem",
      flexWrap: "wrap",
    },
    tab: (active) => ({
      padding: "10px 24px",
      borderRadius: "50px",
      border: `2px solid ${active ? COLORS.brandBunting1 : COLORS.brandGray1}`,
      background: active ? COLORS.brandBunting1 : "transparent",
      color: active ? COLORS.white : COLORS.brandBunting1,
      fontWeight: "700",
      fontSize: "0.9rem",
      cursor: "pointer",
      transition: "all 0.25s",
    }),
    tabContent: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      alignItems: "center",
    },
    tabTextH3: {
      fontSize: "1.8rem",
      fontWeight: "900",
      color: COLORS.brandBunting1,
      marginBottom: "1rem",
    },
    tabTextP: {
      color: COLORS.brandDark2,
      lineHeight: "1.7",
      marginBottom: "1.5rem",
      fontSize: "1rem",
    },
    bulletList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    bulletItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "0.95rem",
      color: COLORS.brandBunting1,
      fontWeight: "600",
    },
    bulletDot: {
      width: "8px",
      height: "8px",
      background: COLORS.brandOrange1,
      borderRadius: "50%",
      flexShrink: 0,
    },
    tabImage: {
      width: "100%",
      borderRadius: "20px",
      background: `linear-gradient(145deg, ${COLORS.brandGray1}, ${COLORS.brandGray2})`,
      height: "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4rem",
      border: `2px solid ${COLORS.brandGray1}`,
    },
    // LEVELS
    levelsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "1rem",
    },
    levelCard: (color, hovered, idx) => ({
      background: hovered === idx ? color : COLORS.white,
      border: `2px solid ${color}`,
      borderRadius: "16px",
      padding: "1.5rem",
      textAlign: "center",
      cursor: "default",
      transition: "all 0.3s ease",
      transform: hovered === idx ? "translateY(-4px) scale(1.02)" : "none",
      boxShadow: hovered === idx ? `0 8px 30px ${color}40` : "none",
    }),
    levelCode: (color, hovered, idx) => ({
      fontSize: "2rem",
      fontWeight: "900",
      color: hovered === idx ? COLORS.white : color,
      display: "block",
      marginBottom: "6px",
    }),
    levelLabel: (hovered, idx) => ({
      fontSize: "0.8rem",
      fontWeight: "600",
      color: hovered === idx ? "rgba(255,255,255,0.9)" : COLORS.brandDark2,
    }),
    // TUTORS
    tutorsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "1.5rem",
    },
    tutorCard: (hovered, idx) => ({
      background: COLORS.white,
      borderRadius: "20px",
      padding: "1.75rem",
      border: `2px solid ${hovered === idx ? COLORS.brandOrange1 : COLORS.brandGray1}`,
      transition: "all 0.3s",
      transform: hovered === idx ? "translateY(-4px)" : "none",
      boxShadow: hovered === idx ? "0 12px 40px rgba(255,216,1,0.2)" : "0 2px 15px rgba(0,0,0,0.05)",
    }),
    tutorAvatar: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${COLORS.brandBunting1}, ${COLORS.brandUltramarine2})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: COLORS.white,
      fontWeight: "900",
      fontSize: "1.2rem",
      marginBottom: "1rem",
      flexShrink: 0,
    },
    tutorName: {
      fontWeight: "800",
      fontSize: "1rem",
      color: COLORS.brandBunting1,
      marginBottom: "4px",
    },
    tutorOrigin: {
      fontSize: "0.85rem",
      color: COLORS.brandDark2,
      marginBottom: "0.75rem",
    },
    tutorSpecialty: {
      background: `rgba(255,216,1,0.2)`,
      color: COLORS.brandClaret1,
      borderRadius: "50px",
      padding: "3px 12px",
      fontSize: "0.78rem",
      fontWeight: "700",
      display: "inline-block",
      marginBottom: "1rem",
    },
    tutorStats: {
      display: "flex",
      gap: "1rem",
      fontSize: "0.82rem",
      color: COLORS.brandDark2,
    },
    starRating: {
      color: COLORS.brandOrange1,
      fontWeight: "700",
    },
    // PRICING
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.5rem",
      alignItems: "start",
    },
    planCard: (plan, hovered, idx) => ({
      background: plan.color,
      borderRadius: "24px",
      padding: "2.5rem 2rem",
      border: plan.highlight ? `3px solid ${COLORS.brandOrange1}` : `2px solid ${plan.highlight ? COLORS.brandOrange1 : "transparent"}`,
      transition: "all 0.3s",
      transform: hovered === idx ? "translateY(-6px)" : plan.highlight ? "scale(1.03)" : "none",
      boxShadow: plan.highlight ? "0 20px 60px rgba(23,28,78,0.3)" : hovered === idx ? "0 12px 40px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.08)",
      position: "relative",
      overflow: "hidden",
    }),
    planBadge: {
      position: "absolute",
      top: "16px",
      right: "16px",
      background: COLORS.brandOrange1,
      color: COLORS.brandBunting1,
      borderRadius: "50px",
      padding: "4px 14px",
      fontSize: "0.75rem",
      fontWeight: "800",
    },
    planName: (plan) => ({
      fontSize: "1.1rem",
      fontWeight: "800",
      color: plan.textColor,
      marginBottom: "0.5rem",
      opacity: 0.8,
    }),
    planPrice: (plan) => ({
      fontSize: "3rem",
      fontWeight: "900",
      color: plan.textColor,
      lineHeight: "1",
      marginBottom: "0.25rem",
    }),
    planPeriod: (plan) => ({
      fontSize: "0.9rem",
      color: plan.textColor,
      opacity: 0.7,
      marginBottom: "2rem",
    }),
    planFeatureList: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 2rem 0",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    planFeatureItem: (plan) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "0.9rem",
      color: plan.textColor,
      opacity: plan.textColor === COLORS.white ? 0.9 : 1,
    }),
    planFeatureCheck: (plan) => ({
      color: plan.highlight ? COLORS.brandOrange1 : COLORS.brandClaret1,
      fontWeight: "900",
      fontSize: "1rem",
      flexShrink: 0,
    }),
    planCta: (plan, hovered, idx) => ({
      width: "100%",
      padding: "14px",
      borderRadius: "50px",
      border: plan.highlight ? "none" : `2px solid ${plan.textColor === COLORS.white ? "rgba(255,255,255,0.4)" : COLORS.brandBunting1}`,
      background: plan.highlight ? COLORS.brandOrange1 : plan.textColor === COLORS.white ? "rgba(255,255,255,0.15)" : "transparent",
      color: plan.highlight ? COLORS.brandBunting1 : plan.textColor,
      fontWeight: "800",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "all 0.25s",
      transform: hovered === `cta-${idx}` ? "scale(1.03)" : "none",
    }),
    // TESTIMONIALS
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1.5rem",
    },
    testimonialCard: (hovered, idx) => ({
      background: COLORS.white,
      borderRadius: "20px",
      padding: "1.75rem",
      border: `2px solid ${hovered === idx ? COLORS.brandOrange1 : COLORS.brandGray1}`,
      transition: "all 0.3s",
      boxShadow: hovered === idx ? "0 12px 40px rgba(255,216,1,0.15)" : "0 2px 15px rgba(0,0,0,0.05)",
      transform: hovered === idx ? "translateY(-4px)" : "none",
    }),
    testimonialAvatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${COLORS.brandClaret1}, ${COLORS.brandClaret2})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: COLORS.white,
      fontWeight: "900",
      fontSize: "0.9rem",
      flexShrink: 0,
    },
    testimonialStars: {
      color: COLORS.brandOrange1,
      fontSize: "1rem",
      marginBottom: "0.75rem",
    },
    testimonialText: {
      color: COLORS.brandDark2,
      lineHeight: "1.7",
      fontSize: "0.9rem",
      marginBottom: "1rem",
      fontStyle: "italic",
    },
    testimonialName: {
      fontWeight: "800",
      fontSize: "0.9rem",
      color: COLORS.brandBunting1,
    },
    testimonialLocation: {
      fontSize: "0.8rem",
      color: COLORS.brandDark2,
    },
    // CTA BANNER
    ctaBanner: {
      background: `linear-gradient(135deg, ${COLORS.brandBunting1} 0%, ${COLORS.brandUltramarine1} 100%)`,
      padding: "5rem 1.5rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    ctaBannerBg: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(circle at 30% 50%, rgba(255,216,1,0.08) 0%, transparent 60%)`,
      pointerEvents: "none",
    },
    ctaH2: {
      fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
      fontWeight: "900",
      color: COLORS.white,
      margin: "0 0 1rem 0",
    },
    ctaP: {
      fontSize: "1.15rem",
      color: "rgba(255,255,255,0.75)",
      margin: "0 0 2.5rem 0",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    ctaButtons: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    storeBtn: (hovered, id) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: hovered === id ? COLORS.brandOrange1 : "rgba(255,255,255,0.1)",
      border: `2px solid ${hovered === id ? COLORS.brandOrange1 : "rgba(255,255,255,0.3)"}`,
      borderRadius: "14px",
      padding: "12px 24px",
      color: hovered === id ? COLORS.brandBunting1 : COLORS.white,
      cursor: "pointer",
      transition: "all 0.25s",
      textDecoration: "none",
      minWidth: "180px",
    }),
    storeBtnIcon: {
      fontSize: "1.6rem",
    },
    storeBtnText: {
      textAlign: "left",
    },
    storeBtnSub: {
      fontSize: "0.65rem",
      opacity: 0.7,
      display: "block",
      fontWeight: "400",
    },
    storeBtnMain: {
      fontSize: "0.9rem",
      fontWeight: "700",
      display: "block",
    },
    // FOOTER
    footer: {
      background: COLORS.brandDark1,
      padding: "3rem 1.5rem 1.5rem",
    },
    footerInner: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    footerTop: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "2rem",
      paddingBottom: "2.5rem",
      borderBottom: `1px solid rgba(255,255,255,0.1)`,
      marginBottom: "2rem",
    },
    footerBrand: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    footerDesc: {
      color: "rgba(255,255,255,0.5)",
      fontSize: "0.9rem",
      lineHeight: "1.6",
    },
    footerColTitle: {
      color: COLORS.white,
      fontWeight: "700",
      fontSize: "0.9rem",
      marginBottom: "1rem",
    },
    footerLinks: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    footerLink: {
      color: "rgba(255,255,255,0.5)",
      textDecoration: "none",
      fontSize: "0.85rem",
      cursor: "pointer",
      transition: "color 0.2s",
    },
    footerBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    },
    footerCopy: {
      color: "rgba(255,255,255,0.35)",
      fontSize: "0.82rem",
    },
    footerSocial: {
      display: "flex",
      gap: "0.75rem",
    },
    socialIcon: {
      width: "36px",
      height: "36px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: COLORS.white,
      fontSize: "0.9rem",
      cursor: "pointer",
      transition: "background 0.2s",
      textDecoration: "none",
    },
  };

  // Keyframe injection
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      @keyframes pulseRing {
        0% { box-shadow: 0 0 0 0 rgba(255,216,1,0.4); }
        70% { box-shadow: 0 0 0 16px rgba(255,216,1,0); }
        100% { box-shadow: 0 0 0 0 rgba(255,216,1,0); }
      }
      @media (max-width: 768px) {
        .hero-inner { grid-template-columns: 1fr !important; }
        .hero-image { display: none !important; }
        .tab-content-grid { grid-template-columns: 1fr !important; }
        .footer-top { grid-template-columns: 1fr 1fr !important; }
        .nav-links-desktop { display: none !important; }
        .nav-cta-desktop { display: none !important; }
        .hamburger-btn { display: flex !important; }
      }
      @media (max-width: 480px) {
        .footer-top { grid-template-columns: 1fr !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [levelHovered, setLevelHovered] = useState(null);
  const [tutorHovered, setTutorHovered] = useState(null);
  const [planHovered, setPlanHovered] = useState(null);
  const [testimonialHovered, setTestimonialHovered] = useState(null);

  return (
    <div style={styles.app}>
      {/* ===== NAV ===== */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo} onClick={() => scrollTo("hero")}>
            <div style={styles.logoIcon}>🐝</div>
            <span style={styles.logoText}>
              Bee<span style={styles.logoSpan}>Speaker</span>
            </span>
          </div>

          <ul className="nav-links-desktop" style={styles.navLinks}>
            {navLinks.map((l) => (
              <li key={l.id}>
                <span
                  style={styles.navLink}
                  onClick={() => scrollTo(l.id)}
                  onMouseEnter={(e) => (e.target.style.opacity = "1")}
                  onMouseLeave={(e) => (e.target.style.opacity = "0.9")}
                >
                  {l.label}
                </span>
              </li>
            ))}
          </ul>

          <button
            className="nav-cta-desktop"
            style={styles.navCta}
            onMouseEnter={(e) => {
              e.target.style.background = COLORS.brandOrange2;
              e.target.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = COLORS.brandOrange1;
              e.target.style.transform = "scale(1)";
            }}
            onClick={() => scrollTo("precios")}
          >
            Empezar gratis
          </button>

          <button
            className="hamburger-btn"
            style={{ ...styles.hamburger, display: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        {navLinks.map((l) => (
          <span key={l.id} style={styles.mobileLink} onClick={() => scrollTo(l.id)}>
            {l.label}
          </span>
        ))}
        <button
          style={{ ...styles.navCta, textAlign: "center", marginTop: "0.5rem" }}
          onClick={() => scrollTo("precios")}
        >
          Empezar gratis
        </button>
      </div>

      {/* ===== HERO ===== */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroBg}></div>
        <div className="hero-inner" style={styles.heroInner}>
          {/* Left */}
          <div>
            <div style={styles.heroTag}>
              🐝 La primera app que te hace HABLAR
            </div>
            <h1 style={styles.heroH1}>
              Aprende inglés
              <span style={styles.heroHighlight}>hablando desde</span>
              el día 1
            </h1>
            <p style={styles.heroDesc}>
              Practica con tutores humanos e inteligencia artificial. Más de 3000 lecciones desde nivel A0 hasta C1. Sin vergüenza, a tu ritmo.
            </p>
            <div style={styles.heroButtons}>
              <button
                style={{
                  ...styles.btnPrimary,
                  ...(hoveredBtn === "hero1" ? { transform: "translateY(-2px)", boxShadow: "0 8px 30px rgba(255,216,1,0.5)" } : {}),
                }}
                onMouseEnter={() => setHoveredBtn("hero1")}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => scrollTo("precios")}
              >
                🚀 Empezar gratis
              </button>
              <button
                style={{
                  ...styles.btnSecondary,
                  ...(hoveredBtn === "hero2" ? { background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.7)" } : {}),
                }}
                onMouseEnter={() => setHoveredBtn("hero2")}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => scrollTo("funcionalidades")}
              >
                ▶ Ver cómo funciona
              </button>
            </div>
            <div style={styles.heroStats}>
              <div style={styles.statItem}>
                <span style={styles.statNum}>+500K</span>
                <span style={styles.statLabel}>Usuarios activos</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNum}>+3000</span>
                <span style={styles.statLabel}>Lecciones</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNum}>4.8⭐</span>
                <span style={styles.statLabel}>Valoración media</span>
              </div>
            </div>
          </div>

          {/* Right — Phone mockup */}
          <div className="hero-image" style={styles.heroImageWrap}>
            {/* Floating badges */}
            <div style={styles.floatingBadge({ top: "40px", left: "-30px" })}>
              <span>🔥</span>
              <div>
                <div style={styles.badgeText}>¡Racha de 30 días!</div>
              </div>
            </div>
            <div style={styles.floatingBadge({ bottom: "80px", right: "-40px" })}>
              <span>🤖</span>
              <div>
                <div style={styles.badgeText}>IA disponible 24/7</div>
              </div>
            </div>

            <div style={styles.heroPhone}>
              <div style={styles.phoneNotch}></div>
              <div style={styles.phoneScreen}>
                <div style={styles.phoneAppLabel}>🐝 BeeSpeaker</div>
                <div style={styles.phoneSubLabel}>Lección del día</div>

                <div style={styles.phoneLessonCard}>
                  <div style={styles.phoneLessonTitle}>🎯 Vocabulario B1 — Trabajo</div>
                  <div style={styles.phoneLessonBar}>
                    <div style={styles.phoneLessonBarFill("72%")}></div>
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginTop: "4px" }}>72% completado</div>
                </div>

                <div style={styles.phoneLessonCard}>
                  <div style={styles.phoneLessonTitle}>🤖 Tutor IA — Conversación</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", lineHeight: "1.5" }}>
                    "Tell me about your last job experience..."
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "12px" }}>
                  <div style={{ ...styles.phoneMicBtn, animation: "pulseRing 2s infinite" }}>🎙️</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", marginTop: "8px" }}>
                    Pulsa para hablar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="funcionalidades" style={styles.section(COLORS.brandGray2)}>
        <div style={styles.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={styles.sectionTag}>Funcionalidades</span>
            <h2 style={styles.sectionH2}>Todo lo que necesitas para hablar inglés</h2>
            <p style={{ ...styles.sectionDesc, margin: "0 auto" }}>
              BeeSpeaker combina la mejor tecnología con un método probado para que aprendas inglés hablando, no memorizando.
            </p>
          </div>
          <div style={styles.featuresGrid}>
            {features.map((f, i) => (
              <div
                key={i}
                style={styles.featureCard(i, hoveredCard)}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span style={styles.featureIcon}>{f.icon}</span>
                <h3 style={styles.featureTitle(hoveredCard, i)}>{f.title}</h3>
                <p style={styles.featureDesc(hoveredCard, i)}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (TABS) ===== */}
      <section style={styles.section(COLORS.white)}>
        <div style={styles.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={styles.sectionTag}>Cómo funciona</span>
            <h2 style={styles.sectionH2}>Aprende inglés de forma diferente</h2>
          </div>

          <div style={styles.tabsWrap}>
            {[
              { id: "hablar", label: "🎙️ Hablar" },
              { id: "ia", label: "🤖 Tutor IA" },
              { id: "lecciones", label: "📖 Lecciones" },
            ].map((t) => (
              <button
                key={t.id}
                style={styles.tab(activeTab === t.id)}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="tab-content-grid" style={styles.tabContent}>
            <div>
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>
                {tabContent[activeTab].icon}
              </span>
              <h3 style={styles.tabTextH3}>{tabContent[activeTab].title}</h3>
              <p style={styles.tabTextP}>{tabContent[activeTab].desc}</p>
              <ul style={styles.bulletList}>
                {tabContent[activeTab].bullets.map((b, i) => (
                  <li key={i} style={styles.bulletItem}>
                    <span style={styles.bulletDot}></span>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  ...styles.btnPrimary,
                  marginTop: "1.5rem",
                  ...(hoveredBtn === "tab-cta" ? { transform: "translateY(-2px)" } : {}),
                }}
                onMouseEnter={() => setHoveredBtn("tab-cta")}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => scrollTo("precios")}
              >
                Probar ahora →
              </button>
            </div>
            <div style={styles.tabImage}>
              {/* TODO: Replace with real app screenshot for each tab */}
              <span style={{ fontSize: "5rem" }}>{tabContent[activeTab].icon}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEVELS ===== */}
      <section id="lecciones" style={styles.section(COLORS.brandBunting1)}>
        <div style={styles.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ ...styles.sectionTag, background: "rgba(255,216,1,0.2)", color: COLORS.brandOrange1 }}>
              Niveles
            </span>
            <h2 style={{ ...styles.sectionH2, color: COLORS.white }}>
              Desde cero hasta avanzado
            </h2>
            <p style={{ ...styles.sectionDesc, color: "rgba(255,255,255,0.7)", margin: "0 auto" }}>
              Más de 3000 lecciones estructuradas para cada nivel. Empieza donde estés y llega donde quieras.
            </p>
          </div>
          <div style={styles.levelsGrid}>
            {levels.map((lv, i) => (
              <div
                key={i}
                style={styles.levelCard(lv.color, levelHovered, i)}
                onMouseEnter={() => setLevelHovered(i)}
                onMouseLeave={() => setLevelHovered(null)}
              >
                <span style={styles.levelCode(lv.color, levelHovered, i)}>{lv.code}</span>
                <span style={styles.levelLabel(levelHovered, i)}>{lv.label}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              ¿No sabes tu nivel? Haz el <span style={{ color: COLORS.brandOrange1, fontWeight: "700", cursor: "pointer" }}>test de nivel gratuito →</span>
              {/* TODO: Link to actual level test */}
            </p>
          </div>
        </div>
      </section>

      {/* ===== TUTORS ===== */}
      <section id="tutores" style={styles.section(COLORS.brandGray2)}>
        <div style={styles.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={styles.sectionTag}>Tutores</span>
            <h2 style={styles.sectionH2}>Aprende con los mejores tutores</h2>
            <p style={{ ...styles.sectionDesc, margin: "0 auto" }}>
              Tutores nativos certificados y tutores de IA disponibles 24/7. Tú eliges cómo y cuándo practicar.
            </p>
          </div>

          {/* AI vs Human split */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.brandBunting1}, ${COLORS.brandUltramarine1})`,
                borderRadius: "20px",
                padding: "2rem",
                color: COLORS.white,
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🤖</div>
              <h3 style={{ fontWeight: "900", fontSize: "1.2rem", marginBottom: "0.5rem", color: COLORS.white }}>
                Tutor de Inteligencia Artificial
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                Disponible 24 horas al día, 7 días a la semana. Practica inglés sin vergüenza, sin límites y completamente adaptado a tu nivel.
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {["24/7 disponible", "Sin esperas", "Precio incluido"].map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(255,216,1,0.2)",
                      color: COLORS.brandOrange1,
                      borderRadius: "50px",
                      padding: "4px 12px",
                      fontSize: "0.78rem",
                      fontWeight: "700",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.brandClaret1}, ${COLORS.brandClaret2})`,
                borderRadius: "20px",
                padding: "2rem",
                color: COLORS.white,
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👩‍🏫</div>
              <h3 style={{ fontWeight: "900", fontSize: "1.2rem", marginBottom: "0.5rem", color: COLORS.white }}>
                Tutores Humanos Nativos
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                Clases en vivo con tutores certificados de países de habla inglesa. Feedback real y personalizado para avanzar rápido.
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {["Hablantes nativos", "Certificados", "Flexibilidad horaria"].map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(255,216,1,0.2)",
                      color: COLORS.brandOrange1,
                      borderRadius: "50px",
                      padding: "4px 12px",
                      fontSize: "0.78rem",
                      fontWeight: "700",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.tutorsGrid}>
            {tutors.map((t, i) => (
              <div
                key={i}
                style={styles.tutorCard(tutorHovered, i)}
                onMouseEnter={() => setTutorHovered(i)}
                onMouseLeave={() => setTutorHovered(null)}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={styles.tutorAvatar}>{t.name.split(" ").map((n) => n[0]).join("")}</div>
                  <div>
                    <div style={styles.tutorName}>{t.name}</div>
                    <div style={styles.tutorOrigin}>{t.origin}</div>
                    <span style={styles.tutorSpecialty}>{t.specialty}</span>
                  </div>
                </div>
                <div style={styles.tutorStats}>
                  <span style={styles.starRating}>⭐ {t.rating}</span>
                  <span>📚 {t.lessons} lecciones</span>
                </div>
              </div>
            ))}
          </div>
          {/* TODO: Show full tutor directory with search/filter */}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="precios" style={styles.section(COLORS.white)}>
        <div style={styles.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={styles.sectionTag}>Precios</span>
            <h2 style={styles.sectionH2}>Planes para cada objetivo</h2>
            <p style={{ ...styles.sectionDesc, margin: "0 auto" }}>
              Comienza gratis. Escala cuando estés listo. Sin compromisos.
            </p>
          </div>
          <div style={styles.pricingGrid}>
            {plans.map((plan, i) => (
              <div
                key={i}
                style={styles.planCard(plan, planHovered, i)}
                onMouseEnter={() => setPlanHovered(i)}
                onMouseLeave={() => setPlanHovered(null)}
              >
                {plan.highlight && <span style={styles.planBadge}>⭐ Más popular</span>}
                <div style={styles.planName(plan)}>{plan.name}</div>
                <div style={styles.planPrice(plan)}>{plan.price}</div>
                <div style={styles.planPeriod(plan)}>{plan.period}</div>
                <ul style={styles.planFeatureList}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={styles.planFeatureItem(plan)}>
                      <span style={styles.planFeatureCheck(plan)}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  style={styles.planCta(plan, hoveredBtn, i)}
                  onMouseEnter={() => setHoveredBtn(`cta-${i}`)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  // TODO: Connect to real payment/signup flow
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: COLORS.brandDark2, fontSize: "0.85rem", marginTop: "2rem" }}>
            💳 Sin tarjeta de crédito para la prueba gratuita · Cancela cuando quieras
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonios" style={styles.section(COLORS.brandGray2)}>
        <div style={styles.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={styles.sectionTag}>Testimonios</span>
            <h2 style={styles.sectionH2}>Más de 500.000 personas ya hablan inglés</h2>
            <p style={{ ...styles.sectionDesc, margin: "0 auto" }}>
              Estos son algunos de nuestros usuarios que transformaron su inglés con BeeSpeaker.
            </p>
          </div>
          <div style={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={styles.testimonialCard(testimonialHovered, i)}
                onMouseEnter={() => setTestimonialHovered(i)}
                onMouseLeave={() => setTestimonialHovered(null)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                  <div style={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <div style={styles.testimonialName}>{t.name}</div>
                    <div style={styles.testimonialLocation}>{t.location}</div>
                  </div>
                </div>
                <div style={styles.testimonialStars}>{"⭐".repeat(t.stars)}</div>
                <p style={styles.testimonialText}>"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={styles.ctaBanner}>
        <div style={styles.ctaBannerBg}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🐝</div>
          <h2 style={styles.ctaH2}>¿Listo para hablar inglés?</h2>
          <p style={styles.ctaP}>
            Únete a más de 500.000 personas que ya están aprendiendo inglés con BeeSpeaker. Empieza gratis hoy.
          </p>
          <div style={styles.ctaButtons}>
            {/* TODO: Add real App Store and Google Play links */}
            <a
              href="#"
              style={styles.storeBtn(hoveredBtn, "appstore")}
              onMouseEnter={() => setHoveredBtn("appstore")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              <span style={styles.storeBtnIcon}>🍎</span>
              <div style={styles.storeBtnText}>
                <span style={styles.storeBtnSub}>Descarga en el</span>
                <span style={styles.storeBtnMain}>App Store</span>
              </div>
            </a>
            <a
              href="#"
              style={styles.storeBtn(hoveredBtn, "playstore")}
              onMouseEnter={() => setHoveredBtn("playstore")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              <span style={styles.storeBtnIcon}>▶</span>
              <div style={styles.storeBtnText}>
                <span style={styles.storeBtnSub}>Disponible en</span>
                <span style={styles.storeBtnMain}>Google Play</span>
              </div>
            </a>
            <button
              style={{
                ...styles.btnPrimary,
                fontSize: "1rem",
                ...(hoveredBtn === "cta-web" ? { transform: "translateY(-2px)", boxShadow: "0 8px 30px rgba(255,216,1,0.5)" } : {}),
              }}
              onMouseEnter={() => setHoveredBtn("cta-web")}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={() => scrollTo("precios")}
            >
              🌐 Usar en el navegador
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <div style={styles.logo}>
                <div style={styles.logoIcon}>🐝</div>
                <span style={styles.logoText}>
                  Bee<span style={styles.logoSpan}>Speaker</span>
                </span>
              </div>
              <p style={styles.footerDesc}>
                La primera app para aprender inglés que te hace HABLAR. Más de 3000 lecciones desde A0 hasta C1.
              </p>
              <div style={styles.footerSocial}>
                {/* TODO: Add real social media links */}
                {["f", "📸", "🐦", "in"].map((s, i) => (
                  <a key={i} href="#" style={styles.socialIcon}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,216,1,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div style={styles.footerColTitle}>Producto</div>
              <ul style={styles.footerLinks}>
                {["Funcionalidades", "Lecciones", "Tutores IA", "Tutores Humanos", "Precios"].map((l) => (
                  <li key={l}>
                    <span style={styles.footerLink}
                      onMouseEnter={(e) => (e.target.style.color = COLORS.brandOrange1)}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={styles.footerColTitle}>Idiomas</div>
              <ul style={styles.footerLinks}>
                {["Inglés", "Español", "Francés", "Alemán", "Italiano", "Portugués"].map((l) => (
                  <li key={l}>
                    <span style={styles.footerLink}
                      onMouseEnter={(e) => (e.target.style.color = COLORS.brandOrange1)}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={styles.footerColTitle}>Empresa</div>
              <ul style={styles.footerLinks}>
                {["Sobre nosotros", "Blog", "Carreras", "Prensa", "Contacto", "Política de privacidad"].map((l) => (
                  <li key={l}>
                    <span style={styles.footerLink}
                      onMouseEnter={(e) => (e.target.style.color = COLORS.brandOrange1)}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopy}>
              © {new Date().getFullYear()} BeeSpeaker. Todos los derechos reservados.
            </p>
            <p style={styles.footerCopy}>
              🐝 Hecho con amor para aprender idiomas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}