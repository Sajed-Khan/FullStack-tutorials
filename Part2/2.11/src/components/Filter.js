import React from 'react'

const Filter= ({filter, handleFilter})=>(
    <div>
        Filter shown with <input value={filter} onChange={handleFilter} />
    </div>
)

export default Filter