import { useState } from "react";
import "./SignupForm.css";
export default function SignupForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setForm((currData) => {
      return { ...currData, [changeField]: newValue };
    });
  };
  const submitForm = () => {
    console.log(form.firstname, form.lastname, form.email);
  };

  return (
    <div className="signup">
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="firstname"
        value={form.firstname}
        onChange={handleChange}
        name="firstname"
        id="firstname"
        className="input"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={form.lastname}
        onChange={handleChange}
        id="lastname"
        name="lastname"
        className="input"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
        id="email"
        name="email"
        className="input"
      />

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
