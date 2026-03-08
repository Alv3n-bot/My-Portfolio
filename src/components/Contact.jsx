export default function Contact() {
    const links = [
        {
            label: "LinkedIn",
            handle: "collins-alvin",
            href: "https://www.linkedin.com/in/collins-alvin-576267321/",
        },
        {
            label: "GitHub",
            handle: "Alv3n-bot",
            href: "https://github.com/Alv3n-bot",
        },
        {
            label: "Email",
            handle: "alvinkamotho9@gmail.com",
            href: "mailto:alvinkamotho9@gmail.com",
        },
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap');
            .contact-link { transition: background 0.15s ease, color 0.15s ease; cursor: pointer; }
            .contact-link:hover { background: #000; color: #E0E0E0; }
            .contact-link:hover .contact-arrow { transform: translate(3px, -3px); }
            .contact-arrow { transition: transform 0.15s ease; display: inline-block; }
            `}</style>

            <section id="contact"
            className="w-full bg-[#E0E0E0] border-black border-[3px] lg:border-[5px]"
            style={{ padding: "clamp(1.5rem, 4vw, 4rem) clamp(1rem, 6vw, 6rem)" }}
            >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1.5rem" }}>
            <h2
            style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.02em",
            fontWeight: "normal",
            margin: 0,
            }}
            >
            Contact
            </h2>
            <span
            style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.6rem, 0.9vw, 0.8rem)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.5)",
            }}
            >
            Let's connect
            </span>
            </div>

            {/* Divider */}
            <div style={{ width: "100%", height: "3px", background: "#000", marginBottom: "2.5rem" }} />

            {/* Intro */}
            <p
            style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
            maxWidth: "clamp(280px, 40vw, 560px)",
            lineHeight: 1.7,
            color: "rgba(0,0,0,0.7)",
            marginBottom: "2.5rem",
            }}
            >
            I'm open to frontend roles, freelance work, and interesting
            collaborations. Feel free to reach out through any of the channels below.
            </p>

            {/* Contact rows */}
            <div style={{ border: "3px solid black" }}>
            {links.map((link, i) => (
                <button
                key={link.label}
                onClick={() => window.open(link.href, "_blank")}
                className="contact-link"
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "clamp(0.9rem, 2vw, 1.5rem) clamp(1rem, 2.5vw, 2rem)",
                                     borderTop: i !== 0 ? "3px solid black" : "none",
                                     background: "none",
                                     border: i !== 0 ? "none" : "none",
                                     borderTop: i !== 0 ? "3px solid black" : "none",
                                     color: "black",
                                     textAlign: "left",
                }}
                >
                <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(0.75rem, 2vw, 2rem)" }}>
                <span
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(0.55rem, 0.8vw, 0.75rem)",
                                     textTransform: "uppercase",
                                     letterSpacing: "0.15em",
                                     color: "rgba(0,0,0,0.4)",
                                     minWidth: "4rem",
                }}
                >
                {link.label}
                </span>
                <span
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(1rem, 2.2vw, 2rem)",
                                     letterSpacing: "-0.01em",
                }}
                >
                {link.handle}
                </span>
                </div>
                <span className="contact-arrow" style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)", fontWeight: 300 }}>
                ↗
                </span>
                </button>
            ))}
            </div>

            {/* Footer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2.5rem" }}>
            <div style={{ height: "3px", background: "#000", width: "clamp(2rem, 6vw, 5rem)" }} />
            <p
            style={{
                fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "rgba(0,0,0,0.4)",
            margin: 0,
            }}
            >
            © 2025 Alvin — All rights reserved
            </p>
            <div style={{ height: "3px", background: "#000", width: "clamp(2rem, 6vw, 5rem)" }} />
            </div>

            </section>
            </>
    );
}
