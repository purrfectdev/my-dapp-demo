// app/transactions/page.tsx
"use client";

import Link from "next/link";
import { useAccount } from "wagmi";

export default function TransactionsPage() {
  const { isConnected } = useAccount();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
      <Link
        href="/"
        style={{
          color: "#3b82f6",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "24px",
        }}
      >
        ← 返回首页
      </Link>

      <h1 style={{ fontSize: "28px", marginBottom: "24px", color: "#333" }}>
        📝 交易记录
      </h1>

      {!isConnected ? (
        <div
          style={{
            backgroundColor: "#fef3c7",
            padding: "24px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p>请先连接钱包</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#fef9e7",
            border: "1px solid #fde68a",
            borderRadius: "16px",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <p>此功能正在开发中...</p>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "12px" }}>
            敬请期待
          </p>
        </div>
      )}
    </div>
  );
}
