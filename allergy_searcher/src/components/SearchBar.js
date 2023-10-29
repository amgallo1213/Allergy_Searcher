import React, { useState } from 'react';
// import { Link } from '@reach/router';

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
            // return value.allergens.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };


    return (
        <div>
            <div className='search'>
                <div className='searchInputs'>
                    <input
                        type='text'
                        placeholder={placeholder}
                        onChange={handleFilter}
                    />
                </div>
                {filteredData.length !== 0 && (
                    <div className='dataResult'>
                        {filteredData.slice(0, 15).map((value, key) => {
                            return (
                                <div>
                                    <p to='/home' className='hoverResult'> {value.name}</p>
                                </div>       
                            );
                        })}
                    </div>
                )} 
            </div>

            {
                filteredData.map((value, key) => (
                    <div className="card">
                    <div className="banner">
                        <div className="itemName">
                            <h3>{value.name}</h3>
                            <h4>{value.allergens}</h4>
                        </div>
                    </div>
                    <div className="allergenList">
                    </div>
                </div>
                ))
            }


        </div>
    );
}

export default SearchBar;



// <div className="card">
// <div className="banner">
//     <div className="itemName">
//         <h3>{value.name}</h3>
//         <h4>{value.allergens}</h4>
//     </div>
// </div>
// <div className="allergenList">
// </div>
// </div>