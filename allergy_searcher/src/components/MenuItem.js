import React, { useState } from "react";

const MenuItem = (props) => {

    const [menuItems, setMenuItems] = useState("");

    return ( 
        <div>
            <div className="card">
                <div className="banner">
                    <div className="itemName">
                        <h3>Tacos Arabes</h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MenuItem;