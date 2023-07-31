import { useState } from "react";
import quotesData from "./quotesData";
function DataTable({ data, headers, setTableData, rowCount, setRowCount }) {
  const [order, setOrder] = useState(false); //true-->asc and false ---> desc
  function handleOrder(sortBy, heading) {
    setOrder(sortBy);
    if (typeof data[0][heading] === "number") {
      sortBy
        ? setTableData([...data].sort((a, b) => b[heading] - a[heading]))
        : setTableData([...data].sort((a, b) => a[heading] - b[heading]));
    } else {
      sortBy
        ? setTableData(
            [...data].sort((a, b) => (a[heading] > b[heading] ? -1 : 1))
          )
        : setTableData([...data].sort((a, b) => (a[heading] < b ? -1 : 1)));
    }
  }
  function handleChange(value) {
    setRowCount(value);
    setTableData(quotesData.filter((_, index) => index < value));
    console.log(
      value,
      data.filter((_, index) => index < value),
      data
    );
  }
  return (
    <>
      <p className="content-heading">Data-Table</p>
      <form>
        <label htmlFor="drop-down">Row count</label>
        <select
          id="drop-down"
          value={rowCount}
          onChange={(e) => handleChange(+e.target.value)}
        >
          {Array.from({ length: 6 }, (_, i) => (i + 1) * 5).map((ele) => (
            <option value={ele} key={ele}>
              {ele}
            </option>
          ))}
        </select>
      </form>
      <table>
        <thead>
          <tr>
            {headers.map((heading) => (
              <td
                className="table_heading"
                key={heading}
                onClick={() => handleOrder(!order, heading)}
              >
                {heading.toUpperCase()}{" "}
                <span style={order ? { opacity: "1" } : { opacity: "0.1" }}>
                  &uarr;
                </span>
                <span style={!order ? { opacity: "1" } : { opacity: "0.1" }}>
                  &darr;
                </span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              {headers.map((heading, i) => (
                <td key={i + 1}>{item[heading]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default DataTable;
