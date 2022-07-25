import React from 'react'
import "./Component1.css"
import { useState } from 'react'

export default function Component1() {

    const[namemessage1 ,setNamemessage1]=useState()
    const[emailmessage1 ,setEmailmessage1]=useState()
    const[passwordmessage1 ,setPasswordmessage1]=useState()
    const[addressmessage1 ,setAddressmessage1]=useState()
    const[mobilemessage1 ,setMobilemessage1]=useState()
    const[radioval1 ,setRadioval1]=useState(0)
    const[radiomessage1 ,setRadiomessage1]=useState()
    const[checkval1 ,setCheckval1]=useState(0)
    const[checkmessage1 ,setCheckmessage1]=useState()
    const[dobmessage1 ,setDobmessage1]=useState()
    const[filemessage1 ,setFilemessage1]=useState()
    const[flag,setFlag]=useState(0)
    const[flagmessage,setFlagmessage]=useState()






    const radiofun=()=>{
         
        var getSelectedValue = document.querySelector('input[name="gender"]:checked').value;
        if(getSelectedValue=="male" || getSelectedValue=="female"){
            setRadioval1(1)
            setRadiomessage1("")
        }
    }

    const checkfun=(event)=>{
          if(event.target.checked==true){    
              setCheckval1(1)
              setCheckmessage1("")
          }
          if(event.target.checked==false){
            setCheckval1(0)
          }
    }

    const save=(event)=>{
        event.preventDefault()
        var name=document.getElementById("name").value;
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var address=document.getElementById("address").value;
        var mobile=document.getElementById("mobile").value;
        var dob=document.getElementById("date").value;
        var file=document.getElementById("file").value;
        if(!name.match("^[a-zA-Z\s]+$")){
            setFlag(0)
            setNamemessage1("***Please fill Your name correctly")
        }
        if(name.match("^[a-zA-Z\s]+$")){
            setFlag(1)
            setNamemessage1("")
        }



        if(!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
            setFlag(0)
            setEmailmessage1("***Please fill Your email correctly")
        }
        if(email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
            setFlag(1)
            setEmailmessage1("")
        }



        if(!password.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}")){
            setFlag(0)
            setPasswordmessage1("***Please fill Your password correctly")
        }
        if(password.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}")){
            setFlag(1)
            setPasswordmessage1("")
        }


        if(address==""){
            setFlag(0)
            setAddressmessage1("***Please fill Your address correctly")
        }
        if(address!=""){
            setFlag(1)
            setAddressmessage1("")
        }


        if(mobile.length!=10){
            setFlag(0)
            setMobilemessage1("***Please fill your Mobile Number Correctly")
        }
        if(mobile.length==10){
            setFlag(1)
            setMobilemessage1("")
        }

        if(radioval1==0){
            setFlag(0)
            setRadiomessage1("***Please select your gender")
        }
        if(radioval1==1){
            setFlag(1)
            setRadiomessage1("")
        }

        if(checkval1==0){
            setFlag(0)
            setCheckmessage1("***Please select your hobbies")
        }
        if(checkval1==1){
            setFlag(1)
            setCheckmessage1("")
        }

        if(dob==""){
            setFlag(0)
            setDobmessage1("***Please choose your birth date")
        }
        if(dob!=""){
            setFlag(1)
            setDobmessage1("")            
        }


        if(file==""){
            setFlag(0)
            setFilemessage1("***please select your image")
        }
        if(file!=""){
            setFlag(1)
            setFilemessage1("")

        }

        // if(namemessage1=="" && emailmessage1=="" && passwordmessage1=="" && addressmessage1=="" && mobilemessage1=="" && radiomessage1=="" && checkmessage1=="" && filemessage1=="" && dobmessage1==""){
        //     alert()
        // }
        if(flag==1){
            setFlagmessage("Uploaded Successfully!")
        }
    }


    const reset =()=>{
        window.location.reload(false)
    }
  return (
    <div id="component1">
        <form onSubmit={save}>
        <div id="tablediv">
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{namemessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{emailmessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{passwordmessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{addressmessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{mobilemessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{radiomessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{checkmessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{filemessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"red"}}>{dobmessage1}</p>
        <p style={{width:"80vw", margin:"auto",color:"green"}}>{flagmessage}</p>

            <table>
                <tr><td>Enter Your Name</td><td><input type="text" id="name"/></td></tr>
                <tr><td>Enter Your Email</td><td><input type="email" id="email"/></td></tr>
                <tr><td>Enter Your Password</td><td><input type="password" id="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/></td></tr>
                <tr><td>Enter Your Address</td><td><textarea rows={5} cols={40} id="address"></textarea></td></tr>
                <tr><td>Enter Your Mobile</td><td><input type="number" id="mobile"/></td></tr>
                <tr><td>Select Your Gender</td><td><label><input type="radio" value="male" name="gender" id="male" onChange={radiofun} />Male<input type="radio" value="female" name="gender" id="female" onChange={radiofun} />Female</label></td></tr>
                <tr><td>Choose Your Hobbies</td><td><label><input type="checkbox" id="cricket" value="cricket" onClick={checkfun} />Cricket<input type="checkbox" id="dancing" value="dancing" onClick={checkfun} />Dancing<input type="checkbox" id="singing" value="singing" onClick={checkfun} />Singing</label></td></tr>
                <tr><td>Choose Your Profile Pic</td><td><input type="file" id="file"/></td></tr>
                <tr><td>Select Your Dob</td><td><input type="date" id="date"/></td></tr>
                <tr><td colSpan={2}><input type="submit" value="Register" id="btn1"/><input type="button" value="Reset" id="btn2" onClick={reset}/></td></tr>

            </table>
        </div>
        </form>
    </div>
  )
}
