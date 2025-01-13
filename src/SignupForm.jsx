import { useState } from "react";
import "./SignupForm.css";
export default function SignupForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    terms: "",
  });
  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setForm((currData) => {
      return { ...currData, [changeField]: newValue };
    });
  };
  const submitForm = () => {
    console.log(
      form.firstname,
      form.lastname,
      form.email,
      form.gender,
      form.terms
    );
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
      <div>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value={"female"}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="check"
          value="agreed"
          name="terms"
          onChange={handleChange}
        />
        <label htmlFor="check">Agree to terms</label>
      </div>

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
