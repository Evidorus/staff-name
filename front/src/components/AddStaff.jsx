import { useState } from "react";
import { useHistory } from "react-router";
import Staffs from "./Staffs";

const AddStaff = (props) => {
  const [name, setName] = useState("");
  const history = useHistory();

  /*   const handleSubmit = (event) => {
    console.log(`
      name: ${name}
    `);

    event.preventDefault();
  }; */

  const addStaff = () => {
    fetch("http://localhost:8000/staffs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        history.push(`/Staffs/${response.name}`);
      });
  };

  return (
    <div>
      <form>
        <h1>Add a name</h1>

        <label>
          Name:
          <input
            name='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                addStaff();
              }
            }}
            required
          />
        </label>

        <button onClick={addStaff}>Submit</button>
      </form>
      <p>Argonaute List</p>
      <Staffs />
    </div>
  );
};

export default AddStaff;
