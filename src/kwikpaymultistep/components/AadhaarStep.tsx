import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const aadhaarSchema = z.object({
  aadhaar: z.string().length(12, "Aadhaar must be 12 digits"),
});

type AadhaarForm = z.infer<typeof aadhaarSchema>;

const AadhaarStep = ({ next }: { next: () => void }) => {
  const formData = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AadhaarForm>({
    resolver: zodResolver(aadhaarSchema),
    defaultValues: {
      aadhaar: formData.aadhaar || "",
    },
  });

  const onSubmit = (data: AadhaarForm) => {
    dispatch(updateForm({ aadhaar: data.aadhaar }));
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
      <h2>Complete your eKYC</h2>
      <input
        {...register("aadhaar")}
        placeholder="Enter 12-digit Aadhaar Number"
        style={styles.input}
        maxLength={12}
      />
      {errors.aadhaar && <p style={styles.error}>{errors.aadhaar.message}</p>}

      <button type="submit" style={styles.button}>
        Proceed
      </button>
    </form>
  );
};

export default AadhaarStep;
