import React, { useState } from "react";

function Form() {

const [formData, setFormData] = useState({
    firstName: "John",
    lastName:"Henry",
    admin: false,
});
  
function handleChange(event){
  const name = event.target.name;
  let value = event.target.value;
  if(event.target.type === "checkbox"){
      value= event.target.checked
  } 
    setFormData({
      ...formData,[name]: value,  
    })
}

function handleSubmit(event){
  event.preventDefault();
  console.log(formData)
}

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,firstName:event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData, lastName: event.target.value,
  //   });
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name="firsName"
      onChange={handleChange} 
      value={formData.firstName} 
      />
      <input name= "lastName"
      type="text" 
      onChange={handleChange} 
      value={formData.lastName} 
      />
      <input name= "admin"
      type="checkbox" 
      onChange={handleChange} 
      checked={formData.admin} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
