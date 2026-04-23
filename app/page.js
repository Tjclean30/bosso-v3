"use client";

import { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState(null);

  function getQuote() {
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

        <input placeholder="Full Name" style={box}/>
        <input placeholder="Phone" style={box}/>
        <input placeholder="Address" style={box}/>
        <input placeholder="Approx Roofline Feet" style={box}/>

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
