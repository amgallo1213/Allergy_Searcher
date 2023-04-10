import React from 'react';
import SearchBar from '../components/SearchBar';
import MenuData from '../Data.json';


const Main = () => {


    return ( 
        <div>
            <SearchBar placeholder="Enter Menu Item" data={MenuData}/>
        </div>
     );
}
 
export default Main;