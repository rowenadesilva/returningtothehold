import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  left: 5%;
  top: 2%;
`;

const Button = styled.button`
  border: none;
  background-color: red;
  color: white;
  height: 50px;
  width: 80px;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 1rem;
`;

const Wrapper = styled.div`
  height: 80vh;
  border: 2px solid red;
  position: fixed;
  overflow: scroll;
`;

const LIST = styled.li`
  list-style: none;
  height: 120vh;
  width: 50vw;
  border: 2px solid black;
  font-size: 4em;
  text-align: center;
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

  // q: how to make this function async?  -> use async/await
  //

  const checkScrollPosition = () => {
    // check if listElement 1 is visible
    console.log(listRef.current);
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

    // console.log("1 is visible: ", isVisible1);
    // console.log("2 is visible: ", isVisible2);
    // console.log("3 is visible: ", isVisible3);
    // console.log(" ");

    if (isVisible1 && !isVisible2 && list.length == 3) {
      addTop();
    }
    if (isVisible3 && !isVisible2 && list.length == 3) {
      addBottom();
    }
  };

  const addTop = () => {
    const copy = [...list];
    copy.unshift({
      id: Math.random() * 1000,
    });
    copy.pop();
    setList(copy);
  };

  const addBottom = () => {
    const copy = [...list];
    copy.push({
      id: Math.random() * 1000,
    });
    copy.shift();
    setList(copy);
  };

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={() => addTop()}>Add Top</Button>
        <Button onClick={() => addBottom()}>Add Bottom</Button>
      </ButtonWrapper>
      <Wrapper ref={wrapperRef}>
        {list.map((item, i) => {
          return (
            <LIST
              className="listRef"
              ref={(el) => (listRef.current[i] = el)}
              id={item.id}
              key={item.id}
            >
              {item.id}
            </LIST>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default App;
