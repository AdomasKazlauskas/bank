import { useState } from "react";
import "./BankApp.scss";
import AddToList from "./components/AddToList";

function Frame() {
  const list = [
    {
      id: 1,
      name: "Bob",
      cash: "2450",
    },
    {
      id: 2,
      name: "Josh",
      cash: "15422",
    },
    {
      id: 3,
      name: "Bosh",
      cash: "1422",
    },
  ];
  const [lists, setLists] = useState(list);

  return (
    <div className="frame">
      <div>
        <AddToList setList={setLists} />
        <table>
          {lists.map((current) => (
            <tr>
              <td className="tableData">{current.name}</td>
              <td className="tableData">{current.cash}</td>
              <td>
                <button className="tableDataEdit">Edit</button>
                <button className="tableDataDelete">Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Frame;
