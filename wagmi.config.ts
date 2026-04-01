// wagmi.config.ts
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit Demo",
  projectId: "bf0ddd087cb7c50d95084ca4d65ffb90", // 换成你自己的
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true,
});
