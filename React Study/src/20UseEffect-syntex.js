
import { useEffect } from "react";

// UseEffect() ke sath ap two peramiter ke sathe work kroge.
// function with dependency 

useEffect(()=>{})              //  one peramiter(fun) ke sathe bhi work kar sak te hai.
useEffect(()=>{},[])           // function with empty-dependency array (use two peramiter) ke sathe bhi work kar sak te hai.
useEffect(()=>{},[1,2,3])    // function with value ke sathe bhi work kar sak te ho.

useEffect(()=>{}) // ap useEffect() ko direct likha sak te ahi. usko asing karne ki jarurat nahi paditi.

//  -:uses:-
 //=> kisi bhi event ko hendle karna hai
 //=> main perpuse fetch data from server (without useEffect() ap server se data fetch nahi kar sak teho.)