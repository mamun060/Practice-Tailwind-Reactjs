import React from 'react';
import { useState } from 'react';
import mockData from '../Data/MOCK_DATA.json'

const Search = () => {
    const [searchItem, setSearchItem] = useState('');

  return (
<>
    <div className=' mr-auto shadow-sm p-50 bg-red-400 flex justify-center items-center'>
        <input onChange={(event) => {
            setSearchItem(event.target.value)
        }} placeholder='Search....'  className=' w:[full] p-5 border-solid bg-black text-center text-white '/>
    </div>
        <div>
            {
                mockData.filter((val) => {
                    if(searchItem == ""){
                        return val
                    } else if(val.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
                        return val
                    }
                }).map((value)=>(
                    <div key={value.id}>
                        <p className=' flex justify-center align-middle text-black'>{value.name}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Search