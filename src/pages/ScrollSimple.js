import React, { useEffect, useState, useRef } from "react";
import ListElement from "../components/ListElement";
import LandingTitle from "../components/LandingTitle";
import TextCanvas from "../components/TextCanvas";

export default function ScrollSimple() {
  const wrapperRef = useRef();
  const listRef = useRef();
  const listElementRef = useRef();

  const [scrollPos, setScrollPos] = useState();
  const [addedElement, setAddedElement] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    wrapperRef.current.addEventListener("scroll", function () {
      setScrollPos(wrapperRef.current.scrollTop);
      addNewListElements();
    });
  });

  function addNewListElements() {
    const max_scroll =
      wrapperRef.current.scrollHeight - listRef.current.clientHeight;
    const current_scroll = wrapperRef.current.scrollTop;
    const bottom = 100;

    // add SVG elements at bottom of list
    if (current_scroll + bottom >= max_scroll) {
      var new_li = listElementRef.current.cloneNode(true);
      listRef.current.appendChild(new_li);
      listRef.current.removeChild(listRef.current.firstChild);
      setCounter(counter + 1);
      setAddedElement((addedElement) => !addedElement); // notify tracker of added element
    }

    // add SVG elements at top of list
    if (current_scroll - bottom <= 0) {
      new_li = listElementRef.current.cloneNode(true);
      listRef.current.insertBefore(new_li, listRef.current.firstChild);
      listRef.current.removeChild(listRef.current.lastChild);
      setCounter(counter - 1);
      //setAddedElement(addedElement => !addedElement); // notify tracker of added element
    }
  }

  return (
    <div>
      <div className="counter">{counter}</div>
      <div className="wrapper" ref={wrapperRef}>
        <div ref={listRef} className="list">
          {/* <TextCanvas /> */}
          <ListElement />
          <ListElement
            ref={listElementRef}
            scrollPos={scrollPos}
            addedElement={addedElement}
          />
        </div>
      </div>
    </div>
  );
}
