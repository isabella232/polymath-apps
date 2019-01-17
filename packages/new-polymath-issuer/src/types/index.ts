import { types } from '@polymathnetwork/new-shared';
import { typeHelpers } from '@polymathnetwork/new-shared';

export interface Wallet {
  address: string;
}

export interface Identity {
  email: string;
  confirmed?: boolean;
  fullName: string;
}

export enum SessionRoles {
  Anonymous,
  LoggedIn,
  UnconfirmedUser,
  ConfirmedUser,
}

export enum Entities {
  Checkpoints = 'checkpoints',
  Transactions = 'transactions',
  Dividends = 'dividends',
  Erc20DividendsModules = 'erc20DividendsModules',
  TransactionQueues = 'transactionQueues',
}

export enum RequestKeys {
  GetCheckpointsBySymbol = 'getCheckpointsBySymbol',
  GetSecurityTokenBySymbol = 'getSecurityTokenBySymbol',
  GetDividendsByCheckpoint = 'getDividendsByCheckpoint',
  GetCheckpointBySymbolAndId = 'getCheckpointBySymbolAndId',
  GetErc20DividendsModuleBySymbol = 'getErc20DividendsModuleBySymbol',
}

export interface GetCheckpointsBySymbolArgs {
  securityTokenSymbol: string;
}

export interface GetCheckpointBySymbolAndIdArgs {
  securityTokenSymbol: string;
  checkpointIndex: number;
}

export interface GetSecurityTokenBySymbolArgs {
  securityTokenSymbol: string;
}

export interface GetDividendsByCheckpointArgs {
  securityTokenSymbol: string;
  checkpointIndex: number;
}

export interface GetErc20DividendsModuleBySymbolArgs {
  securityTokenSymbol: string;
}

export function isGetCheckpointsBySymbolArgs(
  args: any
): args is GetCheckpointsBySymbolArgs {
  const { securityTokenSymbol } = args;

  return typeof securityTokenSymbol === 'string';
}

export function isGetCheckpointBySymbolAndIdArgs(
  args: any
): args is GetCheckpointBySymbolAndIdArgs {
  const { securityTokenSymbol, checkpointIndex } = args;

  return (
    typeof securityTokenSymbol === 'string' &&
    typeof checkpointIndex === 'number'
  );
}

export function isGetSecurityTokenBySymbolArgs(
  args: any
): args is GetSecurityTokenBySymbolArgs {
  const { securityTokenSymbol } = args;

  return typeof securityTokenSymbol === 'string';
}

export function isGetDividendsByCheckpointArgs(
  args: any
): args is GetDividendsByCheckpointArgs {
  const { securityTokenSymbol, checkpointIndex } = args;

  return (
    typeof securityTokenSymbol === 'string' &&
    typeof checkpointIndex === 'number'
  );
}

export function isGetErc20DividendsModuleBySymbolArgs(
  args: any
): args is GetCheckpointsBySymbolArgs {
  const { securityTokenSymbol } = args;

  return typeof securityTokenSymbol === 'string';
}

export interface Fetcher {
  propKey?: string;
  entity: Entities;
  requestKey: RequestKeys;
  args: types.Pojo;
}

export interface FetchedData {
  [key: string]: types.Entity[] | null | undefined;
}

export interface CacheStatus {
  args: types.Pojo;
  requestKey: RequestKeys;
  mustBeFetched: boolean;
}

export type PartialWithId<T extends types.Entity> = Partial<
  typeHelpers.Omit<T, 'uid'>
> & {
  uid: string;
};
