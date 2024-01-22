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
        console.log(ul)
        ul.insertBefore(new_li, ul.firstChild);
      }

      // BINDING TRACKER TO SCROLL

      // initially get height of one SVG element and set it as total for path length calculation
     maxYPos = svgRef.clientHeight;
      //maxYPos = (document.getElementById('path').getTotalLength() / 2);
      console.log(maxYPos);

      // get scrolled distance and add to tracker position on path
      var differenceY = this.scrollTop - scrollPosPrev;
      scrollPosPrev = this.scrollTop;
      yPos = yPos + differenceY;
      console.log("differenceY: " + differenceY);

      yPos = yPos * 1; // coficient for faster or slower movement on line
      const percentage = (yPos / maxYPos) * 100;
      currentBall.style.offsetDistance = (percentage * 1) + "%";

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
        currentBall.style.display = "none";
        currentBall = trackerRef[SVGtracker - 1];
        currentBall.style.display = "block";
      }

      // check if tracker is at upper end of SVG
      if (d < 0 && SVGtracker >= 2 && differenceY < 0) {
        yPos = svgRef.clientHeight;
        SVGtracker--;
        console.log(SVGtracker);
        currentBall.style.display = "none";
        currentBall = trackerRef[SVGtracker - 1];
        currentBall.style.display = "block";
      }
    });
  });
  return (
    <div>
      <h1 className="title">Returning to the Hold</h1>
      <div className="block" id="container">
        <div className="ul" data-current="0">
          <div className="li">
            <div className="trackerRef"></div>
            <svg width="2000px" height="8500px" version="1.1" id="line">
              <path d="M629.4,99.9c10.2,39.9,52.3,58.6,90,60.7c34,1.8,68.1-3.7,101.9,1.5c46.1,7.1,78.7,35.9,103.1,74.5
c29.1,46.1,40,112,89.3,142.1c40.6,24.7,106.2,17.6,134.8,61.3c5.4,8.2,7.6,18.5,9.6,28c1,5.1,2.2,10.2,2.2,15.4
c0,0.5-1.7,9-2.7,3c-3.9-22.5,31.7-44.2,50.2-39.8c27.2,6.6,48.5,40,56.1,64.6c12.5,40.3-3.9,101-43.3,121.7
c-32.5,17.1-68.8-16.6-69.9-49.4c-0.7-20,25-48.5,42.1-25.7c10.6,14.2-6.3,34.6-21.4,38.4c-39.1,9.8,2.2-55.2,12.8-34.6
c2,3.8-7.7,22.6-9.2,26.6c-6.6,17.6-14,36.3-26.1,51.1c-19.8,24.2-46.2,37.9-77.5,39c-32.5,1.1-59.2-6.2-88.2,12.4
c-30.6,19.6-46.2,51.3-65.6,80.5c-15,22.6-30.4,46.6-50,65.6c-3.4,3.3-8.1,9-12.8,9.9c-15.1,2.8-18-24.1-17.6-33.1
c0.3-5.4,3.8-14.8-2.3-18.1c-0.1-0.1-0.3-0.1-0.5,0.1c-9.2,9.2,8.2,26,12.9,8.4c6.1-23-24.9-27.8-33.3-8.9
c-9.3,21.1,11.3,54.5,34.6,38.7c21.9-14.9,21.5-32.6,13.2-55.4c-28.8-78.9-114.7,31.8-135.7,65.4c-6.3,10.1-11.8,20.7-18.7,30.4
c-5,7.1-13.6,21.3-22.4,24.8c-0.8,0.4-1.6,0.8-2.5,1.2c-6.2,4.1-9.1-0.6-8.5-14.1c7-0.9,18,12.4,19.5,17.7
c2.6,9.3,0.5,19.8-2,28.9c-5.7,20.6-19.4,38.7-32.1,55.5c-8.8,11.6-20.6,24.1-21.8,39.3c-2,25.6,35.8,40.4,56.6,41.1
c49.3,1.5,83.3-46.3,112.6-78.7c41.2-45.4,91.3-98.6,153.9-111.4c56.3-11.5,125.9,19.9,125.9,83.9c0,13.6-2.3,30.6-9.1,42.9
c-8.4,15.5-32.1,23.9-47.3,31.3c-10.4,5.1-27.1,8.9-33.3,19.4c-7.1,12-5.8,33.3-6.5,46.5c-3,56.8-4.5,113.1-9.3,169.8
c-1,11.2-1.3,22.3-1.3,33.5c0,14.2-5.1,25.4-6.8,38.6c-1.4,11.1,7.2,20.6,7.7,31.6c0.7,14.5-8.5,27.6-12.6,40.9
c-3.8,12.5,1.3,25.8,4.6,38.3c3.8,14.5,33.2,46.2,20.4,57.9c-7.7,6.9-17.9,7.2-24.3,16.8c-9.5,14.2-7,33.6-3.8,49.3
c7.3,36.2,25.8,68.8,37.2,103.7c15.7,48.6,16.9,98.7,16,149.3c-2.9,162.3,1.2,324.8,3.9,487.1c0.6,35.4,0.1,70.9,3.2,106.1
c3.5,40.8,8,81.6,15.5,121.9c9.5,50.7,38.4,100.6,15.2,151.7c-7.9,17.3-11.7,33.2-12.1,52.5c-0.5,24.6,10.4,49.9,5.5,73.8
c-5.5,26.9-20.6,53.4-39,73.6c-7.9,8.7-17.1,16.4-27.6,21.7c-9.1,4.6-21.8,7.4-28.3,16.2c-5.7,7.8-2.8,12.9-0.1,21.2
c10.5,32.3-28.2,24.2-47.8,17.6c-46.9-15.7-97.8-19.3-146.9-20c-62.8-0.8-125.9,17.4-187.9,3.7c-40.7-8.9-74.3-35.1-115.8-38.3
c-38.8-3-77,3.3-115.6,2.9c-47-0.5-96.5-31.8-119.1-72.2c-12.4-22.2-22.7-46.5-43.7-62.4c-5.2-4-15.2-11.2-22.2-6.8
c-9.2,5.6-3.7,23.2-1.3,30.6c6,18.8,17.4,31.3,30.4,45.3c21.7,23.2-11.7,43.5-19.3,66.8c-7,21.4-3.5,43.7,2.6,64.8
c10.9,37.8,20.1,69.7,9.1,109.5c-7,25.3-20.6,47.5-29.8,71.8c-6.8,17.9-11.5,36.7-15.5,55.4c-7.8,37.1-12.7,75.2-14.2,113.1
c-0.3,6.5-4.9,49.8,5.4,52.6c10.9,3,20.2-44.2,21.3-48.1c7.6-27.3,14.7-54.8,22.1-82.2c4.1-15.1,7.7-31.6,15.3-45.5
c16.7-30.7,75.1-44.7,95.3-11.9c15.4,25.1,18.5,62.1,23.5,90.7c4.4,24.7,11.2,53.8,6.6,79.1c-2.1,11.6-2,18.2,4,29.4
c3.8,7.1,13.7,23.9,23.5,24c19.2,0.2,6.2-50.6,4.5-61c-7.3-44-17.7-87.4-26.1-131.2c-2.4-12.7-7.4-28.2-5-41.2
c2.1-12,9.8-24.3,15.4-34.9c7.4-14.2,15.6-29.4,26.6-41.2c19.6-21.2,25.5,3,25.8,22.3c0.8,53-7.9,106.9-14.7,159.4
c-1.5,11.9-3.6,24.1-3.3,36.2c0.3,11,3.6,21.4,3.8,32.5c0.4,25.3-3.9,51.4-10.1,75.8c-2.9,11.6-10.8,23.2-11.3,35.1
c-0.5,11.7,9.7,36.3,23.7,37.4c24,1.8,23.7-55.2,24.3-67.9c3.1-64.7-9-128-14-192.3c-2-25.4-3-52.4,5.2-76.9
c4.2-12.4,11.8-27.3,23.1-34.6c15.9-10.4,27,2.4,31.8,17.3c14.9,46.6-28.6,76.6-28.5,122.2c0,44.9,37.6,72,55.6,110.3
c8.9,19,17.2,39.4,20.9,60.1c1.6,9.2,1.6,22.3-11.2,15.1c-10.5-5.9-13.1-25.5-13.8-36c-2.6-40.4,12.4-80.5,24.2-118.4
c8.1-25.9,15.3-52.2,22.3-78.4c4.6-17.2,9.1-34.4,12.9-51.7c2.3-10.3,6.9-23.2,5.9-33.9c-1.2-12.7-6.1-6-11.1,2.9
c-20.9,37.1-5.5,84.6,7.6,121.6c7.9,22.3,5.5,46.7,5.8,70.3c0.3,19.6,0.4,39.2-0.1,58.8c-0.3,12.3,2.4,36.1-4.3,46.9
c-6.3,10.3-12.6,0.3-12.3-9.4c0.4-13.7,7.5-28.3,13.4-40.2c11.7-23.6,29-44,37.9-69c8.1-22.7,11.4-46.8,13.6-70.7
c1.7-18.9-0.8-42.4,5.2-60.6c3.5-10.6,14.3-21,21.7-29.3c3.1-3.5,9.3-12.1,14.1-12.7c15.5-1.9,6.3,30,4.9,37
c-10.5,51-34.4,99-41.8,150.6c-4.3,30.2,3.3,55.3,36.9,58.3c41.7,3.8,78.1-8.8,112.3-31.1c9.8-6.4,18.8-7.8,30.7-7.5
c7.6,0.2,18.1,0.4,24.3,5.5c14.7,12.4-7.2,32-16.1,40.8c-21.3,21.2-44.1,48.1-73.5,57.9c-22.2,7.4-43-1.8-65.1,1.2
c-33.4,4.6-60.6,33.3-80.1,58.5c-45,58.5-83.8,144.6-48.2,217.3c1.9,3.9,4.7,6.6,7.1,10.2c11.8,17.7,17.6,39.7,35.4,52.8
c13.5,9.9,26,10.1,36-4.1c9.3-13.2,14.2-32.7,0.9-44.4c-0.1-0.1-0.3-0.2-0.5-0.1c-8.9,6.1-12.6,15.8-16.4,25.7
c-1.8,4.8-3.5,9.5-5.6,14.2c-6.2,13.8-4.1,10.5-23.5,14.4c-19.1,3.8-17.3,6.6-26.5-6c-5-6.8-8.7-14.2-10.7-22.4
c-1.1-4.6-3.4-18.4-0.8-23.9c11.1-0.5,22.2-1,33.3-1.5c0.5,2.4,0.9,4.8,1.4,7.2c3.6,9.8,5.3,20.3,8.9,30.2
c3.9,10.7,8.6,25,19.5,30.7c38,20,73.8-84.5,26-93.3c-30.6-5.6-34,32.7-43.3,51.4c-0.7,2.3-1.4,4.6-2,6.8
c-22.8,14.6-35.1,14.8-37,0.8c-3.6-8-5.9-15.6,4.8-14.5c9.6,1,6.9,2.3,7.4,11.3c0.3,4.7,0.2,9.4,0.7,14.1
c1.1,10.4,3.9,21.1,10.5,29.5c19.1,24.2,50.7,8.7,68.8-8.1c19.5-18.1,26.4-54.9,18.3-79.9c-7.9-24.5-37.3-24.5-57.1-14.5
c-8.6,4.3-15.7,11.6-19.2,20.6c-2.1,5.4-2.3,10.1-2.4,15.6c-0.1,6.7,2,14.1,0.7,20.6c-3,7.7-5.9,15.3-8.9,23
c-5.9,7.6-13.6,9.9-23.1,7c-15.9,0-21.8-2.4-29.2-17.6c-2.8-5.7-3.8-10.7-4.6-17c-0.8-6.3-0.8-11.7,0.2-18
c3.1-20,3.9-17.7,25.9-20.7c23.6-3.2,23.5-6.1,29.9,18.1c2.3,8.7,2.3,18,3,27c0.7,9,1,18.1,2.7,27c5.4,27.5,30.7,40.4,57.9,37.9
c26.3-2.5,50-23.8,54.5-50.1c2.6-15.1-4.9-31.6-22.6-26.7c-11.5,3.2-19.7,15.5-26.5,24.3c-14.7,19.2-26.2,42.1-47.1,55.6
c-4.1,2.6-17.2,9.6-0.2,0.2c10.2-5.6,8.2-3.8,16.7,1.7c6.7,4.3,13.6,8,21.2,10.6c13.6,4.5,28.2,5.9,42.1,2
c20.1-5.6,44-25.9,37.6-49.4c-5.8-21.3-30.4-13.8-43.1-3.6c-15.4,12.2-25.3,29.2-37.6,44.2c-7.9,9.6-18.6,16-17,30
c1.3,11.9,10.2,18,20.4,22.6c16.6,7.6,32.5,13.5,35.6,33.4c3.1,20.3,1.2,41.9,3.8,62.4c1.6,13,2.5,29.7,12.5,39.3
c14.2,13.6,31,18.2,40.3,37.7c15.3,32-1.5,64.6,3.2,97.6c3.2,22.5,15.3,41,29.2,58.4c6.4,8.1,13.9,15.9,18.6,25.3
c8.1,16.4,1.4,32.6-6.9,47.9c-23.8,43.9-68.1,41.4-107,20.1c-12.9-7-32.4-18.7-35.3-34.6c-3.5-19.3,38.7-47.4,47.6-25.3
c7.6,18.8-16.4,51.8-28.3,64.1c-22.4,22.9-57.3,16.9-86.8,14.6c-22-1.7-43.9-4.9-65.7-8.6c-12.8-2.2-25-4.1-37.5,0.4
c-18.2,6.6-30.5,23-38.3,40.1c-9.7,21.2-22.9,64.7-5.4,84.5c12.9,14.6,45.1,4.9,61.3,1.3c9.3-2.1,18.3-5.2,25.6-11.5
c14.2-12.2,22-36.6,43.7-38.7c21.4-2.1,23.7,21.9,22.8,34.9c-0.5,3.1-1,6.3-1.4,9.4c1-1.2,2-2.5,2.9-3.7c2.3,2.2,4.7,4.4,7,6.5
c8.6,7.7,16.2,13.4,27.9,15.2c24,3.7,54.5,8,74.6-7.6c5.8-4.5,18.8-11,9.6-15.3c-12.2-5.8-24.9,17-25.7,25.5
c-1.4,14.6,9.2,17.1,21.3,13.5c0.5-0.1,0.3-0.9-0.2-0.7c-19.5,5.8-23.5-13.1-15.7-25.4c2.4-3.9,15-19.1,20.7-6.8
c0.3,0.5-5.9,4.9-6.6,5.6c-17.9,17.9-44.3,13-67.2,11.2c-16.2-1.3-26.1-5.1-38.1-15.7c-3.8-3.3-8.3-9.5-13.6-11
c-6.3-1.8-12.8-0.3-15.9,6.3c-6.5,13.9,11.8,18,18.3,6.7c7.7-13.5,5.1-48.6-14.4-50c-10.8-0.8-22.1,7.4-29.5,14.3
c-7,6.6-11,15.1-17.6,22.1c-9,9.5-21.3,13.3-33.7,15.5c-20.3,3.6-53.9,12.4-60.8-14c-3.7-14.1-1.1-30.5,1.9-44.4
c5.3-23.9,16.8-51,39.1-63.4c23.2-12.9,51.4-2.4,75.9,0.9c21,2.8,42,4.8,63.2,5.2c28.1,0.6,45.5,0.5,64-22
c10.8-13,27.9-38.4,23.9-56.8c-5.7-26.2-72.5,6-38.9,40.5c19.5,20,56.8,38,85.2,34.3c29.3-3.8,48.8-31,56.6-57.7
c6.1-20.8-5.7-34.4-18.2-50c-10.5-13.2-20.8-26.5-26.7-42.5c-8.3-22.5-3.9-43.2-1.6-66.1c2.7-26.4-1.9-52.8-22.4-71.1
c-6.3-5.6-13.7-9.2-20.3-14.2c-11.2-8.4-13.1-19.7-15.3-33.1c-3.8-23.7,0.2-50.1-5-73.2c-2.5-11.1-9.6-23.7-19.8-28.9
c-16.7-8.5-51.8,2-28.6-43.7c4.5-8.9,16-19.5,22.3-27.7c8.3-11,19.4-27,32.5-32.7c28.5-12.6,37.7,5.6,34,23.2
c-2.5,11.7-12.2,21.6-21.9,27.6c-15,9.3-33.6,10.7-50.4,6.4c-16.3-4.3-27.3-15.7-42.4-21.7c-9.2-3.7-22.8-5.3-28.5,5.4
c-2.6,5-3.2,10,2.2,12.7c8.2,4.1,27.5-10.8,32.4-14.9c18.1-15,29.1-37.1,43.6-55.2c3.8-4.8,11.3-15.8,17.2-17.1
c4.5,1.8,9,3.5,13.5,5.3c14.3,0.7,18.5,7.8,12.6,21.5c-3.6,15.9-15.1,30.4-29.1,38.6c-15.2,9-33.4,10-50,4.9
c-30.2-9.3-32.1-35.3-33.9-61.2c-1.2-16.1-0.7-35.9-12.5-48.4c-8.8-9.4-23.1-12.1-34.1-4.4c-22,15.5-18.3,58.7-1.2,75.9
c18.3,18.3,47.5,7.5,53.7-16.5c4.2-16.3-4.1-33.7,5-49.3c9.2-15.7,35.3-26.2,53.2-20.2c24.9,8.3,22.4,35.5,20.5,54.9
c-2.2,23.5-13.3,40.7-32.8,53.5c-23.4,15.4-53,10.3-61.9-17.2c-4.1-12.7-2.6-26.2-4.3-39.3c-0.6-4.9-0.7-17.5-9.2-14.9
c-15.3,4.8-3.5,45.8,11.7,48.2c12.9,2.1,19.4-9.5,23.1-19.6c4.9-13.3,6.1-27.9,14.2-40c5.8-8.6,12.6-17.9,25.2-18.1
c29.2-0.4,28.3,34.2,24.5,51.1c-5,21.8-27.3,57.3-53.2,32.3c-9.1-8.8-12.7-25.7-16.2-37.8c-3.4-11.7-3.4-35-20.3-36.7
c-29.6-3.1-19.3,45.9-11.5,59.2c17.5,29.8,41.8,27,55.1-3.3c2.4-5.5,10.8-33.6,14.6-32.9c6.6,1.2,12.5,19.7,11.5,24.7
c-3.1,16.4-18.3,27-35.9,19.1c-21.6-9.6-29.8-40.1-41.7-58.5c-10.4-15.9-13.6-34.8-17.1-53.8c-12.3-66.7,34-146.9,79.2-192.8
c11.2-11.4,23.9-22.1,38.5-29c17.9-8.5,32.8-6.6,51.8-4.8c33.7,3.2,58-13.1,81.8-35.2c11.3-10.5,56.8-42.2,47.6-63.1
c-5.9-13.4-31.9-11.6-43.1-10c-15.3,2.1-26.3,14.1-39.7,21.1c-18.1,9.5-38.1,14.6-58.5,16.4c-20.6,1.8-50.8,4.5-63.2-16.4
c-18-30.2,5.5-81.9,15-111.7c6.4-20,13-39.9,18.3-60.3c3.2-12.5,12.9-38.1,7.9-51.7c-7.7-21-41.9,26.2-45.5,37
c-3.4,9.9-2.6,22.5-3.3,32.8c-1.3,20.7-2.6,41.4-6.2,61.8c-3.5,19.8-8.7,39.8-18.4,57.6c-10.9,20-24.8,37.8-33.8,58.9
c-2.4,5.7-17.9,43.1-2,45.9c9.2,1.6,8.9-14.4,9.7-20.7c3.3-27.5,2.5-55.8,2.2-83.5c-0.2-20.2,1.2-41.6-1-61.7
c-2.4-22-14.8-43.6-19.1-65.7c-4.4-23-5.9-48.7,5.1-70.2c5-9.7,11.9-16.5,10.8-1.8c-3.8,48.6-22.6,98.7-36.3,145.2
c-13.4,45.5-37.9,98.4-26.9,146.6c1.4,6.2,12.8,35.2,23.8,27.3c9.2-6.6-3.6-38-5.8-44.6c-8.9-26.7-20.9-54.7-38.5-76.8
c-15.1-19-28.6-34.5-30.9-60.1c-2.1-24,4.8-47.8,18.2-67.5c13.8-20.3,18.4-45.1,8.1-68.7c-6.1-14-17.1-22-31-12.7
c-23.8,15.8-29.2,51.6-29.8,77.6c-1.2,44.5,7.7,89.1,11.9,133.3c2.5,25.8,4.1,51.6,3.7,77.5c-0.3,22.8,0.9,52.6-10.6,73.3
c-14.6,26.1-37.2-8.8-36.3-26.4c0.4-9,7-19.2,9.5-28c4.7-16.2,7.6-33,9.7-49.7c1.8-14.7,3.7-30.6,1.6-45.4
c-1.1-7.7-3.1-14.6-3.1-22.4c-0.3-68.3,24.6-136.5,17.4-205.3c-5-47.1-37.3,1.9-47.2,19.3c-7.9,13.8-19.2,31.1-21.7,47.3
c-3.1,20.2,6.2,45.7,10.3,65.2c7.3,35.4,15.2,70.7,21.1,106.4c2.3,13.7,5.1,28,5,42c-0.1,13.2-8.4,21.9-19.8,10.8
c-6.1-5.9-10.9-13.6-14.3-21.3c-5.2-11.9-1.5-20.2-0.7-32.2c1.1-16.2-1.6-33-3.9-48.9c-3.2-21.8-7.4-43.4-12.1-64.9
c-3.9-17.5-6.7-38-18.1-52.6c-23.6-30.3-80.2-11.7-95.2,19.4c-10.9,22.7-15.5,49.1-21.9,73.3c-6,22.6-11.8,45.4-18.6,67.8
c-1.3,4.4-7.1,30.6-13.6,31c-19.1,1.3,3.2-144.4,5.3-155.5c5.8-29.8,13.6-58.7,27-86c15.5-31.6,28.9-66.3,25.7-102.2
c-2.1-23.4-11.9-45.2-17.3-67.9c-7.1-29.8-3.4-56.5,15.3-81.2c5.6-7.4,14.2-15.9,13.1-26.1c-0.9-8.4-9.1-14.3-14.5-19.9
c-11.3-11.7-38.3-46.1-27.6-64.3c19.2-32.6,71.6,70.6,80.4,81.4c20.2,25.2,49.7,42.5,80.8,50.7c21.6,5.7,41.7,3.1,63.7,1.9
c34-1.9,73.3-6,106.4,3.6c13.9,4,26.5,13.3,39.8,18.9c18.9,7.9,38.7,13.8,58.9,17.3c45.2,8,87.5-2.5,132.4-4.9
c46.4-2.5,93.6-0.6,139.6,6.6c16.4,2.6,32.7,5.9,48.6,11.2c13,4.3,30.4,12.7,44.5,7.7c11.5-4.1,11.8-14,8.4-24.1
c-8.7-26,13.1-29,31.7-39.5c12.2-6.9,22.3-17.4,30.9-28.2c17.2-21.9,36.2-55,33.5-84c-2-20.8-7.9-40.2-6.8-61.6
c1.1-19.7,6.9-33.3,14-51c14.4-36,3.9-69-7.2-104.2c-18.2-57.5-23.5-122-27-182c-4.8-83.1-3.1-167.1-4.2-250.3
c-0.9-70.2-1.7-140.4-2-210.6c-0.2-59.3,3.8-119.7,0-178.8c-2.2-34.2-8.7-67.6-20.6-99.8c-9.6-26-22.2-50.9-29.4-77.8
c-5.2-19.3-11.3-47,3.6-63.8c6.6-7.4,19-8.1,24.9-14.8c3.2-3.6,3.3-3.9,2.7-8.7c-0.7-5.6-7.4-12.2-10.4-16.5
c-7.5-10.9-13.2-21.6-16.6-34.6c-3.7-14-7.3-25.4-2.3-38.9c4.9-13.3,12.8-27.1,10.5-41.7c-2.1-13.5-8.5-17.3-5.4-32.4
c1.2-5.6,3.5-10.7,4.3-16.5c2.8-20.5,1.2-42.1,3.1-62.8c4.2-44.8,6-89.1,7.2-134c0.5-18.9,0.6-38.4,4.1-57
c3.3-17.6,14.2-20.8,29.3-28.1c18-8.7,45.7-17.3,55.1-36.5c7.9-16,10.1-37.2,7.5-54.7c-10.3-69.5-96.9-86.4-152.4-63.2
c-42.1,17.6-77.1,49.9-108.3,82.4c-31.9,33.1-61.4,81.1-107.3,95.7c-27.6,8.8-90.7-4.5-78-45.4c3.9-12.4,14-22.9,21.7-33.2
c9.8-13.1,19.6-26.4,26-41.6c5.3-12.5,16.5-56-6.8-59.9c-9.6-1.6-18.3,10-9.3,16.6c20.5,14.9,55.4-58.2,66.5-73.1
c11.5-15.5,24-30.5,37.8-44c14.7-14.4,42.7-42.4,65.6-31.1c21.6,10.7,32.3,51.4,17.2,69.9c-5.1,6.3-14.9,17.2-23.8,15.7
c-17.5-3.1-28.5-31.2-19.1-45.6c6.6-10.1,25-13.6,28.8,0.5c0.7,1.8,1.3,3.6,2,5.3c-8.3,1.6-11.8,6.3-10.2,14
c-0.4,1.5-1.1,3.8-1.1,5.3c0.1,12,5.8,35,21.1,29.1c18.2-7.1,33.8-35.5,44.7-50.7c10.9-15.3,21.8-31,31.5-47.2
c11.3-19,23.6-36.6,41.1-50.5c16.4-13,35.2-20.9,56.3-21.1c20.5-0.2,40.1,3.9,60.6,0c23-4.4,43.8-19.1,58.5-37.1
c10-12.2,16.5-27.3,22.4-41.8c3-7.4,16.2-30.7,13.4-38.7c-5.2-14.8-26.4,12.3-29.1,17.1c-9.2,16.8,2.4,26.7,19.6,18.7
c13.6-6.4,31.1-27.1,16.1-40.8c-16-14.5-37.1,2.2-41.1,19.1c-10.6,44.1,44.9,82.7,80.4,53c51.9-43.6,48.6-129.7-4.2-170.1
c-17-13-33.6-15.1-51.6-1.4c-3.4,2.6-29.6,30.2-16.6,35.1c5.5,2.1-6.1-44-5.9-43.5c-10.9-24.2-40.3-35.9-63.9-43.5
c-26.1-8.5-53.2-11-77-26.2c-31.8-20.3-44.8-55.4-59.6-88.3c-16.3-36.4-36.1-74.8-67.9-100.2c-26-20.7-57.5-28.2-90.1-29.1
c-56-1.5-145.5,13.3-164.2-59.4C630,99.3,629.3,99.5,629.4,99.9L629.4,99.9z"                id="path"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
