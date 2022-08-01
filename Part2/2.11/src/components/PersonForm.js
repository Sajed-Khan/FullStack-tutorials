import React from "react";

const PersonForm= ({addName, newName, handleAddName, number, handleAddNumber})=>(
    <form onSubmit={addName}>
        <div>
            name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
            number: <input value={number} onChange={handleAddNumber} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

export default PersonForm