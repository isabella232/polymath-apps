import React, { FC, Fragment, ReactNode } from 'react';
import Select, { components } from 'react-select';
import { IndicatorComponentType } from 'react-select/lib/components';
import { intersectionWith, filter, includes } from 'lodash';
import { ReactComponent as SvgCaretDown } from '~/images/icons/caret-down.svg';
import { ReactComponent as SvgClose } from '~/images/icons/close.svg';
import { ReactComponent as SvgEth } from '~/images/icons/eth.svg';
import { ReactComponent as SvgPolyB } from '~/images/icons/poly-b.svg';
import { ReactComponent as SvgDai } from '~/images/icons/dai.svg';
// import { ReactComponent as SvgEth } from '~/images/icons/eth.svg';
// import { ReactComponent as SvgPolyB } from '~/images/icons/poly-b.svg';
// import { ReactComponent as SvgDai } from '~/images/icons/dai.svg';
import { IndicatorProps } from 'react-select/lib/components/indicators';
import styled, { withTheme, ThemeInterface } from '~/styles';
import { Label } from './Label';
import { Box } from '~/components/Box';
import { Icon } from '~/components/Icon';
import { InputProps } from '~/components/inputs/types';
import { types } from '@polymathnetwork/new-shared';

interface OptionType {
  value: types.Tokens;
  label: ReactNode;
}

export const CURRENCY_OPTIONS: OptionType[] = [
  {
    value: types.Tokens.Ether,
    label: <Label text="Ethereum (ETH)" Asset={SvgEth} />,
  },
  {
    value: types.Tokens.Poly,
    label: <Label text="Polymath (POLY)" Asset={SvgPolyB} />,
  },
  {
    value: types.Tokens.Dai,
    label: <Label text="Dai (DAI)" Asset={SvgDai} />,
  },
];

interface SelectProps extends InputProps {
  options: types.Tokens[];
  theme: ThemeInterface;
  value: types.Tokens | types.Tokens[];
}

const getStyles = (theme: ThemeInterface) => ({
  container: (styles: any) => ({
    ...styles,
    borderRadius: 0,
  }),
  control: (styles: any) => {
    return {
      ...styles,
      backgroundColor: theme.inputs.backgroundColor,
      borderRadius: 0,
      borderColor: 'transparent',
      '&:hover': {
        borderColor: 'transparent',
      },
      minHeight: theme.inputs.height,
    };
  },
  valueContainer: () => ({
    position: 'absolute',
    visibility: 'hidden',
    zIndex: -1,
    pointerEvents: 'none',
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    flexGrow: 1,
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: theme.colors.baseText,
    fontSize: theme.fontSizes[1],
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.space[3],
  }),
  clearIndicator: (styles: any) => ({
    ...styles,
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: '10px',
    fontSize: theme.fontSizes[0],
    alignItems: 'center',
    padding: '3px 5px 3px 7px',
    marginLeft: theme.space[3],
    justifyContent: 'space-between',
    minWidth: '32px',
  }),
});

const SelectWrapper = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  min-width: 200px;
  margin-right: ${({ theme }) => theme.space[4]};
`;

const Caret = styled(Icon)`
  color: ${({ theme }) => theme.colors.secondary};
`;

interface CustomIndicatorProps extends IndicatorProps<OptionType> {
  selectProps: SelectProps;
}
const DropdownIndicator: FC<CustomIndicatorProps> = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Fragment>
          {props.selectProps.placeholder}
          <Caret Asset={SvgCaretDown} width={10} height={10} />
        </Fragment>
      </components.DropdownIndicator>
    )
  );
};

const ClearIndicator: FC<CustomIndicatorProps> = props => {
  return (
    components.ClearIndicator && (
      <components.ClearIndicator {...props}>
        <Fragment>
          {props.selectProps.value.length}
          <Icon Asset={SvgClose} width={8} height={10} />
        </Fragment>
      </components.ClearIndicator>
    )
  );
};

class InputComponent extends React.Component<SelectProps> {
  public static defaultProps = {
    options: CURRENCY_OPTIONS.map(option => option.value),
  };

  public handleRemove = (removedValue: string) => {
    const { value, onChange } = this.props;
    const newValue = Array.isArray(value)
      ? value.filter(val => val !== removedValue)
      : null;

    onChange(newValue);
  };

  public handleChange = (value: OptionType | OptionType[]) => {
    const { onChange } = this.props;

    return onChange(
      Array.isArray(value) ? value.map(option => option.value) : value.value
    );
  };

  public render() {
    const { value, options, onChange, onBlur, theme, ...props } = this.props;

    const filteredOptions = intersectionWith(
      CURRENCY_OPTIONS,
      options,
      (currency, symbol) => {
        return currency.value === symbol;
      }
    );

    const valueIsArray = Array.isArray(value);
    let arrayValue: types.Tokens[];

    if (!Array.isArray(value)) {
      arrayValue = [value];
    } else {
      arrayValue = value;
    }

    const selectedValues = filter(filteredOptions, ({ value: currencyType }) =>
      includes(arrayValue, currencyType)
    );

    return (
      <div>
        <SelectWrapper>
          <Select
            closeMenuOnSelect={false}
            noOptionsMessage={() => null}
            // TODO @RafaelVidaurre: Confirm isClearable should be used in this way
            isClearable={valueIsArray}
            isMulti={valueIsArray}
            styles={getStyles(theme)}
            components={{
              DropdownIndicator,
              ClearIndicator,
              IndicatorSeparator: null,
            }}
            options={filteredOptions}
            value={selectedValues}
            onChange={this.handleChange}
            onMenuClose={onBlur}
            {...props}
          />
        </SelectWrapper>
        {arrayValue.map(value => {
          const option = filteredOptions.find(option => option.value === value);
          return option ? (
            <Value
              value={option.value}
              key={value}
              label={option.label}
              onRemove={this.handleRemove}
            />
          ) : null;
        })}
      </div>
    );
  }
}

export const Input = withTheme(InputComponent);
