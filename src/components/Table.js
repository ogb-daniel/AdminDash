import React, { useEffect, useState } from 'react';

import TableHead from './TableHead';
import TableRowHead from './TableRowHead';
import TableRowItem from './TableRowItem';

export default function Table({users,setFilteredUsers,ogUsers}){
  
    
    return(
        <div className='table'>
            <TableHead setFilteredUsers={setFilteredUsers} users={ogUsers} />
            <table className='w-full text-left'>
            <TableRowHead />
            {
                users.map((user)=>(
                    <TableRowItem key={user.id} user={user}/>
                ))
            }
   
            </table>
     
        </div>
    )
}