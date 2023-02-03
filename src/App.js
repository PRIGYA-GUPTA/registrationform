
import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] = useState("Select any")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [password,setPassword] = useState("")
  const [fatherName,setFatherName]=useState("")
  const [MotherName,setMotherName]=useState("")
  const [regNo,setRegNo]=useState("")
  const [emptyError,setEmptyError] = useState("")
  const [nameError,setNameError] = useState("")
  const [fatError, setFatError]=useState("")
  const [MothError,setMothError]=useState("")
  const [regError,setRegError]=useState("")
  const [emailError,setEmailError] = useState("")
  const [genderError, setGenderError] = useState("")
  const [phoneNumberError,setPhoneNumberError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [username,setUsername] = useState("")
  
const validate=()=>{
  if(
    name === "" || email === "" || gender==="" || phoneNumber === "" ||password===""
  ){
    setEmptyError("All fields are mandatory")
    setUsername("")
    return false 
  }
  if(!name.match(/^[A-Za-z ]+$/)){
    setNameError("Name is not alphanumeric")
    setUsername("")
    return false;
  }
  if(!fatherName.match(/^[A-Za-z ]+$/)){
    setFatError("Father name can't contain numbers")
    setUsername("")
    return false;
  }
  if(!MotherName.match(/^[A-Za-z ]+$/)){
    setMothError("Mother name can't contain numbers")
    setUsername("")
    return false;
  }

  if(!regNo.match(/^[0-9]/)){
    setRegError("please provide valid registration no")
    setUsername("")
    return false;
  }
  if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
  setEmailError("must contain @")
  setUsername("")
  return false;
  }
  if(!gender.match(/male|female|other/i)){
     setGenderError("please identify as male,female or other")
     setUsername("")
     return false
  }
  if(!phoneNumber.match(/^[0-9]+$/)){
     setPhoneNumberError("Phone Number Must contain only numbers")
     setUsername("")
     return false;
  }
  if(phoneNumber.length <10 || phoneNumber.length>10){
    setPhoneNumberError("Phone number must contain 10 digits")
    setUsername("")
    return false;
  }
  if(password.length<6){
    setPasswordError("Password must contain 6 digits")
    setUsername("")
    return false
  }
  return true
}
const resetErrorDefault=()=>{
  setNameError("")
  setEmptyError("")
  setEmailError("")
  setGenderError("")
  setPhoneNumberError("")
  setPasswordError("")
  setFatError("")
  setMothError("")
  setRegError("")
}
const handleSubmit=(e)=>{
  e.preventDefault()
  resetErrorDefault()
  const isValid = validate()
  if(isValid){
    setName("")
    setEmail("")
    setGender("Select Any")
    setPassword("")
    setPhoneNumber("")
    resetErrorDefault()
    setUsername(name)
    setFatherName("")
    setMotherName("")
    setRegNo("")

  }
}
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <h1>REGISTRATION PORTAL OF 'XYZ' SCHOOL</h1>
      <label> Student Name:</label>
      <input type="text" placeholder='name' value={name} 
      onChange={(e)=>{setName(e.target.value)}}/> <br />
      {nameError}<br/>
      <label>Father Name : </label>
      <input type='text' placeholder='father name' value={fatherName}
      onChange={(e)=>{setFatherName(e.target.value)}}/><br/>
      {fatError}<br/>
      <label>Mother Name : </label>
      <input type='text' placeholder='mother name' value={MotherName}
      onChange={(e)=>{setMotherName(e.target.value)}}/><br/>
      {MothError}<br/>
      <label>Registartion No: </label>
      <input type='text' placeholder='registration no' value={regNo}
      onChange={(e)=>{setRegNo(e.target.value)}}/><br/>
      {regError}<br/>
      <label>email: </label>
      <input type="text" placeholder='email' value={email}
      onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
      {emailError}<br/>
      <label>Password: </label>
      <input type="text" value={password} placeholder='Password'
      onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
      {passwordError}<br/>
      <label>Gender: </label>
      <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
        <option value="Select Any" selected>Select Any</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select><br/>
      {genderError}<br/>
      <label>Phone Number: </label>
      <input type="text" value={phoneNumber} placeholder='Phone Number'
      onChange={(e)=>{setPhoneNumber(e.target.value)}} /><br/>
      {phoneNumberError}<br/>

      
      {emptyError}<br/>
      <input type="submit" value="Submit"/>
    </form>
    <div>
      <h2>{username? "Suucessfully registered ,welcome to our school " + username:""}</h2>
    </div>
    </div>
  );
}

export default App;