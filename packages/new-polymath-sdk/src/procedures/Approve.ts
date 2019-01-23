import BigNumber from 'bignumber.js';
import { Procedure } from './Procedure';
import { types } from '@polymathnetwork/new-shared';

interface Args {
  amount: BigNumber;
  spender: string;
}

export class Approve extends Procedure<Args> {
  public async prepareTransactions() {
    const { amount, spender } = this.args;
    const { currentWallet, polyToken, isTestnet } = this.context;

    const allowance = await currentWallet.getAllowance(spender);
    const hasEnoughAllowance = allowance.gte(amount);

    if (hasEnoughAllowance) {
      return;
    }

    const balance = await currentWallet.getBalance(types.Tokens.Poly);

    if (balance.lt(amount)) {
      if (isTestnet) {
        await this.addTransaction(polyToken.getTokens, {
          tag: types.PolyTransactionTags.GetTokens,
        })(amount, currentWallet.address);
      } else {
        throw new Error('Not enough balance');
      }
    }
    await this.addTransaction(polyToken.approve, {
      tag: types.PolyTransactionTags.Approve,
    })(spender, amount);
  }
}
