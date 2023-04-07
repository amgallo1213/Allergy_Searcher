import React, { useState } from 'react';


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

        const menuItems = [
            {name: "salsa verde", allergens: "garlic, onion, cilantro" },
            {name: "salsa roja", allergens: "garlic, onion, cilantro, soy" },
            {name: "El Vez Guac", allergens: "garlic, onion, cilantro, soy, citrus, nightshade" },
            {name: "Speciality Guac Base", allergens: "citrus" },
            {name: "De La Hoya", allergens: "garlic, onion, soy, citrus" },
            {name: "Indian Red Lopez", allergens: "gluten, bivalves, shellfish, onion, cilantro" },
            {name: "Bazooka Limon", allergens: "garlic, onion, dairy, tree nuts, nightshades" },
            {name: "Tito Santana", allergens: "garlic, onion, cilantro, mango, bell pepper" },
            {name: "salsa Mexicana", allergens: "onion, cilantro, soy, citrus, nightshade, alcohol" },
            {name: "Melted Manchego", allergens: "dairy, onion, soy" },
            {name: "Nacho Mamma", allergens: "garlic, onion, soy, cilantro, dairy, nightshade, citrus" },
            {name: "Macho Nachos", allergens: "garlic, onion, soy, cilantro, diary, nightshade, citrus" },
        ]

        const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
        };

        if (menuItems.length > 0) {
            menuItems.filter((item) => {
                return item.name.match(searchInput);
            });


    }

    return ( 
        <div>
            
            <input
                type="search"
                onChange={handleChange}
                value={searchInput} />

            {menuItems.map((item, index) => (


                <div>
                    <h3>{item.name}</h3>
                    <p>{item.allergens}</p>
                </div>


            ))}


        </div>
    );
}
 
export default SearchBar;



