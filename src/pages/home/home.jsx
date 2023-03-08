import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { countryStates } from "../data/countryState";
import { departmentData } from "../data/departement";
import { useState } from "react";
import {Modal} from "modal-component-kle"


function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateCountry, setState] = useState("");
  const [stateCountryAbb, setStateAbb] = useState("");

  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");

  const [modal, setModal] = useState(false)

  function matchState(stateName) {
 const stateAbbr = countryStates.find(stateName => stateName.name === stateCountry )
 if(typeof stateAbbr !== "undefined"){
    setStateAbb(stateAbbr.abbreviation)
 }

  }

  useEffect(() => {
    matchState(stateCountry)
  }, [stateCountry])

  console.log(modal)

  const handleModalClose = () => {
    setModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      birthDate,
      startDate,
      street,
      city,
      stateCountryAbb,
      zipCode,
      department
    };

    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    localStorage.setItem("formData", JSON.stringify([...existingData, formData]));
    setModal(true)
    
  };

  return (
    <>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employee</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Fisrt Name</label>
        <input id="firstName" required type="text" onChange={(e) => setFirstName(e.target.value)}></input>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" required type="text"  onChange={(e) => setlastName(e.target.value)}></input>
        <label htmlFor="birthDate">Date of Birth </label>
        <input id="birthDate"  type="date"  min="1900-01-01" onChange={(e) => setBirthDate(e.target.value)}></input>
        <label htmlFor="startDate">Start Date</label>
        <input id="startDate"  type="date"  min="1900-01-01" onChange={(e) => setStartDate(e.target.value)}></input>
        <div className="insideFomr">
          <p>Adress</p>
          <label htmlFor="street">Street</label>
          <input id="street" required type="text"  onChange={(e) => setStreet(e.target.value)}></input>
          <label htmlFor="city" >City</label>
          <input id="city" required type="text"  onChange={(e) => setCity(e.target.value)}></input>
          <label htmlFor="stateCountry">State</label>
          <select id="stateCountry" name="state-select" onChange={(e) => setState(e.target.value)}>
            <option value="">--Select a State--</option>
            {countryStates.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" required type="number"  onChange={(e) => setZipCode(e.target.value)}></input>
        </div>
        <label htmlFor="department">Department</label>
        <select id="department" name="state-select" onChange={(e) => setDepartment(e.target.value)}>
          <option value="">--Select a Department--</option>
          {departmentData.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button type="submit">Valdier</button>
        <Modal bgModal={"#FF0000"} bgContent={"#00FF00"} colorContent={"FFFFFF"} colorClose={"FFFFFF"} visible={modal} closelink={"/employee-list"} textContent={"Employee Created!"} onClose={handleModalClose}/>
      </form>
    </>
  );
}

export default Home;
