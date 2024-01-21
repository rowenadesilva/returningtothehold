import React, { createRef, useRef, useEffect } from "react";
import "../App.css";

export default function Loop() {
  useEffect(() => {
    // it's a div, that holds your news
    // it holds ul with news in li elements
    const divRef = document.getElementById("container");
    console.log(divRef);
    divRef.addEventListener("scroll", function () {
      var max_scroll = this.scrollHeight - this.clientHeight;
      var current_scroll = this.scrollTop;
      var bottom = 100;
      if (current_scroll + bottom >= max_scroll) {
        var ul = document.getElementsByClassName("ul")[0];
        var current = parseInt(ul.dataset.current, 10);
        var li = document.getElementsByClassName("li")[current];
        var new_li = li.cloneNode(true);
        ul.appendChild(new_li);
        ul.dataset.current = current + 1;
      }
    });
  });

  return (
    <div className="block" id="container">
   
      <div className="ul" data-current="0">
        <div className="li">   <svg>
        <path
          d="M79.5,1C25.3,95.7-23.2,220.2,16.6,336.5c61.4,179.6,282.6,190.7,295.2,321C327.2,817.7,1.4,894.4,6.9,1076.8 c4.4,147.1,218.4,166.7,230.6,332.2c11.5,155.3-170.4,224.8-174.2,435.5c-1.5,81.1,24.1,147.7,45.2,190.3"
        />
      </svg></div>
      </div>
    </div>
  );
}
