import React from 'react'

export default function Search() {
    return (
        <div className='w-full pt-4 flex justify-center content-center'>
            <input type="search" name="searchbar" id="searchbar" />
            <button type="button">Search</button>
        </div>
    )
}
