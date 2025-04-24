import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

type OtpForm = z.infer<typeof otpSchema>;

const OtpStep = ({ next }: { next: () => void }) => {
  const dispatch = useDispatch();
  const formDAta = useSelector((state: RootState) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpForm>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: formDAta.otp },
  });

  const onSubmit = (data: OtpForm) => {
    dispatch(updateForm({ otp: data.otp }));
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
    resend: {
      color: "#0984e3",
      cursor: "pointer",
      fontSize: "13px",
      textAlign: "right" as const,
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.container}>
      <h2>Enter OTP</h2>
      <input
        {...register("otp")}
        placeholder="Enter 6-digit OTP"
        style={styles.input}
        maxLength={6}
      />
      {errors.otp && <p style={styles.error}>{errors.otp.message}</p>}

      <div style={styles.resend}>Resend OTP?</div>
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default OtpStep;
