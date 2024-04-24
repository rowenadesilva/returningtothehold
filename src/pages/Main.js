import { useState, useRef, useEffect } from "react";
import ListElement from "../components/ListElement";
import styled from "styled-components";
import { TrackerContext } from "../components/TrackerContext";
import Hold from "../components/Hold";
import Title from "../components/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
`;

const Li = styled.li`
  list-style: none;
  width: 100vw;
  text-align: center;
`;

const Gradient = styled.div`
  position: fixed;
  width: 100vw;
  height: 10vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
`;

const CheckTitle = (props) => {
  if (props.id === 0) {
    return <Title />;
  }
};

const App = () => {
  const listRef = useRef([]);
  const [trackerPos, setTrackerPos] = useState(0);
  var focus = [true, false];

  // start list with 2 elements
  const [list, setList] = useState([
    {
      id: 0,
    },
    {
      id: 1,
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
    window.scrollTo(0, 0);
  };

  const checkNewElements = () => {
    if (listRef.current.length === 2) {
      // check if listElement 1 comes into focus
      const rect1 = listRef.current[1].getBoundingClientRect();
      const inFocus1 = rect1.top <= document.documentElement.clientHeight / 2;
      // add new list element
      if (inFocus1) {
        const copy = [
          {
            id: 0,
          },
          {
            id: 1,
          },
          {
            id: Math.random(),
          },
        ];

        setList(copy);
        focus = [false, true, false];
      }
    } else {
      // check if listElement 0 comes into focus
      const rect0 = listRef.current[0].getBoundingClientRect();
      const inFocus0 =
        rect0.bottom >= document.documentElement.clientHeight / 2;

      // check if listElement 2 comes into focus
      const rect2 = listRef.current[2].getBoundingClientRect();
      const inFocus2 = rect2.top <= document.documentElement.clientHeight / 2;

      // add new list element if top is reached and delete bottom element
      if (inFocus0 && list.length === 3) {
        // console.log("addTop");
        addTop();
      }

      // add new list element if bottom is reached and delete top element
      if (inFocus2 && list.length === 3) {
        // console.log("addBottom");
        addBottom();
      }
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
    var i = 1;
    if (listRef.current.length <= 2) {
      i = 0;
    }
    const svgHeight = listRef.current[i].clientHeight;
    const absolutePos = listRef.current[i].getBoundingClientRect().top * -1;
    // calculate relative position of the middle list element by dividing it by the height of the middle list element
    const relativePos = (absolutePos / svgHeight) * 100;
    setTrackerPos(relativePos);
  };

  return (
    <div>
      <TrackerContext.Provider value={trackerPos}>
        <Gradient />
        <Hold />
        <Container>
          {list.map((item, i) => {
            return (
              <Li
                className="listRef"
                ref={(el) => (listRef.current[i] = el)}
                id={item.id}
                key={item.id}
              >
                <CheckTitle id={item.id} />
                <ListElement
                  focus={focus[i]}
                  trackerPos={trackerPos}
                  id={item.id}
                />
              </Li>
            );
          })}
        </Container>
      </TrackerContext.Provider>
    </div>
  );
};
export default App;
