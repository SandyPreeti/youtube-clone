import React, { useState } from 'react';
import './SearchBar.css';
import {FaSearch} from 'react-icons/fa';
import{BsMicFill} from 'react-icons/bs';
import SearchList from './SearchList';

function SearchBar() {

  const [searchQuery, setSearchQuery]= useState('');
  const [searchListA, setSearchList] =useState(false);
  const TitleArray=["video1","video2","Animation","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
   <>
   <div className="SearchBar_container">
    <div className="SearchBar_container2">
        <div className="search_div">
        <input type='text' className='iBox_SearchBar' placeholder='Search.....' 
        onChange={e=>setSearchQuery(e.target.value)}
        value={searchQuery}
        onClick={e=> setSearchList(true)}
        />
           <FaSearch className='searchIcon_SearchBar'
           onClick={e=>setSearchList(false)}/>
           <BsMicFill className='Mic_SearchBar'/>
           {
            searchQuery&& searchListA&&
           <SearchList setSearchQuery={setSearchQuery}
           TitleArray={TitleArray}
           />

           }
        </div>
    </div>
   </div>
   
   </>
  )
}

export default SearchBar
