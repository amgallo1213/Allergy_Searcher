import React, { useState } from "react";

const MenuItem = (filteredData) => {

    const [menuItems, setMenuItems] = useState([]);

    return (
        <div>
            <div className="card">
                <div className="banner">
                    <div className="itemName">
                        <h3>{menuItems.name}</h3>
                        <h4>Allergens</h4>
                    </div>
                </div>
                <div className="allergenList">
                </div>
            </div>
        </div>
    );
}

export default MenuItem;


<div className="card">
                                    <div className="banner">
                                        <div className="itemName">
                                            <h3>{value.name}</h3>
                                            <h4>Allergens</h4>
                                            <div className="allergenList">
                                                <p>{value.allergens}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>