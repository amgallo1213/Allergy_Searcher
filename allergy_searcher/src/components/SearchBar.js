import React, { useState } from 'react';
import { Link } from '@reach/router';

function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase()); 
            // return value.allergens.toLowerCase().includes(searchWord.toLowerCase()); 
        });

        if (searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    };
    

    return ( 
        <div className='search'>
            <div className='searchInputs'>
                <input 
                type='text'
                placeholder={placeholder}
                onChange={handleFilter}
                />
                <div className='searchIcon'><i class="bi bi-search"></i></div>
            </div>
            {filteredData.length !== 0 && (
                <div className='dataResult'>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                        <div>
                            <Link to='/home' className='hoverResult'> {value.name}</Link>
                            {/* <p className='hoverResult'>{value.name}</p> */}
                        </div>
                        );
                    })}
                </div>
        )}


        </div>
    );
}
 
export default SearchBar;



