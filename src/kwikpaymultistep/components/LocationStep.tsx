import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useDispatch } from 'react-redux';
// import { updateForm } from '../redux/formSlice';

const locationSchema = z.object({
  country: z.string().min(2, "Country is required"),
  state: z.string().min(2, "State is required"),
  district: z.string().min(2, "District is required"),
});

type LocationForm = z.infer<typeof locationSchema>;

const LocationStep = ({ next }: { next: () => void }) => {
  //   const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationForm>({
    resolver: zodResolver(locationSchema),
  });

  const onSubmit = (data: LocationForm) => {
    // dispatch(updateForm(data));
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
      <h2>Location Details</h2>

      <input
        {...register("country")}
        placeholder="Country"
        style={styles.input}
      />
      {errors.country && <p style={styles.error}>{errors.country.message}</p>}

      <input {...register("state")} placeholder="State" style={styles.input} />
      {errors.state && <p style={styles.error}>{errors.state.message}</p>}

      <input
        {...register("district")}
        placeholder="District"
        style={styles.input}
      />
      {errors.district && <p style={styles.error}>{errors.district.message}</p>}

      <button type="submit" style={styles.button}>
        Next
      </button>
    </form>
  );
};

export default LocationStep;
