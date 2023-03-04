import { useState } from "react";
import "./BankApp.scss";
import AddToList from "./components/AddToList";
import DeleteButton from "./components/DeleteButton";

function Frame() {
  const list = [
    {
      id: 1,
      name: "Bob",
      surname: "Goodman",
      cash: "2450",
    },
    {
      id: 2,
      name: "Josh",
      surname: "O'Doneal",
      cash: "15422",
    },
    {
      id: 3,
      name: "Bosh",
      surname: "Brown",
      cash: "1422",
    },
  ];
  const [lists, setLists] = useState(list);
  return (
    <div className="frame">
      <div>
        <AddToList setList={setLists} />
        <form>
          <table>
            {lists.map((current) => (
              <tr>
                <td>{current.name}</td>
                <td>{current.surname}</td>
                <td>{current.cash}</td>
                <td>
                  <input type="number" />
                  <button>pridėti lėšų</button>
                  <button>nuskaičiuoti lėšas</button>
                </td>
                <td>
                  <button>Ištrinti</button>
                </td>
              </tr>
            ))}
          </table>
        </form>
      </div>
    </div>
  );
}

export default Frame;
