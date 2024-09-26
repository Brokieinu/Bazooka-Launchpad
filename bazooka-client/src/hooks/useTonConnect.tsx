import {
	CHAIN,
	useIsConnectionRestored,
	useTonConnectUI,
	useTonWallet,
} from "@tonconnect/ui-react";
import { toUserFriendlyAddress } from "@tonconnect/sdk";

export function useTonConnect() {
	const [tonConnectUI] = useTonConnectUI();
	const connectionRestored = useIsConnectionRestored();

	const wallet = useTonWallet();

	async function connect() {
		try {
			await tonConnectUI.openModal();
		} catch (err) {
			console.log(err);
		}
	}

	async function disconnect() {
		try {
			await tonConnectUI.disconnect();
		} catch (err) {
			console.log(err);
		}
	}

	return {
		tonConnectUI,
		connect,
		disconnect,
		connected: tonConnectUI?.connected,
		connectionChecked: connectionRestored,
		network: wallet?.account?.chain || null,
		wallet,
		rawWalletAddress:wallet?.account?.address || null,
		walletAddress: wallet
			? toUserFriendlyAddress(wallet.account.address)
			: null,
	};
}