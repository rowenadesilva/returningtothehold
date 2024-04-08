import React, { useEffect, useState, useRef } from "react";
import ListElement from "../components/ListElement";

export default function ScrollSimple() {
  const wrapperRef = useRef();
  const listRef = useRef();
  const listElementRef = useRef();

  const [scrollPos, setScrollPos] = useState();
  const [addedElement, setAddedElement] = useState(true);
  const [counter, setCounter] = useState(1);

  var elementID = 0;

  // Initial Scroll to add list element at top -> to be fixed!
  useEffect(() => {
    wrapperRef.current.scrollTop = 1;
  }, []);

  useEffect(() => {
    wrapperRef.current.addEventListener("scroll", function () {
      setScrollPos(wrapperRef.current.scrollTop);
      addNewListElements();
    });
  });

  // add new list element if top or bottom is reached
  function addNewListElements() {
    const max_scroll =
      wrapperRef.current.scrollHeight - listRef.current.clientHeight;
      console.log(listRef.current);
    const current_scroll = wrapperRef.current.scrollTop;
    const bottom = 100;

    // add SVG elements at bottom of list
    if (current_scroll + bottom >= max_scroll) {
      var new_li = listElementRef.current.cloneNode(true);

      listRef.current.appendChild(new_li);
      listRef.current.removeChild(listRef.current.firstChild);
      setCounter((counter) => counter + 1);
      setAddedElement((addedElement) => !addedElement); // notify tracker of added element
    }

    // add SVG elements at top of list
    if (current_scroll - bottom < 0) {
      new_li = listElementRef.current.cloneNode(true);
      listRef.current.insertBefore(new_li, listRef.current.firstChild);
      listRef.current.removeChild(listRef.current.lastChild);
      setCounter((counter) => counter - 1);
      //setAddedElement(addedElement => !addedElement); // notify tracker of added element
    }
    elementID++;
  }

  return (
    <div>
      <div className="counter">{counter}</div>
      <div className="wrapper" ref={wrapperRef}>
        <div ref={listRef} className="list">
          {/* <TextCanvas /> */}
          <ListElement />
          <ListElement
            id={elementID}
            ref={listElementRef}
            scrollPos={scrollPos}
            addedElement={addedElement}
          />
        </div>
      </div>
    </div>
  );
}
