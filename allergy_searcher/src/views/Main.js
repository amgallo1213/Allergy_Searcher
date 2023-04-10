import React from 'react';
import MenuItem from '../components/MenuItem';
import SearchBar from '../components/SearchBar';
import MenuData from '../Data.json';


const Main = () => {


    return ( 
        <div>
            <SearchBar placeholder="Enter Menu Item" data={MenuData}/>
            <MenuItem />
        </div>
     );
}
 
export default Main;