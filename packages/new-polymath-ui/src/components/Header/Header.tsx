import React from 'react';
import BigNumber from 'bignumber.js';
import { Link } from 'react-router-dom';
import { formatters } from '@polymathnetwork/new-shared';

import * as S from './styles';

import { PageWrap } from '../PageWrap';
import { Flex } from '../Flex';
import { Block } from '../Block';

import polyLogo from '../../images/logo.svg';
import networkIcon from '../../images/icons/network.svg';
import polyIcon from '../../images/icons/poly.svg';
import accountIcon from '../../images/icons/account.svg';
import tokenIcon from '../../images/icons/token.svg';

export interface HeaderProps {
  network: string;
  account: string;
  balance?: BigNumber;
  isNotice: boolean;
  variant: 'default' | 'transparent';
  ticker?: string;
  logo?: string;
}

export const Header = (props: HeaderProps) => {
  const { balance, account, network, ticker, logo, variant } = props;
  return (
    <S.Wrapper className="pui-header" variant={variant}>
      <PageWrap>
        <S.Inner>
          <Link to="/">
            {logo ? (
              <Block as="img" src={logo} alt="Company Logo" width="188" />
            ) : (
              <Block as="img" src={polyLogo} alt="Polymath" width="188" />
            )}
          </Link>
          {account ? (
            <Flex as="ul" ml="auto" className="pui-header-menu">
              <li>
                <img
                  src={networkIcon}
                  alt="Active network"
                  style={{
                    marginRight: '2px',
                  }}
                />
                {network}
              </li>
              <li>
                {/*
                  NOTE @RafaelVidaurre: According to the typing this should be:

                  <PolyIcon alt="Your POLY balance" />
                */}
                <img src={polyIcon} alt="Your POLY balance" />
                {balance
                  ? formatters.thousandsDelimiter(
                      new BigNumber(balance).integerValue()
                    ) + ' POLY'
                  : '...'}
              </li>
              <li>
                <img src={accountIcon} alt="Account" />
                {formatters.toShortAddress(account)}
              </li>
              {ticker ? (
                <li>
                  <img src={tokenIcon} alt="Token" />
                  {ticker}
                </li>
              ) : (
                ''
              )}
            </Flex>
          ) : null}
        </S.Inner>
      </PageWrap>
    </S.Wrapper>
  );
};

Header.defaultProps = {
  variant: 'default',
};
