import img2 from "../assets/2.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";

export default function TechStack() {
    const icons = [img2, img4, img5, img6, img7];
    const doubled = [...icons, ...icons];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap');

            .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee 12s linear infinite;
            }
            .marquee-track:hover {
                animation-play-state: paused;
            }
            @keyframes marquee {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
            }
            `}</style>

            <section id="tech-stack"
            className="w-full bg-[#E0E0E0] border-black border-[3px] lg:border-[5px]"
            style={{ padding: "clamp(1.5rem, 4vw, 4rem) clamp(1rem, 6vw, 6rem)" }}
            >
            {/* Header */}
            <div className="flex items-baseline justify-between mb-6">
            <h2
            className="font-normal leading-none text-black"
            style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.02em",
            }}
            >
            Tech Stack
            </h2>
            <span
            className="uppercase tracking-[0.2em] text-black/50"
            style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.8rem)", fontFamily: "'DM Sans', sans-serif" }}
            >
            {icons.length} tools
            </span>
            </div>

            {/* Divider */}
            <div className="w-full h-[3px] bg-black mb-8" />

            {/* Marquee container */}
            <div
            className="w-full overflow-hidden border-black border-[3px] lg:border-[5px] bg-[#bfbfbf]"
            style={{ padding: "clamp(1rem, 2vw, 1.75rem) 0" }}
            >
            <div className="marquee-track">
            {doubled.map((src, i) => (
                <div
                key={i}
                className="flex items-center justify-center flex-shrink-0"
                style={{
                    width: "clamp(60px, 8vw, 110px)",
                                      height: "clamp(60px, 8vw, 110px)",
                                      margin: "0 clamp(1rem, 3vw, 3rem)",
                }}
                >
                <img
                src={src}
                alt={"Tech icon " + (i % icons.length + 1)}
                style={{ width: "100%", height: "100%", objectFit: "contain", filter: "grayscale(30%)", transition: "filter 0.2s ease" }}
                onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0%)"}
                onMouseLeave={e => e.currentTarget.style.filter = "grayscale(30%)"}
                />
                </div>
            ))}
            </div>
            </div>

            {/* Scroll hint */}
            <p
            className="mt-4 text-black/40 uppercase tracking-widest"
            style={{ fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)", fontFamily: "'DM Sans', sans-serif" }}
            >
            hover to pause
            </p>

            </section>
            </>
    );
}
