import { Procedure } from './Procedure';
import { TaxWithholding } from '~/types';
import { types } from '@polymathnetwork/new-shared';

interface Args {
  symbol: string;
  maturityDate: Date;
  expiryDate: Date;
  erc20Address: string;
  amount: number;
  checkpointId: number;
  name: string;
  excludedAddresses?: string[];
  taxWithholdings?: TaxWithholding[];
}

export class CreateErc20DividendDistribution extends Procedure<Args> {
  public type = types.ProcedureTypes.CreateErc20DividendDistribution;
  public async prepareTransactions() {
    const {
      symbol,
      maturityDate,
      expiryDate,
      erc20Address,
      amount,
      checkpointId,
      name,
      excludedAddresses,
      taxWithholdings = [],
    } = this.args;
    const { securityTokenRegistry } = this.context;

    const securityToken = await securityTokenRegistry.getSecurityToken(symbol);
    const erc20Module = await securityToken.getErc20DividendModule();

    if (!erc20Module) {
      throw new Error(
        "Dividend modules haven't been enabled. Did you forget to call .enableDividendModules()?"
      );
    }

    await this.addTransaction(erc20Module.createDividend, {
      tag: types.PolyTransactionTags.CreateErc20DividendDistribution,
    })(
      maturityDate,
      expiryDate,
      erc20Address,
      amount,
      checkpointId,
      name,
      excludedAddresses
    );

    if (taxWithholdings.length > 0) {
      const investorAddresses: string[] = [];
      const percentages: number[] = [];

      taxWithholdings.forEach(({ address, percentage }) => {
        investorAddresses.push(address);
        percentages.push(percentage);
      });

      await this.addTransaction(erc20Module.setWithholding, {
        tag: types.PolyTransactionTags.SetErc20TaxWithholding,
      })(investorAddresses, percentages);
    }
  }
}
