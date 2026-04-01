// app/balance/page.tsx
"use client";

import { useAccount, useBalance } from "wagmi";
import Link from "next/link";

export default function BalancePage() {
  const { address, isConnected } = useAccount();
  const { data: balance, isLoading } = useBalance({ address });

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
        💰 ETH 余额查询
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
          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            点击右上角「Connect Wallet」按钮
          </p>
        </div>
      ) : isLoading ? (
        <div style={{ textAlign: "center", padding: "48px" }}>
          <p>加载中...</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "16px",
            padding: "32px",
          }}
        >
          <p style={{ color: "#666", marginBottom: "8px" }}>钱包地址</p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              wordBreak: "break-all",
              marginBottom: "24px",
            }}
          >
            {address}
          </p>

          <p style={{ color: "#666", marginBottom: "8px" }}>ETH 余额</p>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#10b981" }}>
            {balance ? (Number(balance.value) / 1e18).toFixed(4) : "0"}{" "}
            {balance?.symbol}
          </p>

          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "24px",
              padding: "8px 16px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            刷新
          </button>
        </div>
      )}
    </div>
  );
}
