import React from 'react';
import MenuItem from '../components/MenuItem';
// import SearchBar from '../components/SearchBar';
import MenuData from '../Data.json';


const Main = (data) => {


    return ( 
        <div>
            {/* <SearchBar placeholder="Enter Menu Item" data={MenuData}/> */}
            <MenuItem data={MenuData}/>
        </div>
     );
}
 
export default Main;