import React, { useState } from 'react';

const SearchBar = (MenuItem) => {

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
        {name: "salsa Mexicana", allergens: "onion, cilantro, soy, citrus, nightshade, alcohol" }
    ]

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        menuItems.filter((item) => {
            return item.name.match(searchInput);
        });
    }

    return ( 
        <div>
            
        </div>
     );
}
 
export default SearchBar;



