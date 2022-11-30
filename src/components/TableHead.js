import React, { useEffect, useState } from 'react';
import vector from '../Vector.png';
import search from '../Search.png';
export default function TableHead({users,setFilteredUsers}) {
    const [searchValue, setSearchValue] = useState('');

    const handleChange =(e)=>{
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        const newUsers = users.filter((user)=>{
            if(user.firstName.toLowerCase().includes(searchValue.toLowerCase()) || user.lastName.toLowerCase().includes(searchValue.toLowerCase()) || user.email.includes(searchValue) || user.lastLogin.includes(searchValue)){
                return user
            }
        });
        setFilteredUsers(newUsers);
    }, [searchValue,users,setFilteredUsers])
    
    return(
        <div className='flex justify-between p-4'>
            <div className='flex'>
                <button className='filter_btn font-normal'> <span className='mr-2'><img src={vector} className="w-5 h-5 inline" alt="filter" /></span> Filter</button>
                <span className='flex ml-3'>

                <span className='search_icon'><img className='mt-2 mr-3 ml-3' src={search} alt="search" /></span> 
                <input className='search' placeholder="Search Users by Name, Email or Date" type="text" value={searchValue} onChange={handleChange}/>
                </span>
            </div>
            <button className='pay_btn font-semibold'>PAY DUES</button>
        </div>
    )
}