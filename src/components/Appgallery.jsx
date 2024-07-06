import React from 'react';
import MyProjects from './Myprojects';

function Appgallery() {
  return (
    <div className="App">
      <MyProjects />
    </div>
  );
}

  

// const Appgallery = () => {
//   // const deviceWidth = window.innerWidth;
//   // const tabletWidth = 481;

//   //for telling it you want it to move
//   // let list = document.querySelector(".apps-list");

//   /* declare items to be any element with the class app-item, all the li, but do so when page finishes loading */
//   // const [items, setItems] = useState("");
//   // useEffect(() => {
//   //   setItems(document.querySelector(".app-item"));
//   // }, [items]);

//   //counter for knowing the focused element;
//   // const [itemCounter, setItemCounter] = useState(0);

//   //projecs length;
//   // const [listLength, setListLength] = useState(1);

//   /* const {scrollPosition, setScrollPosition} = useState(list.scrollX);
//   useEffect(() => {
//     scrollPosition < list.scrollX ? setItemCounter(itemCounter +1) : scrollPosition > list.scrollX ? setItemCounter(itemCounter - 1) : setItemCounter(itemCounter)
//   },[list.scrollX]) */

//   //-----------right button----------
//   // const handlerRightBtn = () => {
//   //   const slideWidth = items.clientWidth;
//   //   list.scrollLeft += slideWidth;
//   //   if (itemCounter < listLength - 1) {
//   //     setItemCounter(itemCounter + 1);
//   //   }
//   // };
//   // //----------left button----------
//   // const handlerLeftBtn = () => {
//   //   const slideWidth = items.clientWidth;
//   //   list.scrollLeft -= slideWidth;

//   //   if (itemCounter > 0) {
//   //     setItemCounter(itemCounter - 1);
//   //   }
//   // };

//   return (
//     <>
//       <h1 className="projects-header">PORTFOLIO</h1>
//       {/* {deviceWidth < tabletWidth ? (
//         <div className="apps-list-wrapper">
//           <Myprojects counter={itemCounter} setListLength={setListLength} />
//         </div>
//       ) : ( */}
//         <div className="apps-list-wrapper">
//           {/* <button
//             className={`btn-left ${itemCounter === 0 ? "btnGray" : ""}`}
//             onClick={handlerLeftBtn}
//           >
//             &lt;
//           </button> */}

//           {/* <Myprojects counter={itemCounter} setListLength={setListLength} /> */}
          
//           {/* <button
//             className={`btn-right ${
//               itemCounter === listLength - 1 ? "btnGray" : ""
//             }`}
//             onClick={handlerRightBtn}
//           >
//             &gt;
//           </button> */}
//         </div>
//       {/* )} */}
//     </>
//   );
// };

export default Appgallery;
