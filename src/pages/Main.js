import { useState, useRef, useEffect } from "react";
import ListElement from "../components/ListElement";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #001814;
    color: white;
  };
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.li`
  list-style: none;
  width: 40vw;
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
    wrapperRef.current.scrollTop =
      listRef.current[0].clientHeight - wrapperRef.current.clientHeight / 2;
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
      wrapperRef.current.clientHeight / 2;
    // calculate relative position of the middle list element by dividing it by the height of the middle list element
    const relativePos = (absolutePos / listRef.current[1].clientHeight) * 100;
    console.log(relativePos);
    setTrackerPos(relativePos);
  };

  return (
    <Container>
      <GlobalStyle />
      <Wrapper ref={wrapperRef}>
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
                scrollRef={wrapperRef}
              />
            </List>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default App;
