import React, { useState } from 'react';
import toDollar from '../toDollar';

export default function ContainerHead(props){
  const [tab,setTab] = useState('All');
    const handleTabClick = (e)=>{
        setTab(e.target.textContent);
        if(tab === e.target.textContent){
          return
        }

        if(e.target.textContent === 'All'){
          props.setUsers(props.users);
          return;
        }

        const result = props.users.filter(user => user.paymentStatus === e.target.textContent.toLowerCase());
        props.setUsers(result)

    }
    return (
        <div className='container_head'>
                 <h1 className='table-head'>TABLE HEADING</h1>
      <div className='payment_status'>
        <ul className='tab'>
          <li className={`tab_item hover:cursor-pointer ${tab === 'All' ? 'tab_item_border' : ""}`} onClick={handleTabClick}>All</li>
          <li className={`tab_item hover:cursor-pointer ${tab === 'Paid' ? 'tab_item_border' : ""}`}  onClick={handleTabClick}>Paid</li>
          <li className={`tab_item hover:cursor-pointer ${tab === 'Unpaid' ? 'tab_item_border' : ""}`}  onClick={handleTabClick}>Unpaid</li>
          <li className={`tab_item hover:cursor-pointer ${tab === 'Overdue' ? 'tab_item_border' : ""}`}  onClick={handleTabClick}>Overdue</li>
        </ul>

        <span>Total payable amount: <span className='totalAmount font-bold'>${toDollar(props.totalPayAmount)}</span> USD</span>
      </div>
        </div>
    )
}