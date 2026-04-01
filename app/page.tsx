// app/page.tsx
"use client"; // 因为钱包组件依赖客户端状态，所以需要这行

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ConnectButton />
    </main>
  );
}
