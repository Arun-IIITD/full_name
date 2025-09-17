import { useState } from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  if (!firstName.trim() || !LastName.trim()) {
    alert("Please fill out this field");
    return; 
  }

  setFullName(`${firstName} ${LastName}`);

    
  };

  return (


    <div>
      

      <form onSubmit = {handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          label = "First Name"
          value= {firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
      </div>

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
        value={LastName}
        type="text"
        placeholder="Last Name"
        label = "Last Name"
        onChange={(e) => setLastName(e.target.value)}
        />

          
      </div>

      <div>
        <button 
        // style = {{font: bold}}
        style={{ fontWeight: "bold" }}
        type="submit"
       
        >
          Submit
        </button>
      </div>



      </form>

      {fullName && (
        <h2> Full Name: {fullName}</h2>
      )}


    </div>
  
  );
}

export default App;
