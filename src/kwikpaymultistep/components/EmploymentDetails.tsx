import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const employmentSchema = z.object({
  employmentType: z.enum(["salaried", "self-employed"], {
    required_error: "Select employment type",
  }),
  companyOrBusiness: z.string().min(2, "Enter valid company or business name"),
});

type EmploymentForm = z.infer<typeof employmentSchema>;

const EmploymentDetails = ({ next }: { next: () => void }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EmploymentForm>({
    resolver: zodResolver(employmentSchema),
    defaultValues: {
      employmentType: formData.employmentType 
    },
  });

  const onSubmit = (data: EmploymentForm) => {
    dispatch(updateForm(data));
    next();
  };

  const employmentType = watch("employmentType");

  const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff",
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
      <h2>Employment Details</h2>

      <select {...register("employmentType")} style={styles.select}>
        <option value="">Select Employment Type</option>
        <option value="salaried">Salaried</option>
        <option value="self-employed">Self-employed</option>
      </select>
      {errors.employmentType && (
        <p style={styles.error}>{errors.employmentType.message}</p>
      )}

      <input
        {...register("companyOrBusiness")}
        placeholder={
          employmentType === "self-employed" ? "Business Name" : "Company Name"
        }
        style={styles.input}
      />
      {errors.companyOrBusiness && (
        <p style={styles.error}>{errors.companyOrBusiness.message}</p>
      )}

      <button type="submit" style={styles.button}>
        Next
      </button>
    </form>
  );
};

export default EmploymentDetails;
