import React, { useState } from 'react';
import toDollar from '../toDollar';
 
export default function TableRowItem({user}) {
    // const [showMore, setShowMore] = useState(false);
    let showMore = false;
    let payStatStyle = {container:'',circle:''};

    if(user.paymentStatus === 'unpaid'){
        payStatStyle.container = 'unpaid_container';
        payStatStyle.circle = "orange_circle"
    }else if(user.paymentStatus === 'paid'){
        payStatStyle.container = 'paid_container';
        payStatStyle.circle = 'green_circle';
    }else{
        payStatStyle.container = 'overdue_container';
        payStatStyle.circle = 'red_circle';
    }

    let payStat;

    if(user.paymentStatus === 'paid'){
        payStat =  <p>Paid on {user.paidOn}</p>
    }else if(user.paymentStatus === 'unpaid'){
        payStat =  <p>Dues on </p>
    }else{
        payStat =  <p>Overdue on</p>
    }

    const showDetails =(e)=>{
        showMore = !showMore
        console.log(e);
        if(showMore){
            e.target.children[0].classList.add('open')
            e.target.children[1].classList.add('open')
        }else{
            e.target.children[0].classList.remove('open')
            e.target.children[1].classList.remove('open')
        }
        
    }

    return(
       
<tbody className=' table_row_item '>
    
  <tr >
  <td className='p-4 '>
  <div className='flex '>
  <input type="checkbox" />
   <div className='w-4 inline-flex items-center h-4 border-2 arrow rounded-full ml-5 hover:cursor-pointer' onClick={showDetails}>
    <div className='line line1'></div>
    <div className='line line2'></div>
  </div>
  </div>
  </td>
  <td className='p-4'><p>{user.firstName} {user.lastName}</p><p className='email'>{user.email}</p></td>
       <td className='p-4'><div className='flex items-center p-2 active_container w-fit'>
        <span className='inline-block mr-2 w-2 h-2 active_circle rounded-full'></span>
        <p className={`${user.userStatus === 'active' ? 'active_color last_log' : "last_log"} capitalize`}>{user.userStatus}</p>
        </div>
       <p className='last_log'>Last login: {user.lastLogin}</p>
       </td>
       <td className='p-4'>
       <div className={`flex items-center p-2 ${payStatStyle.container} w-fit last_log`}>
       <span className={`inline-block mr-2 w-2 h-2 ${payStatStyle.circle} rounded-full`}></span>
       <p className='capitalize'>{user.paymentStatus}</p>
       </div>
       {payStat}
       </td>
       <td className='p-4 text-right'><p>${toDollar(user.amountInCents)}</p><p className='usd'>USD</p></td>
        
      </tr>
{/* 
<tr className='table_row_head'>

     <td className='p-4'>DATE</td>
     <td className='p-4'>USER ACTIVITY</td>
     <td className='p-4'>DETAIL</td>

    </tr> */}

</tbody>
   
    )
}