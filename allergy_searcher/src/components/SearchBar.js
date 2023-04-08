import React, { useState } from 'react';


function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);


    

    return ( 
        <div className='search'>
            <div className='searchInputs'>
                <input 
                type='text'
                placeholder={placeholder}
                />
                <div className='searchIcon'><i class="bi bi-search"></i></div>
            </div>
            <div className='dataResult'>
                {data.map((value, key) => {
                    return <div><p className='hoverResult'>{value.name}</p></div>
                })}
            </div>
            


        </div>
    );
}
 
export default SearchBar;



