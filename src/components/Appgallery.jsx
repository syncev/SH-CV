import { useEffect } from "preact/hooks";
import React, { useState } from "react";
import Myprojects from "./Myprojects";


const Appgallery = () => {
  
  const deviceWidth = window.innerWidth;
  const tabletWidth = 768;

  //for telling it you want it to move
  let list = document.querySelector(".apps-list");
  
  /* declare items to be any element with the class app-item, all the li, but do so when page finishes loading */
  const [items, setItems] = useState("");
  useEffect(() => {
    setItems(document.querySelector(".app-item"));
  }, [items]);

  //counter for knowing the focused element;
  const [itemCounter, setItemCounter] = useState(0);

  //projecs length;
  const[listLength ,setListLength] = useState(1)
  
  //-----------right button----------
  const handlerRightBtn = () => {
    const slideWidth = items.clientWidth;
    list.scrollLeft += slideWidth;
    if (itemCounter < listLength-1) {
      setItemCounter(itemCounter + 1);
    }
  };
  //----------left button----------
  const handlerLeftBtn = () => {
    const slideWidth = items.clientWidth;
    list.scrollLeft -= slideWidth;

    if (itemCounter > 0) {
      setItemCounter(itemCounter - 1);
    }
  };
  

  return (
    <>
      
      {deviceWidth < tabletWidth ? (
        <div className="apps-list-wrapper">
      
      <Myprojects counter={itemCounter} setListLength={setListLength}/>
        
      </div>
      )
      : (
        <div className="apps-list-wrapper">
        <button className="btn-left" onClick={handlerLeftBtn}>&lt;</button>
        
        <Myprojects counter={itemCounter} setListLength={setListLength}/>
        
        <button className="btn-right" onClick={handlerRightBtn}>&gt;</button>
        </div>
      )

      
        
      }
      

    </>
  );
};

export default Appgallery;
