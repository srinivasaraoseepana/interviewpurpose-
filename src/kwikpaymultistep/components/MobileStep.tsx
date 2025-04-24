import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const mobileSchema = z.object({
  mobile: z.string().length(10, "Mobile must be 10 digits"),
});

type MobileForm = z.infer<typeof mobileSchema>;

const MobileStep = ({ next }: { next: () => void }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MobileForm>({
    resolver: zodResolver(mobileSchema),
    defaultValues: {
      mobile: formData.mobile || "",
    },
  });

  const onSubmit = (data: MobileForm) => {
    dispatch(updateForm({ mobile: data.mobile }));
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
      <h2>Verify your mobile number</h2>
      <input
        {...register("mobile")}
        placeholder="Enter 10-digit Mobile Number"
        style={styles.input}
        maxLength={10}
      />
      {errors.mobile && <p style={styles.error}>{errors.mobile.message}</p>}

      <button type="submit" style={styles.button}>
        Proceed
      </button>
    </form>
  );
};

export default MobileStep;
