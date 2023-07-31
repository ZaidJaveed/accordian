function AccordianList({ accordianItem, currentOpen, setCurrentOpen }) {
  const isOpen = currentOpen === accordianItem.id;
  return (
    <div className="accordian">
      <div
        className={`accordian-heading ${
          isOpen ? "accordian-heading-border" : ""
        }`}
        onClick={() => setCurrentOpen(isOpen ? null : accordianItem.id)}
      >
        <h2>{accordianItem.title}</h2>
        <button className="accordian-btn">{isOpen ? "-" : "+"}</button>
      </div>

      {isOpen && (
        <div className="accordian-body">
          <p>{accordianItem.text}</p>
        </div>
      )}
    </div>
  );
}
export default AccordianList;
