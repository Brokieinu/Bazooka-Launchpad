import { Address, toNano, beginCell, SendMode } from '@ton/core';
import { SendTransactionRequest, TonConnectUI } from '@tonconnect/ui-react';
import { Opcodes } from '../utils/Opcodes';

export async function sendDeposit(contractAddress: string, amount: string, tonConnectUI: TonConnectUI) {
  try {
    const tx: SendTransactionRequest = {
      validUntil: Date.now() + 5 * 60 * 100,
      messages: [
        {
          address: contractAddress,
          amount: BigInt(toNano(amount)).toString(),
          payload: beginCell()
                  .storeUint(Opcodes.deposit, 32)
                  .endCell()
                  .toBoc().toString("base64")
        }
      ],
    }
    return await tonConnectUI.sendTransaction(tx);
  }
  catch (error) {
    return error;
  }
}

export async function sendInvestorWithdrawalReq(contractAddress: string, tonConnectUI: TonConnectUI) {
  const tx: SendTransactionRequest = {
    validUntil: Date.now() + 5 * 60 * 100,
    messages: [
      {
        address: contractAddress,
        amount: toNano(0.05).toString(),
        payload: beginCell()
              .storeUint(Opcodes.investor_withdrawal_req,32)
              .endCell()
              .toBoc().toString("base64")
      }
    ]
  }
  await tonConnectUI.sendTransaction(tx);
}

export async function sendInvestorJettonClaimReq(contractAddress: string, tonConnectUI: TonConnectUI) {
  const tx: SendTransactionRequest = {
    validUntil: Date.now() + 5 * 60 * 100,
    messages: [
      {
        address: contractAddress,
        amount: toNano(0.05).toString(),
        payload: beginCell()
              .storeUint(Opcodes.jetton_claim_req,32)
              .endCell()
              .toBoc().toString("base64")
      }
    ]
  }
  await tonConnectUI.sendTransaction(tx);
}