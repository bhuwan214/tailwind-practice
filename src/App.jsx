import { useState } from "react"
import LoginForm from "./LoginForm"
 
export default function App() {

  const [userData ,setUserData]= useState("")

  const handleFormData =(formData)=>{
     setUserData(formData)
  }

  // const storeddata = handleFormData();


  return ( 
  <>
    <h1 className="text-3xl font-bold underline p-6">
     Login Form
    </h1>
  <LoginForm onSubmitForm={handleFormData}/>

  <p className="">{userData.firstName} {userData.lastName} is logged in.Your age is {userData.age} & phone number is {userData.phoneNumber} & email is {userData.email} </p>

 </>
  )
}