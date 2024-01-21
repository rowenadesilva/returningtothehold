import React from "react";
import { useEffect } from "react";

export default function ScrollSimple() {
  var yPos = 0;
  var SVGtracker = 1;
  var maxYPos = 0;
  var scrollPosPrev = 0;
  var currentBall = null;

  useEffect(() => {
    const divRef = document.getElementById("container");
    const trackerRef = document.getElementsByClassName("trackerRef");
    const svgRef = document.getElementById("line");
    currentBall = document.getElementsByClassName("trackerRef")[0];

    // INFINITE SCROLL
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

      // BINDING TRACKER TO SCROLL

      // initially get height of one SVG element and set it as total for path length calculation
      maxYPos = svgRef.clientHeight;

      // get scrolled distance and add to tracker position on path
      var differenceY = this.scrollTop - scrollPosPrev;
      scrollPosPrev = this.scrollTop;
      yPos = yPos + differenceY;
      console.log("differenceY: " + differenceY);

      yPos = yPos * 1; // coficient for faster or slower movement on line
      const percentage = (yPos / maxYPos) * 100;
      currentBall.style.offsetDistance = percentage + "%";

      // get relative tracker position on line as float
      var d = currentBall.style.offsetDistance;
      d = d.slice(0, -1);
      d = parseFloat(d);
      console.log("d: " + d);

      // check if tracker is at lower end of SVG
      if (d >= 100 && differenceY > 0) {
        yPos = 0;
        SVGtracker++;
        console.log(SVGtracker);
        currentBall = trackerRef[SVGtracker - 1];
      }

      // check if tracker is at upper end of SVG
      if (d < 0 && SVGtracker >= 2 && differenceY < 0) {
        yPos = svgRef.clientHeight;
        SVGtracker--;
        console.log(SVGtracker);
        currentBall = trackerRef[SVGtracker - 1];
      }
    });
  });
  return (
    <div>
      <div className="block" id="container">
        <div className="ul" data-current="0">
          <div className="li">
            <div className="trackerRef"></div>
            <svg width="300px" height="175px" version="1.1" id="line">
              <path
                d="M141.9,0c-19.8,33.3-42.6,84.5-30.4,139c12.4,55.4,50.3,66.7,53.6,117.6c3.8,60.4-48,70.5-53.5,138.1 c-5.6,68.9,46.4,80.1,47.6,157.3c1.1,74.2-46.8,80.9-46.3,154.7c0.5,75.1,50.3,95.7,48.3,166.6c-0.8,26-8.3,49.3-18.3,69.4 c0,0-43.5,84.5-31.3,139c12.4,55.4,50.3,66.7,53.6,117.6c3.8,60.4-48,70.5-53.5,138.1c-5.6,68.9,46.4,80.1,47.6,157.3 c1.1,74.2-46.8,80.9-46.3,154.7c0.5,75.1,50.3,95.7,48.3,166.6c-0.8,26-8.3,49.3-18.3,69.4c0,0-43.5,84.5-31.3,139 c12.4,55.4,50.3,66.7,53.6,117.6c3.8,60.4-48,70.5-53.5,138.1c-5.6,68.9,46.4,80.1,47.6,157.3c1.1,74.2-46.8,80.9-46.3,154.7 c0.5,75.1,50.3,95.7,48.3,166.6c-0.8,26-9.1,49.3-19.2,69.4"
                className="path"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
