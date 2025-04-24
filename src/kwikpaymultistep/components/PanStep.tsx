import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const panSchema = z.object({
  pan: z.string().length(10, "PAN must be 10 characters"),
});

type PanForm = z.infer<typeof panSchema>;

const PanStep = ({ next }: { next: () => void }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PanForm>({
    resolver: zodResolver(panSchema),
    defaultValues: { pan: formData.pan || "" },
  });

  const onSubmit = (data: PanForm) => {
    dispatch(updateForm({ pan: data.pan }));
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
      textTransform: "uppercase" as const,
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
      <h2>Enter your PAN</h2>
      <input
        {...register("pan")}
        placeholder="Enter 10-digit PAN"
        style={styles.input}
        maxLength={10}
      />
      {errors.pan && <p style={styles.error}>{errors.pan.message}</p>}

      <button type="submit" style={styles.button}>
        Next
      </button>
    </form>
  );
};

export default PanStep;
