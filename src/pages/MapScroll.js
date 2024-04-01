import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ListElement from "../components/ListElement";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 80vh;
  // top: 10vh;
  border: 2px solid black;
  overflow: scroll;
`;

const LIST = styled.li`
  list-style: none;
  width: 20vw;
`;

const App = () => {
  const focus = [false, true, false];

  const listRef = useRef([]);
  const wrapperRef = useRef();

  const [trackerPos, setTrackerPos] = useState(0);
  // new list with two elements
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
    wrapperRef.current.addEventListener("scroll", function () {
      checkNewElements();
      updateTrackerPos();
    });
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = listRef.current[0].clientHeight;
  }, []);

  const checkNewElements = () => {
    // check if listElement 0 comes into focus
    const rect0 = listRef.current[0].getBoundingClientRect();
    const inFocus0 = rect0.bottom >= wrapperRef.current.clientHeight / 2;

    // check if listElement 2 comes into focus
    const rect2 = listRef.current[2].getBoundingClientRect();
    const inFocus2 = rect2.top <= wrapperRef.current.clientHeight / 2;

    // add new list element if top is reached and delete bottom element
    if (inFocus0 && list.length === 3) {
      addTop();
    }

    // add new list element if bottom is reached and delete top element
    if (inFocus2 && list.length === 3) {
      addBottom();
    }
  };

  const addTop = () => {
    const copy = [...list];
    copy.unshift({
      id: Math.random(),
    });
    copy.pop();
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
    const absolutePos =
      listRef.current[1].getBoundingClientRect().top * -1 +
      wrapperRef.current.clientHeight / 2;
    const relativePos = (absolutePos / listRef.current[1].clientHeight) * 100;
    console.log(relativePos);
    setTrackerPos(relativePos);
  };

  return (
    <Container>
      <Wrapper ref={wrapperRef}>
        {list.map((item, i) => {
          return (
            <LIST
              className="listRef"
              ref={(el) => (listRef.current[i] = el)}
              id={item.id}
              key={item.id}
            >
              <ListElement focus={focus[i]} trackerPos={trackerPos} />
            </LIST>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default App;
