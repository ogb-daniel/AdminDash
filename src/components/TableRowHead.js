import React from 'react';

export default function TableRowHead() {
    return (

    <thead  className='table_row_head '>

   <tr>
   <th className='p-4'><input type="checkbox" /></th>
        <th className='p-4'>NAME</th>
        <th className='p-4'>USER STATUS</th>
        <th className='p-4'>PAYMENT STATUS</th>
        <th className='p-4 text-right'>AMOUNT</th>

       </tr>
    </thead>

    
    )
}