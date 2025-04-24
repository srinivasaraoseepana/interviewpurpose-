// import React, { useState } from "react";

// type Props = {};

// const StateCapital = (props: Props) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const [successMsg, setSuccessMsg] = useState("");
//   const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };
//   const handleErrors = () => {
//     const errorsList = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     };

//     if (!formData.firstName.trim()) {
//       errorsList.firstName = "firstName is required";
//     }
//     if (!formData.lastName.trim()) {
//       errorsList.lastName = "lastname is required";
//     }
//     if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
//       errorsList.email = "email must be valid";
//     }
//     if (formData.password.length < 6 || formData.password.length > 12) {
//       errorsList.password = "password must be 6 to 12 charastics";
//     }
//     setErrors(errorsList);

//     return Object.values(errorsList).every((err) => err === "");
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("what is this error handling", handleErrors());

//     const isValid = handleErrors();
//     if (isValid === false) {
//       return;
//     }
//     setSuccessMsg("successfully send dta");
//   };
//   const commonInpStyles = {
//     padding: 6,
//     fontWeight: "bold",
//     fontSize: 14,
//     margin: 10,
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         width: 200,
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <input
//           style={{ ...commonInpStyles }}
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           placeholder="firstName"
//           onChange={handleFormData}
//         />
//         {errors.firstName && (
//           <p style={{ color: "red" }}>{errors.firstName} </p>
//         )}

//         <input
//           style={{ ...commonInpStyles }}
//           type="text"
//           placeholder="lastName"
//           onChange={handleFormData}
//           value={formData.lastName}
//           name="lastName"
//         />
//         {errors.lastName && <p style={{ color: "red" }}>{errors.lastName} </p>}

//         <input
//           style={{ ...commonInpStyles }}
//           type="text"
//           placeholder="email"
//           name="email"
//           onChange={handleFormData}
//           value={formData.email}
//         />
//         {errors.email && <p style={{ color: "red" }}>{errors.email} </p>}

//         <input
//           style={{ ...commonInpStyles }}
//           type="password"
//           placeholder="password"
//           name="password"
//           onChange={handleFormData}
//           value={formData.password}
//         />
//         {errors.password && <p style={{ color: "red" }}>{errors.password} </p>}
//         <button type="submit">submit</button>
//       </form>
//       {successMsg && <p style={{ color: "green" }}>{successMsg} </p>}
//     </div>
//   );
// };

// export default StateCapital;

import React, { useState } from "react";

type Address = {
  village: string;
  mandal: string;
  district: string;
  state: string;
};

type FormData = {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  currentCTC: string;
  expectedCTC: string;
  gender: string;
  religion: string;
  country: string;
  interests: string[];
  presentAddress: Address;
  permanentAddress: Address;
};

const genderOptions = [
  "Male",
  "Female",
  "Other",
  "Transgender",
  "Prefer not to say",
  "Non-binary",
];

const religionOptions = ["Hindu", "Christian", "Muslim", "Other"];

const countryList = ["India", "USA", "UK", "Canada", "Australia", "Germany"];

const interestOptions = ["Music", "Sports", "Reading", "Coding", "Travel"];

const initialAddress = { village: "", mandal: "", district: "", state: "" };

const FormComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    currentCTC: "",
    expectedCTC: "",
    gender: "",
    religion: "",
    country: "",
    interests: [],
    presentAddress: { ...initialAddress },
    permanentAddress: { ...initialAddress },
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "interests") {
      const updated = checked
        ? [...formData.interests, value]
        : formData.interests.filter((item) => item !== value);
      setFormData((prev) => ({ ...prev, interests: updated }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    addressType: "presentAddress" | "permanentAddress"
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [addressType]: {
        ...prev[addressType],
        [name]: value,
      },
    }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.userName.trim()) newErrors.userName = "User name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.phoneNumber.match(/^\+\d{1,4}\d{7,10}$/))
      newErrors.phoneNumber = "Phone must start with country code (e.g., +91)";
    if (!formData.currentCTC) newErrors.currentCTC = "Current CTC is required";
    if (!formData.expectedCTC)
      newErrors.expectedCTC = "Expected CTC is required";
    if (!formData.gender) newErrors.gender = "Select a gender";
    if (!formData.religion) newErrors.religion = "Select a religion";
    if (!formData.country) newErrors.country = "Select a country";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`what is validate data {true or false}`, validate());

    if (!validate()) return;

    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <input
        name="userName"
        placeholder="User Name"
        value={formData.userName}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.userName && (
        <span style={styles.errorText}>{errors.userName}</span>
      )}

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.email && <span style={styles.errorText}>{errors.email}</span>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.password && (
        <span style={styles.errorText}>{errors.password}</span>
      )}

      <input
        name="phoneNumber"
        placeholder="Phone (+91...)"
        value={formData.phoneNumber}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.phoneNumber && (
        <span style={styles.errorText}>{errors.phoneNumber}</span>
      )}

      <input
        name="currentCTC"
        placeholder="Current CTC"
        value={formData.currentCTC}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.currentCTC && (
        <span style={styles.errorText}>{errors.currentCTC}</span>
      )}

      <input
        name="expectedCTC"
        placeholder="Expected CTC"
        value={formData.expectedCTC}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.expectedCTC && (
        <span style={styles.errorText}>{errors.expectedCTC}</span>
      )}

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        style={styles.select}
      >
        <option value="">Select Gender</option>
        {genderOptions.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
      {errors.gender && <span style={styles.errorText}>{errors.gender}</span>}

      <select
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        style={styles.select}
      >
        <option value="">Select Religion</option>
        {religionOptions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      {errors.religion && (
        <span style={styles.errorText}>{errors.religion}</span>
      )}

      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        style={styles.select}
      >
        <option value="">Select Country</option>
        {countryList.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {errors.country && <span style={styles.errorText}>{errors.country}</span>}

      <fieldset style={styles.checkboxGroup}>
        <legend style={styles.sectionTitle}>Interests</legend>
        {interestOptions.map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              name="interests"
              value={interest}
              checked={formData.interests.includes(interest)}
              onChange={handleChange}
            />
            {interest}
          </label>
        ))}
      </fieldset>

      <h4 style={styles.sectionTitle}>Present Address</h4>
      {Object.keys(initialAddress).map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={formData.presentAddress[field as keyof Address]}
          onChange={(e) => handleAddressChange(e, "presentAddress")}
          style={styles.input}
        />
      ))}

      <h4 style={styles.sectionTitle}>Permanent Address</h4>
      {Object.keys(initialAddress).map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={formData.permanentAddress[field as keyof Address]}
          onChange={(e) => handleAddressChange(e, "permanentAddress")}
          style={styles.input}
        />
      ))}

      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default FormComponent;

const styles = {
  formContainer: {
    display: "grid",
    gap: 10,
    maxWidth: 500,
    margin: "0 auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "5px",
  },
  errorText: {
    color: "red",
    fontSize: "12px",
  },
  sectionTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};
