// import React, { useState } from "react";

// type Props = {};
// interface FormData {
//   userName: string;
//   email: string;
//   password: string;
//   phoneNumber: string;
//   currentCTC: "";
//   expectedCTC: "";
//   gender: "";
//   religion: "";
//   country: "";
//   interests: string[];
//   presentAddress: Address;
//   permanentAddress: Address;
// }
// interface Address {
//   village: string;
//   mandal: string;
//   district: string;
//   state: string;
// }

// const FormData = (props: Props) => {
//   const initialAddress = {
//     village: "",
//     mandal: "",
//     district: "",
//     state: "",
//   };
//   const genderOptions = [
//     "Male",
//     "Female",
//     "Other",
//     "Transgender",
//     "Prefer not to say",
//     "Non-binary",
//   ];
//   const religionOptions = ["Hindu", "Christian", "Muslim", "Other"];
//   const countryList = ["India", "USA", "UK", "Canada", "Australia", "Germany"];
//   const interestOptions = ["Music", "Sports", "Reading", "Coding", "Travel"];

//   const [formData, setFormData] = useState<FormData>({
//     userName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//     currentCTC: "",
//     expectedCTC: "",
//     gender: "",
//     religion: "",
//     country: "",
//     interests: [],
//     presentAddress: { ...initialAddress },
//     permanentAddress: { ...initialAddress },
//   });
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errors, setErrors] = useState<Partial<FormData>>({});

//   const handleInputFrom = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox" && name === "interests") {
//       const updated = checked
//         ? [...formData.interests, value]
//         : formData.interests.filter((item) => item !== value);
//       setFormData((prev) => {
//         return {
//           ...prev,
//           interests: updated,
//         };
//       });
//     } else {
//       setFormData((prev) => {
//         return { ...prev, [name]: type === "checkbox" ? checked : value };
//       });
//     }
//   };

//   const handleChangeAddress = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     addressType: "present" | "permenent"
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [addressType]: {
//         ...prev[addressType],
//         [name]: value,
//       },
//     }));
//   };

//   const validateErrors = () => {
//     const newErrors: Partial<FormData> = {};
//     if (!formData.userName.trim()) {
//       newErrors.userName = "userName is required";
//     }
//     if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
//       newErrors.email = "email must be valid";
//     }
//     if (formData.password.length < 6 || formData.password.length > 12) {
//       newErrors.password = "password is 6 to 12 char";
//     }
//     setErrors(newErrors);
//     return Object.values
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     isValidate = validateErrors();
//     console.log(`what is validateError function returns`, isValidate);

//     if (!isValidate) {
//       //what is this meaning ?
//       return;
//     }
//     setSuccessMsg("you are submitted successfully...");
//   };
//   const errorStyles = {
//     color: "red",
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="userName"
//           value={formData.userName}
//           onChange={handleInputFrom}
//           name="userName"
//         />
//         {errors?.userName && (
//           <p style={{ ...errorStyles }}> {errors?.userName} </p>
//         )}
//         <input
//           type="text"
//           placeholder="email"
//           value={formData.email}
//           onChange={handleInputFrom}
//           name="email"
//         />
//         {errors?.email && <p style={{ ...errorStyles }}> {errors?.email} </p>}
//         <input
//           type="password"
//           placeholder="password"
//           value={formData.password}
//           onChange={handleInputFrom}
//           name="password"
//         />
//         {errors?.password && (
//           <p style={{ ...errorStyles }}> {errors?.password} </p>
//         )}
//         <input
//           type="text"
//           placeholder="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleInputFrom}
//         />
//         {errors?.phoneNumber && (
//           <p style={{ ...errorStyles }}> {errors?.phoneNumber} </p>
//         )}
//         <input
//           type="text"
//           placeholder="currentCTC"
//           value={formData.currentCTC}
//           name="currentCTC"
//           onChange={handleInputFrom}
//         />
//         {errors?.currentCTC && (
//           <p style={{ ...errorStyles }}> {errors?.currentCTC} </p>
//         )}

//         <input
//           type="text"
//           placeholder="expectedCTC"
//           value={formData.expectedCTC}
//           name="expectedCTC"
//           onChange={handleInputFrom}
//         />
//         {errors?.expectedCTC && (
//           <p style={{ ...errorStyles }}> {errors?.expectedCTC} </p>
//         )}

//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleInputFrom}
//         >
//           <option value="">select Gender</option>
//           {genderOptions.map((gender) => {
//             return (
//               <option key={gender} value={gender}>
//                 {gender}
//               </option>
//             );
//           })}
//         </select>
//         {errors.gender && (
//           <span style={{ ...errorStyles }}>{errors.gender} </span>
//         )}

//         <select
//           name="religion"
//           value={formData.religion}
//           onChange={handleInputFrom}
//         >
//           <option value="">select Religion </option>
//           {religionOptions.map((religion) => {
//             return (
//               <option key={religion} value={religion}>
//                 {religion}
//               </option>
//             );
//           })}
//         </select>
//         {errors?.religion && (
//           <span style={{ ...errorStyles }}>{errors?.religion} </span>
//         )}

//         <select
//           name="country"
//           onChange={handleInputFrom}
//           value={formData.country}
//         >
//           <option value="">-- select Country-- </option>
//           {countryList.map((country) => {
//             return (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             );
//           })}
//         </select>
//         {errors?.country && (
//           <span style={{ ...errorStyles }}>{errors?.country} </span>
//         )}

//         <fieldset>
//           <legend>Interests</legend>
//           {interestOptions.map((interest) => {
//             return (
//               <label key={interest}>
//                 <input
//                   type="checkbox"
//                   value={interest}
//                   checked={formData.interests.includes(interest)}
//                   onChange={handleInputFrom}
//                   name="interests"
//                 />
//                 {interest}
//               </label>
//             );
//           })}
//         </fieldset>
//         <h4>present Address</h4>

//         {Object.keys(initialAddress).map((address) => {
//           // [`village`, 'mandal' 'district' 'state']
//           return (
//             <label key={address}>
//               <input
//                 type="text"
//                 name={address}
//                 value={formData.presentAddress[address as keyof Address]}
//                 onChange={(e) => handleChangeAddress(e, "present")}
//               />
//             </label>
//           );
//         })}

//         <h4>-----permenent Address------</h4>
//         {Object.keys(initialAddress).map((address) => {
//           return (
//             <label key={address}>
//               <input
//                 type="text"
//                 value={formData.permanentAddress[address as keyof Address]}
//                 name={address}
//                 onChange={(e) => handleChangeAddress(e, "permenent")}
//               />
//             </label>
//           );
//         })}
//       </form>
//     </div>
//   );
// };

// /*
//           interests: [],
//           presentAddress: { ...initialAddress },
//           permanentAddress: { ...initialAddress }, */
// export default FormData;

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const genderOptions = ["Male", "Female", "Other"];
const religionOptions = ["Hindu", "Christian", "Muslim", "Other"];
const countryList = ["India", "USA", "UK"];
const interestOptions = ["Music", "Coding", "Reading"];

const schema = z.object({
  userName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 chars"),
  phoneNumber: z.string().regex(/^\+\d{1,4}\d{7,10}$/, "Invalid phone format"),
  currentCTC: z.string().min(1, "Required"),
  expectedCTC: z.string().min(1, "Required"),
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Select gender",
  }),
  religion: z.enum(["Hindu", "Christian", "Muslim", "Other"]),
  country: z.string().min(1, "Select a country"),
  interests: z.array(z.string()).min(1, "Choose at least one interest"),
});

