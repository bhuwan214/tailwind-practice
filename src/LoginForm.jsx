import "./App.css"

export default function LoginForm() {
  return (
    <div>
      <form className="flex flex-col " >

        <label htmlFor="firstName">First name:</label>
        <input type="text" name="firstName" />

        <label htmlFor="lastName">Last name:</label>
        <input type="text" name="lastName" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />  

        <label htmlFor="age">Age:</label>
        <input type="age" name="age" />
        
         <label htmlFor="phoneNumber">Phone:</label>
        <input type="number" name="phoneNumber" />

      </form>
    </div>
  )
}