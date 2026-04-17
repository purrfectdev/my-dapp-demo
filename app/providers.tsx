/* eslint-disable react-hooks/set-state-in-effect */
// app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../wagmi.config";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  // WagmiProvider 始终存在，不条件渲染
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
