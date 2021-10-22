import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContextProvider';
import '../App.css'


export default function SearchInput() {

  const { searchValue, setSearchValue, getJobList } = useContext(UserContext)


  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      getJobList()
    }
  }

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Enter something and press enter"
      />
    </div>
  )
}
