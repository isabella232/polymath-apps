import React, { FC, useState, Fragment } from 'react';
import { uniqueId } from 'lodash';
import { InlineFlex } from '~/components/InlineFlex';
import { SvgCheckmark } from '~/images/icons/Checkmark';
import { FormikProxy, EnhancedComponentProps } from '../FormikProxy';
import * as sc from './styles';
import { Label } from './Label';

interface Props {
  onChange: (e: boolean) => void;
  /**
   * Specify whether the toggle should be on by default
   */
  defaultChecked?: boolean;
  /**
   * Specify whether the control is checked
   */
  checked?: boolean;
  name?: React.AllHTMLAttributes<HTMLInputElement>['name'];
  label?: React.ComponentType | string;
}

export const CheckboxPrimitive: FC<Props> = ({
  name,
  defaultChecked,
  checked,
  onChange,
  label,
  ...other
}) => {
  const [id] = useState(uniqueId());
  let checkedProps;

  if (typeof checked !== 'undefined') {
    checkedProps = { checked };
  } else {
    checkedProps = { defaultChecked };
  }

  return (
    <Fragment>
      <InlineFlex>
        <sc.Input
          {...other}
          {...checkedProps}
          type="checkbox"
          id={name || id}
          name={name || id}
          onChange={e => {
            onChange(e.currentTarget.checked);
          }}
        />
        <sc.CheckboxInput htmlFor={name || id}>
          <sc.CheckIcon
            Asset={SvgCheckmark}
            color="white"
            width="0.85em"
            height="0.85em"
          />
        </sc.CheckboxInput>
        {label && (
          <InlineFlex ml={2}>
            <Label htmlFor={name || id}>{label}</Label>
          </InlineFlex>
        )}
      </InlineFlex>
    </Fragment>
  );
};

const EnhancedCheckbox: FC<EnhancedComponentProps<boolean>> = ({
  field,
  form,
  onChange,
  ...rest
}) => (
  <FormikProxy<boolean>
    field={field}
    form={form}
    onChange={onChange}
    render={formikProps => <CheckboxPrimitive {...rest} {...formikProps} />}
  />
);

export const Checkbox = EnhancedCheckbox;
