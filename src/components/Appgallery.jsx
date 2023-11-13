import { useEffect } from "preact/hooks";
import React, { useState } from "react";
import Myprojects  from "./Myprojects";

const Appgallery = () => {
  
  //for telling it you want in to move
  let list = document.querySelector(".apps-list");
  
  /* declare items to be any element with the class app-item, all the li, but do so when page finishes loading */
  const [items, setItems] = useState("");
  useEffect(() => {
    setItems(document.querySelector(".app-item"));
  }, [items]);
  //counter for knowing the focused element;
  const [itemCounter, setItemCounter] = useState(0);
  
  //right button
  const handlerRightBtn = () => {
    const slideWidth = items.clientWidth;
    list.scrollLeft += slideWidth;
    if (itemCounter < 2) {
      setItemCounter(itemCounter + 1);
    }
  };
  //left button
  const handlerLeftBtn = () => {
    const slideWidth = items.clientWidth;
    list.scrollLeft -= slideWidth;

    if (itemCounter > 0) {
      setItemCounter(itemCounter - 1);
    }
  };
  

  return (
    <div className="apps-list-wrapper">
      <button className="btn-left" onClick={handlerLeftBtn}>
        L
      </button>
      <Myprojects counter={itemCounter}/>
      
      <button className="btn-right" onClick={handlerRightBtn}>
        R
      </button>
    </div>
  );
};

export default Appgallery;
