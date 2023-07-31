import { useState } from "react";
import AccordianList from "./accordianList";
function Accordian({ content }) {
  const [currentOpen, setCurrentOpen] = useState(null);
  // console.log(content);
  return (
    <>
      <p className="content-heading">Accordian component</p>
      {content.map((item) => (
        <AccordianList
          accordianItem={item}
          key={item.id}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
        />
      ))}
    </>
  );
}
export default Accordian;
