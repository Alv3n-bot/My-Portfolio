import HeroImage from "../assets/Hero.png";

export default function Hero() {
    return (
        <>
        {/* Import display font */}
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap');

            .hero-section {
                animation: heroFadeIn 0.6s ease forwards;
            }
            @keyframes heroFadeIn {
                from { opacity: 0; transform: translateY(12px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            .hero-text { animation: heroFadeIn 0.6s ease 0.15s both; }
            .hero-img  { animation: heroFadeIn 0.6s ease 0.3s  both; }
            `}</style>

            <section
            className="hero-section w-full bg-[#E0E0E0] border-black border-[3px] lg:border-[5px]"
            style={{ padding: "clamp(1.5rem, 4vw, 4rem) clamp(1rem, 6vw, 6rem)" }}
            >
            <div className="flex items-center justify-between gap-8">

            {/* Left Column */}
            <div className="hero-text flex flex-col" style={{ gap: "clamp(0.75rem, 2vw, 1.5rem)" }}>

            {/* Small label above name */}
            <span
            className="uppercase tracking-[0.2em] text-black/50 font-medium"
            style={{ fontSize: "clamp(0.6rem, 1vw, 0.85rem)", fontFamily: "'DM Sans', sans-serif" }}
            >
            Portfolio — 2026
            </span>

            {/* Main heading */}
            <h1
            className="font-normal leading-[0.95] text-black"
            style={{
                fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)",
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.02em",
            }}
            >
            Hello,<br />
            I'm Alvin.
            </h1>

            {/* Divider */}
            <div className="w-12 h-[3px] bg-black" />

            {/* Paragraph */}
            <p
            className="text-black/75 leading-relaxed"
            style={{
                fontSize: "clamp(0.85rem, 1.8vw, 1.25rem)",
            maxWidth: "clamp(240px, 30vw, 460px)",
            fontFamily: "'DM Sans', sans-serif",
            }}
            >
            I'm a Frontend developer. I build high-performance, responsive web
            interfaces using modern technologies and clean, maintainable code.
            </p>

            {/* CTA */}


            </div>

            {/* Right Column: image */}
            <div
            className="hero-img flex-shrink-0 border-[3px] lg:border-[5px] border-black overflow-hidden"
            style={{
                width:  "clamp(160px, 32vw, 480px)",
            height: "clamp(200px, 38vw, 560px)",
            }}
            >
            <img
            src={HeroImage}
            alt="Alvin"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            </div>
            </div>
            </section>
            </>
    );
}
