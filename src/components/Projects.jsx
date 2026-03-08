import { Monitor, ShoppingCart, Layout, Cloud, FileText, TrendingUp, MessageSquare, Newspaper, Activity, Droplet, FileCheck, Play, BookOpen, Code, Image } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            name: "Task-Face",
            description: "A minimalist task manager app with dark mode, smooth animations, and a responsive project grid.",
            tech: ["React", "Tailwind CSS" ],
            icon: Monitor,
        },
        {
            name: "Weather-Face",
            description: "A weather dashboard that shows current weather, hourly forecasts, and supports city search.",
            tech: ["React", "Tailwind CSS", "OpenWeather API"],
            icon: Cloud,
        },
        {
            name: "Crypto-Face",
            description: "A cryptocurrency tracker with live prices and a simple portfolio tracker.",
            tech: ["React", "Tailwind CSS", "CoinGecko API"],
            icon: TrendingUp,
        },
        {
            name: "News-Face",
            description: "A personalized news app that fetches headlines by category and allows bookmarking articles.",
            tech: ["React", "Tailwind CSS", "News API"],
            icon: Newspaper,
        },
    ];

    const doubled = [...projects, ...projects];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap');

            .projects-section { animation: fadeUp 0.6s ease forwards; }
            @keyframes fadeUp {
                from { opacity: 0; transform: translateY(12px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            .marquee-projects {
                display: flex;
                width: max-content;
                animation: marqueeX 40s linear infinite;
            }
            .marquee-projects:hover {
                animation-play-state: paused;
            }
            @keyframes marqueeX {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
            }

            .project-card {
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                cursor: default;
            }
            .project-card:hover {
                transform: translateY(-4px);
                box-shadow: 6px 6px 0px #000;
            }
            `}</style>

            <section
            id="projects"
            className="projects-section w-full bg-[#A0A0A0] border-black border-[3px] lg:border-[5px]"
            style={{ padding: "clamp(1.5rem, 4vw, 4rem) clamp(1rem, 6vw, 6rem)" }}
            >
            {/* Header */}
            <div className="flex items-baseline justify-between mb-8">
            <h2
            className="font-normal leading-none text-black"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.02em" }}
            >
            Projects
            </h2>
            <span
            className="uppercase tracking-[0.2em] text-black/50"
            style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.8rem)", fontFamily: "'DM Sans', sans-serif" }}
            >
            {projects.length} works
            </span>
            </div>


            <div className="w-full h-[3px] bg-black mb-8" />

            <div className="w-full overflow-hidden border-black border-[3px] lg:border-[5px] bg-[#bfbfbf]" style={{ padding: "clamp(1rem, 2vw, 1.5rem) 0" }}>
            <div className="marquee-projects">
            {doubled.map((project, index) => {
                const Icon = project.icon;
                return (
                    <div
                    key={index}
                    className="project-card flex-shrink-0 border-black border-[3px] bg-[#E0E0E0] flex flex-col"
                    style={{ width: "clamp(200px, 22vw, 300px)", marginRight: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
                    >
                    {/* Browser chrome bar */}
                    <div
                    className="flex items-center gap-2 border-b-[3px] border-black bg-[#C8C8C8]"
                    style={{ padding: "0.4rem 0.6rem" }}
                    >
                    <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
                    <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
                    <span
                    className="ml-1 font-medium text-black truncate"
                    style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.8rem)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                    {project.name}
                    </span>
                    </div>

                    {/* Icon area */}
                    <div
                    className="w-full border-b-[3px] border-black flex items-center justify-center bg-[#D0D0D0]"
                    style={{ height: "clamp(80px, 10vw, 140px)" }}
                    >
                    <Icon
                    size={40}
                    strokeWidth={1.25}
                    className="text-black/60"
                    style={{ width: "clamp(28px, 4vw, 48px)", height: "clamp(28px, 4vw, 48px)" }}
                    />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2" style={{ padding: "clamp(0.5rem, 1vw, 0.9rem)" }}>
                    <h3
                    className="font-normal text-black leading-tight"
                    style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)", fontFamily: "'DM Serif Display', serif" }}
                    >
                    {project.name}
                    </h3>
                    <p
                    className="text-black/60 leading-relaxed"
                    style={{ fontSize: "clamp(0.6rem, 0.75vw, 0.75rem)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                    {project.description}
                    </p>
                    <div className="flex gap-1.5 flex-wrap pt-1">
                    {project.tech.map((t) => (
                        <span
                        key={t}
                        className="border-[2px] border-black px-1.5 py-0.5 uppercase tracking-wider text-black"
                        style={{ fontSize: "clamp(0.45rem, 0.6vw, 0.6rem)", fontFamily: "'DM Sans', sans-serif" }}
                        >
                        {t}
                        </span>
                    ))}
                    </div>
                    </div>
                    </div>
                );
            })}
            </div>
            </div>

            </section>
            </>
    );
}
