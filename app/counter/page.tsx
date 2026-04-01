// app/counter/page.tsx
"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import Link from "next/link";
import { useState } from "react";

// 计数器合约配置（替换成你实际使用的合约地址）
const COUNTER_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const COUNTER_ABI = [
  {
    inputs: [],
    name: "count",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export default function CounterPage() {
  const { isConnected } = useAccount();
  const { data: count, refetch } = useReadContract({
    address: COUNTER_ADDRESS,
    abi: COUNTER_ABI,
    functionName: "count",
  });

  const { writeContract, isPending } = useWriteContract();
  const [txHash, setTxHash] = useState("");

  const handleIncrement = () => {
    writeContract(
      {
        address: COUNTER_ADDRESS,
        abi: COUNTER_ABI,
        functionName: "increment",
      },
      {
        onSuccess: (hash) => {
          setTxHash(hash);
          setTimeout(() => refetch(), 5000);
        },
      },
    );
  };

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
        🔢 链上计数器
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
      ) : (
        <div
          style={{
            backgroundColor: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "16px",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>
            合约地址：{COUNTER_ADDRESS.slice(0, 12)}...
            {COUNTER_ADDRESS.slice(-8)}
          </p>

          <p
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#3b82f6",
              margin: "24px 0",
            }}
          >
            {count?.toString() ?? "0"}
          </p>

          <button
            onClick={handleIncrement}
            disabled={isPending}
            style={{
              padding: "12px 32px",
              fontSize: "18px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: isPending ? "not-allowed" : "pointer",
              opacity: isPending ? 0.6 : 1,
            }}
          >
            {isPending ? "交易确认中..." : "+1"}
          </button>

          {txHash && (
            <p
              style={{
                fontSize: "12px",
                color: "#666",
                marginTop: "24px",
                wordBreak: "break-all",
              }}
            >
              交易哈希：{txHash.slice(0, 16)}...{txHash.slice(-12)}
            </p>
          )}

          <button
            onClick={() => refetch()}
            style={{
              marginTop: "24px",
              padding: "6px 12px",
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "#3b82f6",
              border: "1px solid #3b82f6",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            刷新计数
          </button>
        </div>
      )}
    </div>
  );
}
