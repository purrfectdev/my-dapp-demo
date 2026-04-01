"use client";
import Link from "next/link";

type CardType = {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
};

export default function HomeCard(card: CardType) {
  return (
    <Link key={card.href} href={card.href} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "32px 24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          border: "1px solid #eaeaea",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
          textAlign: "center",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>
          {card.icon}
        </div>
        <h3
          style={{
            fontSize: "24px",
            marginBottom: "12px",
            color: "#333",
          }}
        >
          {card.title}
        </h3>
        <p style={{ color: "#666", lineHeight: "1.5" }}>{card.description}</p>
        <div
          style={{
            marginTop: "24px",
            color: card.color,
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          点击体验 →
        </div>
      </div>
    </Link>
  );
}
