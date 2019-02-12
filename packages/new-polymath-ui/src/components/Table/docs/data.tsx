import React, { Fragment } from 'react';
import { SvgDelete } from '~/images/icons/Delete';
import { IconButton } from '~/components/IconButton';
import { makeData } from './makeData';

export const data = makeData(1000);

export const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    minWidth: 140,
    maxWidth: 200,
  },
  {
    Header: 'Last Name',
    id: 'lastName',
    accessor: d => d.lastName,
    minWidth: 140,
    maxWidth: 200,
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 100,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    width: 100,
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 150,
    Cell: (row: any) => (
      <span>
        <span
          style={{
            color:
              row.value === 'relationship'
                ? '#ff2e00'
                : row.value === 'complicated'
                ? '#ffbf00'
                : '#57d500',
            transition: 'all .5s ease',
          }}
        >
          &#x25cf;
        </span>{' '}
        {row.value === 'relationship'
          ? 'Relationship'
          : row.value === 'complicated'
          ? `Complicated`
          : 'Single'}
      </span>
    ),
  },
  {
    accessor: 'actions',
    width: 50,
    Cell: () => (
      <Fragment>
        <IconButton
          Asset={SvgDelete}
          width="1.3em"
          height="1.3em"
          color="gray.2"
        />
        <IconButton
          Asset={SvgDelete}
          width="1.3em"
          height="1.3em"
          color="gray.2"
        />
      </Fragment>
    ),
  },
];
