import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
function Search(props) {
  function searchTheImage(e){
    e.preventDefault();
    props.setprevSearch(props.searchTerm)
    let result=e.target.children[1].value;
    props.searchVal(result)    
  }
  return (
    <div class="section">
      <form action="" onSubmit={searchTheImage}>
        <i class="uil uil-search"></i>
        <input type="text" placeholder="Search Images" id="search-img"  />
        <button class="search">Search</button>
      </form>
      <h1 class="title">FLASH0GRAPHY</h1>
    </div>
  );
}

export default Search;