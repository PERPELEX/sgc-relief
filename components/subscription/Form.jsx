import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div className="mb-8 text-center flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-bold text-[#22C55E] ">
          Subscription Form
        </h2>
        <p className="text-gray-600 font-light">Fill the form to Subscribe</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto w-[100%]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your age"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              required
            >
              <option value="" className="text-gray-600">
                Select Gender
              </option>
              <option value="male" className="text-black">
                Male
              </option>
              <option value="female" className="text-black">
                Female
              </option>
              <option value="other" className="text-black">
                Other
              </option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white p-3 rounded-lg hover:bg-[#1da44e] transition"
          >
            Submit
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-600 text-center">
            Submitted successfully. <br /> We will get back to you.
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
