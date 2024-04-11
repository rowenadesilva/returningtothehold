import { useState, useRef, useEffect } from "react";
import ListElement from "../components/ListElement";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const List = styled.li`
  list-style: none;
  width: 40vw;
`;

const App = () => {
  const focus = [false, true, false];

  const listRef = useRef([]);

  const [trackerPos, setTrackerPos] = useState(0);

  // start list with 3 elements
  const [list, setList] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      checkNewElements();
      updateTrackerPos();
    });
  });

    // scroll to the middle list element on page load

  window.onbeforeunload = function () {
    window.scrollTo(0, listRef.current[0].clientHeight -
      document.documentElement.clientHeight / 2.1);
  }
  
  const checkNewElements = () => {
    // check if listElement 0 comes into focus
    const rect0 = listRef.current[0].getBoundingClientRect();
    const inFocus0 = rect0.bottom >= document.documentElement.clientHeight / 2;

    // check if listElement 2 comes into focus
    const rect2 = listRef.current[2].getBoundingClientRect();
    const inFocus2 = rect2.top <= document.documentElement.clientHeight / 2;

    // add new list element if top is reached and delete bottom element
    if (inFocus0 && list.length === 3) {
      console.log("addTop");
      addTop();
    }

    // add new list element if bottom is reached and delete top element
    if (inFocus2 && list.length === 3) {
      console.log("addBottom");
      addBottom();
    }
  };

  const addTop = () => {
    const copy = [...list];
    copy.unshift({
      id: Math.random(),
    });
    if (copy.length > 3) {
      copy.pop();
    }
    setList(copy);
  };

  const addBottom = () => {
    const copy = [...list];
    copy.push({
      id: Math.random(),
    });
    copy.shift();
    setList(copy);
  };

  const updateTrackerPos = () => {
    // get the absolute y-position of the middle list element and convert into positive value
    const absolutePos =
      listRef.current[1].getBoundingClientRect().top * -1 +
      document.documentElement.clientHeight / 2;
    // calculate relative position of the middle list element by dividing it by the height of the middle list element
    const relativePos = (absolutePos / listRef.current[1].clientHeight) * 100;
    setTrackerPos(relativePos);
  };

  return (
    <div>
      <Container>
        {list.map((item, i) => {
          return (
            <List
              className="listRef"
              ref={(el) => (listRef.current[i] = el)}
              id={item.id}
              key={item.id}
            >
              <ListElement
                focus={focus[i]}
                trackerPos={trackerPos}
                scrollRef={window}
              />
            </List>
          );
        })}
      </Container>
    </div>
  );
};
export default App;
