// components/Hero.tsx
import React from "react";
import logoImage from "@/assets/logo.jpeg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "972509482114"; // your number
    const message =
      "היי משה, אני מעוניין לשמוע עוד על ליווי משקיעים והתחדשות עירונית";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      dir="rtl"
    >
      {/* subtle background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* logo: top-right on mobile, centered at md+ */}
      <div
        className="
          absolute top-4 right-4 z-20
          md:top-10 md:mb-10
          md:left-1/2 md:right-auto
          md:-translate-x-1/2
        "
      >
        <img
          src={logoImage}
          alt="משה סיני לוגו"
          className="h-24 md:h-44 lg:h-60 w-auto rounded-lg shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
        />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          משה סיני
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            ליווי משקיעים התחדשות עירונית
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in">
          הצעד הראשון לחופש כלכלי מתחיל כאן
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          צור קשר עכשיו - WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Hero;
