export default function Resume() {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap');
            .resume-section { animation: fadeUp 0.6s ease forwards; }
            @keyframes fadeUp {
                from { opacity: 0; transform: translateY(12px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            `}</style>

            <section
            id="resume"
            className="resume-section w-full bg-[#A0A0A0] border-black border-[3px] lg:border-[5px]"
            style={{ padding: "clamp(2rem, 5vw, 5rem) clamp(1rem, 6vw, 6rem)" }}
            >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "clamp(1.5rem, 3vw, 2.5rem)", flexWrap: "wrap", gap: "0.5rem" }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: "normal", margin: 0, letterSpacing: "-0.02em" }}>
            Resume
            </h2>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.6rem, 0.9vw, 0.8rem)", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(0,0,0,0.5)" }}>
            2025
            </span>
            </div>

            <div style={{ width: "100%", height: "3px", background: "#000", marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }} />

            {/* The actual resume document */}
            <div style={{
                background: "#E0E0E0",
                border: "3px solid black",
                padding: "clamp(1.5rem, 4vw, 3rem)",
            maxWidth: "780px",
            margin: "0 auto",
            fontFamily: "'DM Sans', sans-serif",
            }}>

            {/* Name + contact */}
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: "normal", margin: "0 0 0.2rem 0" }}>
            Alvin Wamunye Kamotho
            </h1>
            <p style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.82rem)", color: "rgba(0,0,0,0.6)", margin: "0 0 1.5rem 0" }}>
            Kiserian, Kenya &nbsp;|&nbsp; +254794994316 &nbsp;|&nbsp; alvinkamotho9@gmail.com
            </p>

            <div style={{ width: "100%", height: "2px", background: "black", marginBottom: "1rem" }} />

            {/* Summary */}
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", fontWeight: "normal", margin: "0 0 0.4rem 0" }}>
            Summary
            </h3>
            <p style={{ fontSize: "clamp(0.7rem, 0.95vw, 0.88rem)", lineHeight: 1.75, color: "rgba(0,0,0,0.8)", margin: "0 0 1.25rem 0" }}>
            Frontend developer with 1 year of experience in React.js, building responsive web apps. Skilled in modern state management with Zustand, integrating AI tools, and delivering clean, maintainable code. Certified from ALX Foundations Bootcamp 2025.
            </p>

            <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.2)", marginBottom: "1rem" }} />

            {/* Education */}
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", fontWeight: "normal", margin: "0 0 0.4rem 0" }}>
            Education
            </h3>
            <p style={{ fontSize: "clamp(0.72rem, 0.95vw, 0.88rem)", fontWeight: 500, margin: "0 0 0.15rem 0" }}>
            ALX Foundations Bootcamp 2025
            </p>
            <p style={{ fontSize: "clamp(0.68rem, 0.9vw, 0.84rem)", color: "rgba(0,0,0,0.65)", margin: "0 0 1.25rem 0" }}>
            Certificate in Software Engineering / Frontend Development
            </p>

            <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.2)", marginBottom: "1rem" }} />

            {/* Experience */}
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", fontWeight: "normal", margin: "0 0 0.4rem 0" }}>
            Experience
            </h3>
            <p style={{ fontSize: "clamp(0.68rem, 0.9vw, 0.84rem)", color: "rgba(0,0,0,0.65)", margin: "0 0 0.6rem 0" }}>
            No professional experience yet — building hands-on projects to demonstrate skills and capabilities.
            </p>
            <p style={{ fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)", fontWeight: 500, margin: "0 0 0.5rem 0" }}>
            Portfolio Projects:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
            {[
                {
                    num: "1.",
                    name: "TaskMaster Web App",
                    desc: "A productivity app where users can create, organize, and track tasks. Implements React for UI and Zustand for state management. Integrates AI-based suggestions for task prioritization.",
                },
                {
                    num: "2.",
                    name: "Crypto Dashboard",
                    desc: "Real-time dashboard displaying cryptocurrency prices and trends using React and public APIs. Includes chart visualizations and interactive filtering.",
                },
                {
                    num: "3.",
                    name: "Recipe Finder App",
                    desc: "A web app where users can search for recipes, save favorites, and generate meal plans. Features AI-powered recipe suggestions and personalized recommendations.",
                },
            ].map((proj) => (
                <div key={proj.name} style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ fontSize: "clamp(0.68rem, 0.9vw, 0.84rem)", color: "rgba(0,0,0,0.5)", flexShrink: 0 }}>{proj.num}</span>
                <p style={{ fontSize: "clamp(0.68rem, 0.9vw, 0.84rem)", lineHeight: 1.7, color: "rgba(0,0,0,0.78)", margin: 0 }}>
                <span style={{ fontWeight: 500 }}>{proj.name}</span> — {proj.desc}
                </p>
                </div>
            ))}
            </div>

            <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.2)", marginBottom: "1rem" }} />

            {/* Skills */}
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", fontWeight: "normal", margin: "0 0 0.5rem 0" }}>
            Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            {[
                { label: "Programming & Frameworks", value: "React.js, Zustand, AI integration" },
                { label: "Tools & Technologies", value: "HTML, CSS, Git, basic computer packages" },
                { label: "Professional Skills", value: "Time management, problem-solving, project organization, self-directed learning" },
                { label: "Certifications", value: "ALX Foundations Bootcamp 2025" },
            ].map((s) => (
                <p key={s.label} style={{ fontSize: "clamp(0.68rem, 0.9vw, 0.84rem)", lineHeight: 1.7, margin: 0, color: "rgba(0,0,0,0.78)" }}>
                <span style={{ fontWeight: 500 }}>· {s.label}:</span> {s.value}
                </p>
            ))}
            </div>

            </div>

            </section>
            </>
    );
}
