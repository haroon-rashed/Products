import React, { useState } from 'react'

const ReadMore = ({ description, wordLimit = 4 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    // Split the description into words
    const words = description.split(" ");
  
    return (
      <p>
        {isExpanded ? description : words.slice(0, wordLimit).join(" ") + "... "}
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          style={{ color: "blue", border: "none", background: "none", cursor: "pointer", marginLeft: "5px" }}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </p>
    );
  };
  
export default ReadMore