type FormData = z.infer<typeof schema>;

const FormWithHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert("Form submitted!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.formContainer}>
      <input
        placeholder="User Name"
        {...register("userName")}
        style={styles.input}
      />
      {errors.userName && (
        <span style={styles.errorText}>{errors.userName.message}</span>
      )}

      <input placeholder="Email" {...register("email")} style={styles.input} />
      {errors.email && (
        <span style={styles.errorText}>{errors.email.message}</span>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        style={styles.input}
      />
      {errors.password && (
        <span style={styles.errorText}>{errors.password.message}</span>
      )}

      <input
        placeholder="Phone (+91...)"
        {...register("phoneNumber")}
        style={styles.input}
      />
      {errors.phoneNumber && (
        <span style={styles.errorText}>{errors.phoneNumber.message}</span>
      )}

      <input
        placeholder="Current CTC"
        {...register("currentCTC")}
        style={styles.input}
      />
      {errors.currentCTC && (
        <span style={styles.errorText}>{errors.currentCTC.message}</span>
      )}

      <input
        placeholder="Expected CTC"
        {...register("expectedCTC")}
        style={styles.input}
      />
      {errors.expectedCTC && (
        <span style={styles.errorText}>{errors.expectedCTC.message}</span>
      )}

      <div style={styles.sectionTitle}>Gender:</div>
      {genderOptions.map((g) => (
        <label key={g}>
          <input type="radio" value={g} {...register("gender")} />
          {g}
        </label>
      ))}
      {errors.gender && (
        <span style={styles.errorText}>{errors.gender.message}</span>
      )}

      <select {...register("religion")} style={styles.select}>
        {religionOptions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <select {...register("country")} style={styles.select}>
        <option value="">Select Country</option>
        {countryList.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {errors.country && (
        <span style={styles.errorText}>{errors.country.message}</span>
      )}

      <fieldset style={styles.checkboxGroup}>
        <legend style={styles.sectionTitle}>Interests</legend>
        {interestOptions.map((int) => (
          <label key={int}>
            <input type="checkbox" value={int} {...register("interests")} />
            {int}
          </label>
        ))}
        {errors.interests && (
          <span style={styles.errorText}>{errors.interests.message}</span>
        )}
      </fieldset>

      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default FormWithHookForm;
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
