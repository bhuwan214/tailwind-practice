import { useState } from "react";
import "./App.css"


export default function LoginForm({ onSubmitForm }) {
   
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        age:"",
        phoneNumber:""
    });

    
    const handleInputChange =(e)=>{
        const { name, value }=e.target;
        setUser((prev) => ({
            ...prev, // Preserve existing fields
            [name]: value, // Update the current field
          }));

        };

    const handleSubmit =(event)=>{
        event.preventDefault();
        const formData ={...user };
        onSubmitForm(formData)

        setUser({
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            phoneNumber: "",
          });
    
    }

   

  return (
    <div className="bg-gray-200 w-[350px] flex flex-col justify-center items-center  p-10 rounded-2xl shadow-2xl ">
      <form className=" " onSubmit={handleSubmit} >

        <label htmlFor="firstName">First name:</label>
        <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />

        <label htmlFor="lastName">Last name:</label>
        <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"  value={user.email} onChange={handleInputChange}/>  

        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={user.age} onChange={handleInputChange}/>
        
         <label htmlFor="phoneNumber">Phone:</label>
        <input type="number" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} />

        <button className="p-2  m-6 bg-slate-950 text-white  " >Submit</button>
        
      </form>
    </div>
  )
}
