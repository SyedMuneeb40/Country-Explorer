import React, { useState } from "react";

const SearchPg = ({ Fetch })=>{
    const [input,setInput] = useState("");

    let searchHandler = (input) => {
        console.log(input);
        Fetch(input);
    };

    return(

        <div className="serachPg">
            <input value={input} onChange={(e)=> {setInput(e.target.value)}} type="text" placeholder="Enter Country Name" />
            <button onClick={()=>{searchHandler(input)}}>Search</button>
        </div>
    );
};


export default SearchPg;
