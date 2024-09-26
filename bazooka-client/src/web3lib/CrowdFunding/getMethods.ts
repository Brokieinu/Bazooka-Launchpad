import { Address, toNano, fromNano, beginCell } from '@ton/core';
import { TonClient } from "@ton/ton"

export const getTotalCapRaised = async (presaleContractAddress: string, tonClient: TonClient): Promise<string> => {
  try {
    const result = await tonClient.runMethod(Address.parse(presaleContractAddress), "get_total_cap_raised", []);
    const val = result.stack.readBigNumber();
    return fromNano(val);
  }
  catch (error) {
    console.error('Error fetching total cap raised:', error);
    return "0";
  }
}

export const getUserBillAddress = async (presaleContractAddress: string, userAddress: string, tonClient: TonClient): Promise<string> => {

  try {
    const result = await tonClient.runMethod(
      Address.parse(presaleContractAddress),
      "get_bill_address",
      [{
        type: 'slice',
        cell: beginCell().storeAddress(Address.parse(userAddress)).endCell()
      }]
    );
    console.log("here", result);
    const val = result.stack.readAddress();
    return val.toString();
  }
  catch (error) {
    console.error('Error fetching user bill address:', error);
    return "";
  }
}

export const getUserDepositAmount = async (billContractAddress: string, tonClient: TonClient): Promise<string> => {
  try {
    const result = await tonClient.runMethod(
      Address.parse(billContractAddress),
      "get_deposit_bill_data",
    );
    result.stack.readAddress();
    const val = result.stack.readBigNumber();
    return fromNano(val);
  }
  catch (error) {
    console.error('Error fetching user deposit amount:', error);
    return "0";
  }
}
