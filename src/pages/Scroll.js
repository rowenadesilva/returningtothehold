import React, { useState, useEffect, useRef } from "react";
import ArchiveCard from "../components/ArchiveCard";
import LandingTitle from "../components/LandingTitle";
import Annotation from "../components/Annotation";
import { ReactComponent as SVG } from "../assets/Line3text.svg";

export default function ScrollSimple() {
  var yPos = 0;
  var SVGtracker = 1;
  var maxYPos = 0;
  var scrollPosPrev = 0; //  checking down or upwards scroll
  var currentBall = null;
  var prevYPos = 0;
  var prevWidth = 0;
  var addFirst = true;

  const [archiveDisplay, setArchiveDisplay] = useState();

  useEffect(() => {
    const divRef = document.getElementById("container");
    divRef.scrollTop = 1;
    const trackerRef = document.getElementsByClassName("trackerRef");
    currentBall = document.getElementsByClassName("trackerRef")[0];
    const container = document.getElementsByClassName("respContainer");
    const svg = document.getElementsByClassName("line")[0];

    // RESIZE
    const resize = () => {
      var width = parseInt(getComputedStyle(svg).width, 10);

      //resize all dynamically added containers
      for (var i = 0; i < container.length; i++) {
        container[i].style.transform = "scale(" + width / 1406 + ")";
      }

      // update Y Position
      divRef.scrollTop += prevWidth - width;
      prevWidth = width;
    };
    window.addEventListener("resize", resize);
    resize();

    // INFINITE SCROLL
    divRef.addEventListener("scroll", function () {
      addNewSVG(this); // dynamically adds new SVGs for infinite scroll
      updateTrackerPos(this); // updates tracker position with scroll
      checkEnd(this); // checks if tracker is at SVG end or beginning
      showCards();
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
      if (addFirst === true || current_scroll - bottom <= 0) {
        var ul = document.getElementsByClassName("ul")[0];
        var li = document.getElementsByClassName("li")[0];
        var new_li = li.cloneNode(true);
        ul.insertBefore(new_li, ul.firstChild);
        addFirst = false;
      }
    };

    const updateTrackerPos = (context) => {
      console.log(context.scrollTop);
      // initially get height of one SVG element and set it as total for path length calculation
      maxYPos = svg.clientHeight;

      // get scrolled distance and add to tracker position on path
      var differenceY = context.scrollTop - scrollPosPrev;
      yPos = yPos + differenceY;

      // speed tracker up / slow down when getting close to screen edge
      yPos = keepInWindow(yPos, context);
      prevYPos = yPos;

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
        yPos = svg.clientHeight;
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
      const speed = 8;

      // if tracker is in upper third
      if (window.innerHeight / 3 >= yScreenPos) {
        // SCROLLING DOWN
        if (scrollPosPrev < context.scrollTop) {
          console.log("speed up!");
          yPos = yPos + speed; // speed up

          // if tracker outside window speed even more up
          if (yScreenPos <= 0) {
            yPos = yPos + speed;
          }
        } // SCROLLING UP
        else if (scrollPosPrev > context.scrollTop) {
          console.log("slow down1!");
          yPos = prevYPos - 1; // slow down

          // if tracker outside window slow even more down
          if (yScreenPos <= 0) {
            yPos = yPos + speed;
          }
        }

        // if tracker is in lower third
      } else if (
        window.innerHeight - window.innerHeight / 3 <=
        currentBall.getBoundingClientRect().top
      ) {
        // SCROLLING DOWN
        if (scrollPosPrev < context.scrollTop) {
          console.log("slow down2!");
          yPos = prevYPos + 1; // slow down

          // if tracker outside window slow even more down
          if (currentBall.getBoundingClientRect().top >= window.innerHeight) {
            yPos = yPos - speed;
          }
        } // SCROLLING UP
        else if (scrollPosPrev > context.scrollTop) {
          console.log("speed up!");
          yPos = yPos - speed; // speed up

          // if tracker outside window speed even more up
          if (currentBall.getBoundingClientRect().top >= window.innerHeight) {
            yPos = yPos - speed;
          }
        }
      }
      return yPos;
    };

    function showCards() {
      var d = currentBall.style.offsetDistance;
      d = d.slice(0, -1);
      d = parseFloat(d);

      if (d > 50 && d < 80) {
        console.log("Show");
        //setArchiveDisplay("block");
      } else {
        // setArchiveDisplay("none");
      }
    }
  });

  return (
    <div>
      <ArchiveCard id="archive" show={archiveDisplay} />
      <div className="block" id="container">
        <div className="ul" data-current="0">
          <LandingTitle />
          <div className="li">
            <div className="respContainer">
              <div className="trackerRef"></div>
              <Annotation />
            </div>
            <SVG className="line" />
          </div>
        </div>
      </div>
    </div>
  );
}
