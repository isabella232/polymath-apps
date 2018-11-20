// @flow

import React from 'react';

import Page from '../Page';
import Grid from '../Grid';

const PageCentered = ({ children, ...props }) => (
  <Page as={Grid} p={2} alignItems="center" justifyContent="center" {...props}>
    {children}
  </Page>
);

export default PageCentered;
