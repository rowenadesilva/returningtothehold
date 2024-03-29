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
  top: 10vh;
  border: 2px solid black;
  overflow: scroll;
`;

const LIST = styled.li`
  list-style: none;
  width: 20vw;
`;

const App = () => {
  const listRef = useRef([]);
  const wrapperRef = useRef();

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
      //  console.log(wrapperRef.current.scrollTop);
      checkScrollPosition();
    });
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = listRef.current[0].clientHeight;
  }, []);

  const checkScrollPosition = () => {
    // check if listElement 1 is visible
    const rect1 = listRef.current[0].getBoundingClientRect();
    const elemBottom1 = rect1.bottom;
    const isVisible1 = elemBottom1 >= 0;

    // check if listElement 2 is visible
    const rect2 = listRef.current[1].getBoundingClientRect();
    const elemTop2 = rect2.top;
    const elemBottom2 = rect2.bottom;
    const isVisible2 =
      elemTop2 <= wrapperRef.current.clientHeight && elemBottom2 >= 0;

    // check if listElement 3 is visible
    const rect3 = listRef.current[2].getBoundingClientRect();
    const elemTop3 = rect3.top;
    const isVisible3 = elemTop3 <= wrapperRef.current.clientHeight;

    // add new list element if top is reached
    if (isVisible1 && !isVisible2 && list.length == 3) {
      addTop();
    }

    // add new list element if bottom is reached
    if (isVisible3 && !isVisible2 && list.length == 3) {
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
              <ListElement />
            </LIST>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default App;
