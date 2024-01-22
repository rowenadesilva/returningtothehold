import React from "react";
import { useEffect } from "react";
import warnMixin from "tar/lib/warn-mixin";

export default function ScrollSimple() {
  var yPos = 0;
  var SVGtracker = 1;
  var maxYPos = 0;
  var scrollPosPrev = 0; //  checking down or upwards scroll 
  var currentBall = null;

  useEffect(() => {
    const divRef = document.getElementById("container");
    const trackerRef = document.getElementsByClassName("trackerRef");
    const svgRef = document.getElementById("line");
    currentBall = document.getElementsByClassName("trackerRef")[0];

    // INFINITE SCROLL
    divRef.addEventListener("scroll", function () {
      addNewSVG(this); // dynamically adds new SVGs for infinite scroll
      updateTrackerPos(this); // updates tracker position with scroll
      checkEnd(this); // checks if tracker is at SVG end or beginning
      scrollPosPrev = this.scrollTop; // reset scroll direction check
    });

    const addNewSVG = (context) => {
      var max_scroll = context.scrollHeight - context.clientHeight;
      var current_scroll = context.scrollTop;
      var bottom = 100;

      // add SVG elements at bottom of list
      if (current_scroll + bottom >= max_scroll) {
        var ul = document.getElementsByClassName("ul")[0];
        var li = document.getElementsByClassName("li")[0];
        var new_li = li.cloneNode(true);
        ul.appendChild(new_li);
      }

      // add SVG elements at top of list
      if (current_scroll - bottom <= 0) {
        var ul = document.getElementsByClassName("ul")[0];
        var li = document.getElementsByClassName("li")[0];
        var new_li = li.cloneNode(true);
        console.log(ul);
        ul.insertBefore(new_li, ul.firstChild);
      }
    };

    const updateTrackerPos = (context) => {
      // initially get height of one SVG element and set it as total for path length calculation
      maxYPos = svgRef.clientHeight;

      // get scrolled distance and add to tracker position on path
      var differenceY = context.scrollTop - scrollPosPrev;
      yPos = yPos + differenceY;

      yPos = keepInWindow(yPos, context);

      const percentage = (yPos / maxYPos) * 100;
      currentBall.style.offsetDistance = percentage + "%";
    };

    const checkEnd = (context) => {
      var differenceY = context.scrollTop - scrollPosPrev;

      // get relative tracker position on line as float
      var d = currentBall.style.offsetDistance;
      d = d.slice(0, -1);
      d = parseFloat(d);

      // check if tracker is at lower end of SVG
      if (d >= 100 && differenceY > 0) {
        yPos = 0;
        SVGtracker++;
        // console.log(SVGtracker);
        currentBall.style.display = "none";
        currentBall = trackerRef[SVGtracker - 1];
        currentBall.style.display = "block";
      }

      // check if tracker is at upper end of SVG
      if (d < 0 && SVGtracker >= 2 && differenceY < 0) {
        yPos = svgRef.clientHeight;
        SVGtracker--;
        // console.log(SVGtracker);
        currentBall.style.display = "none";
        currentBall = trackerRef[SVGtracker - 1];
        currentBall.style.display = "block";
      }
    };

    const keepInWindow = (yPos, context) => {
      // keep tracker on screen by speeding up or slowing down
      const yScreenPos = currentBall.getBoundingClientRect().top;

      // if tracker is in upper third
      if (window.innerHeight / 3 >= yScreenPos) {
        // SCROLLING DOWN
        if (scrollPosPrev < context.scrollTop) {
          yPos = yPos + 10; // speed up

          // if tracker outside window speed even more up
          if (yScreenPos <= 0) {
            yPos = yPos + 10;
          }
        } // SCROLLING UP
        else if (scrollPosPrev > context.scrollTop) {
          yPos = yPos + 10; // slow down

          // if tracker outside window slow even more down
          if (yScreenPos <= 0) {
            yPos = yPos + 10;
          }
        }

        // if tracker is in lower third
      } else if (
        window.innerHeight - window.innerHeight / 3 <=
          currentBall.getBoundingClientRect().top &&
        yPos > 10
      ) {
        // SCROLLING DOWN
        if (scrollPosPrev < context.scrollTop) {
          yPos = yPos - 10; // slow down

          // if tracker outside window slow even more down
          if (currentBall.getBoundingClientRect().top >= window.innerHeight) {
            yPos = yPos - 10;
          }
        } // SCROLLING UP
        else if (scrollPosPrev > context.scrollTop) {
          yPos = yPos - 10; // speed up

          // if tracker outside window speed even more up
          if (currentBall.getBoundingClientRect().top >= window.innerHeight) {
            yPos = yPos - 10;
          }
        }
      }
      return yPos;
    };
  });
  return (
    <div>
      <h1 className="title">Returning to the Hold</h1>
      <div className="block" id="container">
        <div className="ul" data-current="0">
          <div className="li">
            <div className="trackerRef"></div>
            <svg width="1406px" height="4618.7px" version="1.1" id="line">
              <path
                d="M756,112.9c19.5-5.8,23.5,13.1,15.7,25.4c-2.4,3.9-15,19.1-20.7,6.8c-0.3-0.5,5.9-4.9,6.6-5.6
                c17.9-17.9,44.3-13,67.2-11.2c16.2,1.3,26.1,5.1,38.1,15.7c3.8,3.3,8.3,9.5,13.6,11c6.3,1.8,12.8,0.3,15.9-6.3
                c6.5-13.9-11.8-18-18.3-6.7c-7.7,13.5-5.1,48.6,14.4,50c10.8,0.8,22.1-7.4,29.5-14.3c7-6.6,11-15.1,17.6-22.1
                c9-9.5,21.3-13.3,33.7-15.5c20.3-3.6,53.9-12.4,60.8,14c3.7,14.1,1.1,30.5-1.9,44.4c-5.3,23.9-16.8,51-39.1,63.4
                c-23.2,12.9-51.4,2.4-75.9-0.9c-21-2.8-42-4.8-63.2-5.2c-28.1-0.6-45.5-0.5-64,22c-10.8,13-27.9,38.4-23.9,56.8
                c5.7,26.2,72.5-6,38.9-40.5c-19.5-20-56.8-38-85.2-34.3c-29.3,3.8-48.8,31-56.6,57.7c-6.1,20.8,5.7,34.4,18.2,50
                c10.5,13.2,20.8,26.5,26.7,42.5c8.3,22.5,3.9,43.2,1.6,66.1c-2.7,26.4,1.9,52.8,22.4,71.1c6.3,5.6,13.7,9.2,20.3,14.2
                c11.2,8.4,13.1,19.7,15.3,33.1c3.8,23.7-0.2,50.1,5,73.2c2.5,11.1,9.6,23.7,19.8,28.9c16.7,8.5,51.8-2,28.6,43.7
                c-4.5,8.9-16,19.5-22.3,27.7c-8.3,11-19.4,27-32.5,32.7c-28.5,12.6-37.7-5.6-34-23.2c2.5-11.7,12.2-21.6,21.9-27.6
                c15-9.3,33.6-10.7,50.4-6.4c16.3,4.3,27.3,15.7,42.4,21.7c9.2,3.7,22.8,5.3,28.5-5.4c2.6-5,3.2-10-2.2-12.7
                c-8.2-4.1-27.5,10.8-32.4,14.9c-18.1,15-29.1,37.1-43.6,55.2c-3.8,4.8-11.3,15.8-17.2,17.1c-4.5-1.8-9-3.5-13.5-5.3
                c-14.3-0.7-18.5-7.8-12.6-21.5c3.6-15.9,15.1-30.4,29.1-38.6c15.2-9,33.4-10,50-4.9c30.2,9.3,32.1,35.3,33.9,61.2
                c1.2,16.1,0.7,35.9,12.5,48.4c8.8,9.4,23.1,12.1,34.1,4.4c22-15.5,18.3-58.7,1.2-75.9c-18.3-18.3-47.5-7.5-53.7,16.5
                c-4.2,16.3,4.1,33.7-5,49.3c-9.2,15.7-35.3,26.2-53.2,20.2c-24.9-8.3-22.4-35.5-20.5-54.9c2.2-23.5,13.3-40.7,32.8-53.5
                c23.4-15.4,53-10.3,61.9,17.2c4.1,12.7,2.6,26.2,4.3,39.3c0.6,4.9,0.7,17.5,9.2,14.9c15.3-4.8,3.5-45.8-11.7-48.2
                c-12.9-2.1-19.4,9.5-23.1,19.6c-4.9,13.3-6.1,27.9-14.2,40c-5.8,8.6-12.6,17.9-25.2,18.1c-29.2,0.4-28.3-34.2-24.5-51.1
                c5-21.8,27.3-57.3,53.2-32.3c9.1,8.8,12.7,25.7,16.2,37.8c3.4,11.7,3.4,35,20.3,36.7c29.6,3.1,19.3-45.9,11.5-59.2
                c-17.5-29.8-41.8-27-55.1,3.3c-2.4,5.5-10.8,33.6-14.6,32.9c-6.6-1.2-12.5-19.7-11.5-24.7c3.1-16.4,18.3-27,35.9-19.1
                c21.6,9.6,29.8,40.1,41.7,58.5c10.4,15.9,13.6,34.8,17.1,53.8c12.3,66.7-34,146.9-79.2,192.8c-11.2,11.4-23.9,22.1-38.5,29
                c-17.9,8.5-32.8,6.6-51.8,4.8c-33.7-3.2-58,13.1-81.8,35.2c-11.3,10.5-56.8,42.2-47.6,63.1c5.9,13.4,31.9,11.6,43.1,10
                c15.3-2.1,26.3-14.1,39.7-21.1c18.1-9.5,38.1-14.6,58.5-16.4c20.6-1.8,50.8-4.5,63.2,16.4c18,30.2-5.5,81.9-15,111.7
                c-6.4,20-13,39.9-18.3,60.3c-3.2,12.5-12.9,38.1-7.9,51.7c7.7,21,41.9-26.2,45.5-37c3.4-9.9,2.6-22.5,3.3-32.8
                c1.3-20.7,2.6-41.4,6.2-61.8c3.5-19.8,8.7-39.8,18.4-57.6c10.9-20,24.8-37.8,33.8-58.9c2.4-5.7,17.9-43.1,2-45.9
                c-9.2-1.6-8.9,14.4-9.7,20.7c-3.3,27.5-2.5,55.8-2.2,83.5c0.2,20.2-1.2,41.6,1,61.7c2.4,22,14.8,43.6,19.1,65.7
                c4.4,23,5.9,48.7-5.1,70.2c-5,9.7-11.9,16.5-10.8,1.8c3.8-48.6,22.6-98.7,36.3-145.2c13.4-45.5,37.9-98.4,26.9-146.6
                c-1.4-6.2-12.8-35.2-23.8-27.3c-9.2,6.6,3.6,38,5.8,44.6c8.9,26.7,20.9,54.7,38.5,76.8c15.1,19,28.6,34.5,30.9,60.1
                c2.1,24-4.8,47.8-18.2,67.5c-13.8,20.3-18.4,45.1-8.1,68.7c6.1,14,17.1,22,31,12.7c23.8-15.8,29.2-51.6,29.8-77.6
                c1.2-44.5-7.7-89.1-11.9-133.3c-2.5-25.8-4.1-51.6-3.7-77.5c0.3-22.8-0.9-52.6,10.6-73.3c14.6-26.1,37.2,8.8,36.3,26.4
                c-0.4,9-7,19.2-9.5,28c-4.7,16.2-7.6,33-9.7,49.7c-1.8,14.7-3.7,30.6-1.6,45.4c1.1,7.7,3.1,14.6,3.1,22.4
                c0.3,68.3-24.6,136.5-17.4,205.3c5,47.1,37.3-1.9,47.2-19.3c7.9-13.8,19.2-31.1,21.7-47.3c3.1-20.2-6.2-45.7-10.3-65.2
                c-7.3-35.4-15.2-70.7-21.1-106.4c-2.3-13.7-5.1-28-5-42c0.1-13.2,8.4-21.9,19.8-10.8c6.1,5.9,10.9,13.6,14.3,21.3
                c5.2,11.9,1.5,20.2,0.7,32.2c-1.1,16.2,1.6,33,3.9,48.9c3.2,21.8,7.4,43.4,12.1,64.9c3.9,17.5,6.7,38,18.1,52.6
                c23.6,30.3,80.2,11.7,95.2-19.4c10.9-22.7,15.5-49.1,21.9-73.3c6-22.6,11.8-45.4,18.6-67.8c1.3-4.4,7.1-30.6,13.6-31
                c19.1-1.3-3.2,144.4-5.3,155.5c-5.8,29.8-13.6,58.7-27,86c-15.5,31.6-28.9,66.3-25.7,102.2c2.1,23.4,11.9,45.2,17.3,67.9
                c7.1,29.8,3.4,56.5-15.3,81.2c-5.6,7.4-14.2,15.9-13.1,26.1c0.9,8.4,9.1,14.3,14.5,19.9c11.3,11.7,38.3,46.1,27.6,64.3
                c-19.2,32.6-71.6-70.6-80.4-81.4c-20.2-25.2-49.7-42.5-80.8-50.7c-21.6-5.7-41.7-3.1-63.7-1.9c-34,1.9-73.3,6-106.4-3.6
                c-13.9-4-26.5-13.3-39.8-18.9c-18.9-7.9-38.7-13.8-58.9-17.3c-45.2-8-87.5,2.5-132.4,4.9c-46.4,2.5-93.6,0.6-139.6-6.6
                c-16.4-2.6-32.7-5.9-48.6-11.2c-13-4.3-30.4-12.7-44.5-7.7c-11.5,4.1-11.8,14-8.4,24.1c8.7,26-13.1,29-31.7,39.5
                c-12.2,6.9-22.3,17.4-30.9,28.2c-17.2,21.9-36.2,55-33.5,84c2,20.8,7.9,40.2,6.8,61.6c-1.1,19.7-6.9,33.3-14,51
                c-14.4,36-3.9,69,7.2,104.2c18.2,57.5,23.5,122,27,182c4.8,83.1,3.1,167.1,4.2,250.3c0.9,70.2,1.7,140.4,2,210.6
                c0.2,59.3-3.8,119.7,0,178.8c2.2,34.2,8.7,67.6,20.6,99.8c9.6,26,22.2,50.9,29.4,77.8c5.2,19.3,11.3,47-3.6,63.8
                c-6.6,7.4-19,8.1-24.9,14.8c-3.2,3.6-3.3,3.9-2.7,8.7c0.7,5.6,7.4,12.2,10.4,16.5c7.5,10.9,13.2,21.6,16.6,34.6
                c3.7,14,7.3,25.4,2.3,38.9c-4.9,13.3-12.8,27.1-10.5,41.7c2.1,13.5,8.5,17.3,5.4,32.4c-1.2,5.6-3.5,10.7-4.3,16.5
                c-2.8,20.5-1.2,42.1-3.1,62.8c-4.2,44.8-6,89.1-7.2,134c-0.5,18.9-0.6,38.4-4.1,57c-3.3,17.6-14.2,20.8-29.3,28.1
                c-18,8.7-45.7,17.3-55.1,36.5c-7.9,16-10.1,37.2-7.5,54.7c10.3,69.5,96.9,86.4,152.4,63.2c42.1-17.6,77.1-49.9,108.3-82.4
                c31.9-33.1,61.4-81.1,107.3-95.7c27.6-8.8,90.7,4.5,78,45.4c-3.9,12.4-14,22.9-21.7,33.2c-9.8,13.1-19.6,26.4-26,41.6
                c-5.3,12.5-16.5,56,6.8,59.9c9.6,1.6,18.3-10,9.3-16.6c-20.5-14.9-55.4,58.2-66.5,73.1c-11.5,15.5-24,30.5-37.8,44
                c-14.7,14.4-42.7,42.4-65.6,31.1c-21.6-10.7-32.3-51.4-17.2-69.9c5.1-6.3,14.9-17.2,23.8-15.7c17.5,3.1,28.5,31.2,19.1,45.6
                c-6.6,10.1-25,13.6-28.8-0.5c-0.7-1.8-1.3-3.6-2-5.3c8.3-1.6,11.8-6.3,10.2-14c0.4-1.5,1.1-3.8,1.1-5.3c-0.1-12-5.8-35-21.1-29.1
                c-18.2,7.1-33.8,35.5-44.7,50.7c-10.9,15.3-21.8,31-31.5,47.2c-11.3,19-23.6,36.6-41.1,50.5c-16.4,13-35.2,20.9-56.3,21.1
                c-20.5,0.2-40.1-3.9-60.6,0c-23,4.4-43.8,19.1-58.5,37.1c-10,12.2-16.5,27.3-22.4,41.8c-3,7.4-16.2,30.7-13.4,38.7
                c5.2,14.8,26.4-12.3,29.1-17.1c9.2-16.8-2.4-26.7-19.6-18.7c-13.6,6.4-31.1,27.1-16.1,40.8c16,14.5,37.1-2.2,41.1-19.1
                c10.6-44.1-44.9-82.7-80.4-53c-51.9,43.6-48.6,129.7,4.2,170.1c17,13,33.6,15.1,51.6,1.4c3.4-2.6,29.6-30.2,16.6-35.1
                c-5.5-2.1,6.1,44,5.9,43.5c10.9,24.2,40.3,35.9,63.9,43.5c26.1,8.5,53.2,11,77,26.2c31.8,20.3,44.8,55.4,59.6,88.3
                c16.3,36.4,36.1,74.8,67.9,100.2c26,20.7,57.5,28.2,90.1,29.1c56,1.5,145.5-13.3,164.2,59.4"
                id="path"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
