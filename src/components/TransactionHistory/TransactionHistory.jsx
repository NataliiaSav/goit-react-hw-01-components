import React from 'react';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (<TransactionTable>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
  
  </tbody>
    </TransactionTable>
    );
}; 
  

  
</table>