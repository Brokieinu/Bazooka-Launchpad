import { TonClient, TonClient4 } from "@ton/ton"
import { Config, getHttpEndpoint } from "@orbs-network/ton-access";
import { CHAIN } from "@tonconnect/protocol";
import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonConnect } from "./useTonConnect";

export function useTonClient() {
  const { network } = useTonConnect();
  const apiKey = process.env.NEXT_PUBLIC_TON_CONNECT_API_KEY;

  return {
    tonClient: useAsyncInitialize(async () => {
      if (!network) return;
      return new TonClient({
        endpoint: await getHttpEndpoint({
          network: network === CHAIN.MAINNET ? "mainnet" : "testnet",
        }),
        apiKey,
      });
    }, [network]),
  };
}