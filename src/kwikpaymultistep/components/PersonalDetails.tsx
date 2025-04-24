import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const personalSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  dob: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
});

type PersonalForm = z.infer<typeof personalSchema>;

const PersonalDetails = ({ next }: { next: () => void }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalForm>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      fullName: formData.fullName,
      dob: formData.dob,
    },
  });

  const onSubmit = (data: PersonalForm) => {
    dispatch(updateForm(data));
    next();
  };

  const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#00b894",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    error: { color: "red", fontSize: "12px" },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.container}>
      <h2>Personal Details</h2>
      <input
        {...register("fullName")}
        placeholder="Full Name"
        style={styles.input}
      />
      {errors.fullName && <p style={styles.error}>{errors.fullName.message}</p>}

      <input
        type="date"
        {...register("dob")}
        placeholder="Date of Birth"
        style={styles.input}
      />
      {errors.dob && <p style={styles.error}>{errors.dob.message}</p>}

      <button type="submit" style={styles.button}>
        Next
      </button>
    </form>
  );
};

export default PersonalDetails;
