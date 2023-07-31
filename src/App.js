import "./index.css";
import Accordian from "./components/accordian/accordian";
import { useEffect, useState } from "react";
import accordianContent from "./components/accordian/accordianData";
import DataTable from "./components/dataTable/dataTable";
import quotesData from "./components/dataTable/quotesData";
function App() {
  const [tableData, setTableData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [rowCount, setRowCount] = useState(30);
  useEffect(function () {
    setTableData(quotesData);
    setHeaders(Object.keys(quotesData[0]));
  }, []);
  return (
    <>
      <div className="accordian-wrapper">
        <Accordian content={accordianContent} />
      </div>
      <div className="table-wrapper">
        <DataTable
          data={tableData}
          headers={headers}
          setTableData={setTableData}
          rowCount={rowCount}
          setRowCount={setRowCount}
        />
      </div>
    </>
  );
}

export default App;
