/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IAirDropHandlerInterface extends utils.Interface {
  functions: {
    "claimAirDrop(address,address)": FunctionFragment;
    "launchAirdrop(address,uint256,uint256,bytes,bool)": FunctionFragment;
    "launchAirdropBatch(address[],uint256[])": FunctionFragment;
    "previewAirDrop(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimAirDrop"
      | "launchAirdrop"
      | "launchAirdropBatch"
      | "previewAirDrop"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimAirDrop",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "launchAirdrop",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "launchAirdropBatch",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "previewAirDrop",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimAirDrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "launchAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "launchAirdropBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewAirDrop",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAirDropHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAirDropHandlerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimAirDrop(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    launchAirdrop(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      airdropPeriod: PromiseOrValue<BigNumberish>,
      merkleRoot: PromiseOrValue<BytesLike>,
      moneyback: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    launchAirdropBatch(
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    previewAirDrop(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;
  };

  claimAirDrop(
    user: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  launchAirdrop(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    airdropPeriod: PromiseOrValue<BigNumberish>,
    merkleRoot: PromiseOrValue<BytesLike>,
    moneyback: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  launchAirdropBatch(
    tokens: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  previewAirDrop(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    claimAirDrop(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    launchAirdrop(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      airdropPeriod: PromiseOrValue<BigNumberish>,
      merkleRoot: PromiseOrValue<BytesLike>,
      moneyback: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    launchAirdropBatch(
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    previewAirDrop(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    claimAirDrop(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    launchAirdrop(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      airdropPeriod: PromiseOrValue<BigNumberish>,
      merkleRoot: PromiseOrValue<BytesLike>,
      moneyback: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    launchAirdropBatch(
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    previewAirDrop(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimAirDrop(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    launchAirdrop(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      airdropPeriod: PromiseOrValue<BigNumberish>,
      merkleRoot: PromiseOrValue<BytesLike>,
      moneyback: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    launchAirdropBatch(
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    previewAirDrop(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
