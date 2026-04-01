// app/page.tsx
"use client"; // 因为钱包组件依赖客户端状态，所以需要这行

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import HomeCard from "./components/HomeCard";

export default function Home() {
  const { isConnected } = useAccount();

  const cards = [
    {
      title: "💰 余额查询",
      description: "查询当前钱包的 ETH 余额",
      href: "/balance",
      icon: "💰",
      color: "#10b981",
    },
    {
      title: "🔢 链上计数器",
      description: "读取链上计数器的值，点击 +1 增加",
      href: "/counter",
      icon: "🔢",
      color: "#3b82f6",
    },
    {
      title: "📝 交易记录",
      description: "查看最近的链上交易记录",
      href: "/transactions",
      icon: "📝",
      color: "#f59e0b",
    },
  ];
  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "48px 24px" }}>
      {/* 欢迎区域 */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "16px", color: "#333" }}>
          Web3 DApp Demo
        </h1>
        <p style={{ fontSize: "18px", color: "#666" }}>
          基于 Next.js + RainbowKit + Wagmi 构建
        </p>
        {!isConnected && (
          <p style={{ marginTop: "16px", color: "#f59e0b" }}>
            👆 点击右上角连接钱包开始体验
          </p>
        )}
      </div>

      {/* 卡片网格 */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        {cards.map((card) => (
          <HomeCard key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
}
