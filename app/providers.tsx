/* eslint-disable react-hooks/set-state-in-effect */
// app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../wagmi.config";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // WagmiProvider 始终存在，不条件渲染
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {mounted ? (
          <RainbowKitProvider>{children}</RainbowKitProvider>
        ) : (
          // 服务端渲染时，暂时不包裹 RainbowKitProvider
          // 这样 children 中的 ConnectButton 暂时不渲染
          <div style={{ visibility: "hidden" }}>{children}</div>
        )}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
