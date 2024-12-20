// import React, { useState } from "react";
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";

// function SubscribeCard() {
//   const [cardNumber, setCardNumber] = useState("");
//   const [name, setName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [focus, setFocus] = useState("");

//   return (
//     <div className="min-h-screen flex items-center justify-center  p-4">
//       <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row-reverse gap-8 max-w-4xl w-full">
//         {/* Credit Card Preview */}
//         <div className="flex-1 flex items-center justify-center">
//           <Cards
//             number={cardNumber}
//             name={name}
//             expiry={expiry}
//             cvc={cvc}
//             focused={focus}
//           />
//         </div>

//         {/* Form Section */}
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold text-[#22C55E]">
//             SGC Monthly Subscription
//           </h1>
//           <form className="mt-6 space-y-4">
//             <div>
//               <label className="block text-gray-700 font-medium">
//                 Card Number
//               </label>
//               <input
//                 type="text"
//                 name="number"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//                 onFocus={(e) => setFocus(e.target.name)}
//                 placeholder="1234 5678 9012 3456"
//                 maxLength="16"
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">
//                 Cardholder Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 onFocus={(e) => setFocus(e.target.name)}
//                 placeholder="Jonathan Michael"
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">
//                 Expiry Date
//               </label>
//               <input
//                 type="text"
//                 name="expiry"
//                 value={expiry}
//                 onChange={(e) => setExpiry(e.target.value)}
//                 onFocus={(e) => setFocus(e.target.name)}
//                 placeholder="MM/YY"
//                 maxLength="5"
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">CVC</label>
//               <input
//                 type="text"
//                 name="cvc"
//                 value={cvc}
//                 onChange={(e) => setCvc(e.target.value)}
//                 onFocus={(e) => setFocus(e.target.name)}
//                 placeholder="123"
//                 maxLength="3"
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-black"
//               />
//             </div>
//             <button
//               type="button"
//               className="w-full bg-[#22C55E] text-white p-3 rounded-lg hover:bg-[#D0312D] transition-all ease-in-out duration-200"
//             >
//               Pay Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SubscribeCard;
