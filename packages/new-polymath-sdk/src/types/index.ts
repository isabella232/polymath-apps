import BigNumber from 'bignumber.js';
import { PostTransactionResolver } from '~/PostTransactionResolver';
import PromiEvent from 'web3/promiEvent';

export interface TaxWithholding {
  address: string;
  percentage: number;
}

export enum ModuleTypes {
  Permission = 1,
  Transfer,
  Sto,
  Dividends,
  Burn,
}

export enum ErrorCodes {
  IncompatibleBrowser = 'IncompatibleBrowser',
  UserDeniedAccess = 'UserDeniedAccess',
  WalletIsLocked = 'WalletIsLocked',
  ProcedureValidationError = 'ProcedureValidationError',
  TransactionRejectedByUser = 'TransactionRejectedByUser',
  TransactionReverted = 'TransactionReverted',
  FatalError = 'FatalError',
}

export interface InvestorBalance {
  address: string;
  balance: BigNumber;
}

export interface TransactionSpec<Args extends any[]> {
  method: (...args: Args) => PromiEvent<any>;
  args: Args;
  postTransactionResolver: PostTransactionResolver<any>;
}

export enum ProcedureTypes {
  Unnamed = 'Unnamed',
  Approve = 'Approve',
  CreateErc20DividendCheckpoint = 'CreateErc20DividendCheckpoint',
  CreateEtherDividendCheckpoint = 'CreateEtherDividendCheckpoint',
  CreateSecurityToken = 'CreateSecurityToken',
  EnableDividendModules = 'EnableDividendModules',
  ReclaimFunds = 'ReclaimFunds',
  ReserveSecurityToken = 'ReserveSecurityToken',
  WithdrawTaxes = 'WithdrawTaxes',
}
