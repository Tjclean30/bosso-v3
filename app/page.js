"use client";

import { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState(null);

  
    async function getQuote() {
  const payload = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    story: document.getElementById("story").value,
    feet: document.getElementById("feet").value,
    quote: "$4,800 - $7,200"
  };

  await fetch(
    "https://script.google.com/macros/s/AKfycbyqpAyCZVv2kJ4WPaTLijqFaO-Fz66NjLAmvuJEAqUODR5mKH5xfpKyhDkvi7xBkgmTwA/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  setQuote("$4,800 - $7,200");
}

  return (
    <main style={{padding:"40px",maxWidth:"1100px",margin:"0 auto",color:"#fff"}}>
      <h1 style={{fontSize:"52px"}}>
        See Your House Lit Up Before You Buy
      </h1>

      <p style={{color:"#aaa"}}>
        Permanent outdoor lighting quotes in 30 seconds.
      </p>

      <div style={{
        background:"#fff",
        color:"#000",
        padding:"30px",
        borderRadius:"20px",
        marginTop:"30px"
      }}>
        <h2>Get Instant Quote</h2>

        <input id="name" placeholder="Full Name" style={box}/>
        <input id="phone" placeholder="Phone" style={box}/>
        <input id="address" placeholder="Address" style={box}/>
        <select id="story" style={box}>
           <option>Single Story</option>
           <option>Two Story</option>
          </select>
         <input id="feet" placeholder="Approx Roofline Feet" style={box}/>
       
        <button
          onClick={getQuote}
          style={{
            width:"100%",
            padding:"14px",
            background:"#000",
            color:"#fff",
            border:"none",
            borderRadius:"12px"
          }}
        >
          Get My Quote
        </button>

        {quote && (
          <div style={{
            marginTop:"15px",
            padding:"14px",
            background:"#d4edda",
            color:"#155724",
            borderRadius:"12px",
            fontWeight:"bold"
          }}>
            Estimated Quote: {quote}
          </div>
        )}
      </div>
    </main>
  );
}

const box = {
  width:"100%",
  padding:"12px",
  marginBottom:"12px",
  borderRadius:"12px",
  border:"1px solid #ccc"
};
