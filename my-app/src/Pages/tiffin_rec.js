import React, { useState, useEffect } from 'react';
import { database, ref, push, onValue, remove } from "./firebase";
import './TiffinManagementSystem.css';


const TiffinManagementSystem = () => {
  const [tiffins, setTiffins] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [mealType, setMealType] = useState('day');

  useEffect(() => {
    const tiffinsRef = ref(database, 'tiffins');
      
    onValue(tiffinsRef, (snapshot) => {
      const tiffinsData = snapshot.val();
      if (tiffinsData) {
        const tiffinsList = Object.keys(tiffinsData).map((key) => ({
          id: key,
          ...tiffinsData[key]
        }));
        setTiffins(tiffinsList);
      } else {
        setTiffins([]);
      }
    });
  }, []);

  const addTiffin = () => {
    if (!name || !date || !mealType) {
      alert('Please fill in all the fields');
      return;
    }

    const tiffinsRef = ref(database, 'tiffins');
      
    push(tiffinsRef, {
      name,
      date,
      mealType
    }).then(() => {
      alert('Tiffin added successfully!');
      setName('');
      setDate('');
      setMealType('day');
    }).catch((error) => {
      console.error("Error adding tiffin:", error);
    });
  };

  const removeTiffin = (id) => {
    const tiffinsRef = ref(database, `tiffins/${id}`);
      
    remove(tiffinsRef).then(() => {
      console.log("Tiffin removed successfully!");
    }).catch((error) => {
      console.error("Error removing tiffin:", error);
    });
  };

  const calculateTiffinsNotTaken = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    let notTakenTiffins = {};

    tiffins.forEach((tiffin) => {
      const tiffinDate = new Date(tiffin.date);
      const tiffinMonth = tiffinDate.getMonth() + 1;
      
      if (tiffinMonth === currentMonth) {
        if (notTakenTiffins[tiffin.name]) {
          notTakenTiffins[tiffin.name]++;
        } else {
          notTakenTiffins[tiffin.name] = 1;
        }
      }
    });

    return notTakenTiffins;
  };

  return (
    <div className="container1">
      <div className="form-container">
        <h2>Add New Tiffin Record</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Meal Type:</label>
          <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
            <option value="day">Day</option>
            <option value="night">Night</option>
          </select>
        </div>
        <button id="add" onClick={addTiffin}>Add Tiffin</button>
      </div>
      <div className="info-container">
        <h2>Tiffins not taken this month:</h2>
        <ul>
          {Object.keys(calculateTiffinsNotTaken()).map((customerId) => (
            <li key={customerId}>
              Customer: {customerId} - Not Taken: {calculateTiffinsNotTaken()[customerId]}
            </li>
          ))}
        </ul>
        <h2>Customers with tiffins not taken:</h2>
        <ul>
          {tiffins.map((tiffin) => (
            <li key={tiffin.id}>
              {tiffin.name} - Date: {tiffin.date} - {tiffin.mealType} 
              <button  className="remove-button" onClick={() => removeTiffin(tiffin.id)} >Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TiffinManagementSystem;
