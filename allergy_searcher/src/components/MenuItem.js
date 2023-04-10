import React, { useState } from "react";

const MenuItem = (props) => {

    const [menuItems, setMenuItems] = useState("");

    return ( 
        <div>
            <div className="card">
                <div className="banner">
                    <div className="itemName">
                        <h3>Tacos Arabes</h3>
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