import React, {useState} from 'react'
import bgMobile from "./images/bg-main-mobile.png"
import bgDesktop from "./images/bg-main-desktop.png"
import logo from "./images/card-logo.svg"
import tick from "./images/icon-complete.svg"
import {format} from "date-fns"



export default function App() {

  const [confirmed, setConfirmed] = useState(false);
  const [name , setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("01/23");
  const [cvc, setCvc] = useState("");

  return (
    <>
    <section>
      <div className='absolute -z-10 w-full'>
        <picture >
          <source media='(min-width: 1024px' srcSet={bgDesktop}></source>
          <img src={bgMobile} alt='bgmobile' className='w-full lg:w-1/3'/>
        </picture>
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto'>
        <div className='mt-10 mx-5 lg:grid lg:grid-cols-1 lg:gap-8'>
        <article className='front-card p-5'>
            <img src={logo} alt='logo' className='w-28'></img>
            <div>
              <h2 className='text-white text-xl  mb-6 tracking-widest'>{cardNumber}</h2>
              <ul className='flex items-center justify-between'>
                <li className='text-white uppercase text-base lg:text-xl tracking-widest'>{name}</li>
                <li className='text-white text-base lg:text-xl tracking-widest'>
                  {format(new Date(date), "MM/yy")}
                </li>
              </ul>
            </div>
        </article>
        <article className='back-card relative lg:ml-20'>
          <p className='absolute right-10  text-l text-black tracking-widest'>{cvc}</p>
        </article>
        </div>

        <div>
        {!confirmed && <form className='flex flex-col justify-center gap-8 lg:h-screen max-w-lg'>
            <div>
              <label htmlFor='cardholder_name'>Cardholder Name</label>
              <input type='text'
               name='cardholder_name' 
               id='cardholder_name' 
               required 
               placeholder='Enter your Name'
               value={name}
               onChange={(e) => setName(e.target.value)}
               ></input>
            </div>
            <div>
              <label htmlFor='card-number'>Card Number</label>
              <input type='text'
               name='card-number' 
               id='card-number' 
               required 
               placeholder='e.g 1234 5678 9012 3456'
               maxLength={19}
               value={cardNumber
                .replace(/\s/g,"")
                .replace(/(\d{4})/g, "$1 ")
                .trim()}
               onChange={(e) => setCardNumber(e.target.value)}
               ></input>
               
            </div>
            <article className='flex items-center justify-between gap-8'>
            <div className='flex-1'>
              <label htmlFor='expiry-date'>Exp. Date MM/YY</label>
              <input type='month'
               name='expiry-date' 
               id='expiry-date' 
               required 
               placeholder='MM/YY'
               value={date}
               onChange={(e) => setDate(e.target.value)}
               ></input>
               
            </div>
            <div className='flex-1'>
              <label htmlFor='cvc'>CVC</label>
              <input type='text'
               name='cvc' 
               id='cvc' 
               required 
               placeholder='e.g 123'
               maxLength={3}
               value={cvc}
               onChange={(e) => setCvc(e.target.value)}
               ></input>
               
            </div>
            </article>
            <button type='submit' className='btn' onClick={() => setConfirmed(true)}>submit</button>
          </form>}
          {confirmed && <ThankYou setConfirmed = {setConfirmed}/>}
        </div>
      </div>
    </section>
    </>
  )
}

function ThankYou ({setConfirmed}){
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen max-w-lg mx-auto'>
    <img src={tick} className='block mx-auto'/>
     <h1 className='text-slate-800 text-3xl my-6 uppercase text-center'>thank you</h1>
     <p className='text-slate-400 text-center'>We've added your card details</p>
     <button className='btn block mx-auto mt-10 w-full' onClick={() => setConfirmed(false)}>continue</button>
    </div>
    </>
  )
}


