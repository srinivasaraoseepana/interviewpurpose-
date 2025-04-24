import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from 'react-redux';
import { updateForm } from '../redux/formSlice';

const addressSchema = z.object({
  addressLine: z.string().min(5, "Address is too short"),
  city: z.string().min(2, "Enter valid city"),
  state: z.string().min(2, "Enter valid state"),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
});

type AddressForm = z.infer<typeof addressSchema>;

const AddressStep = ({ next }: { next: () => void }) => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressForm>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = (data: AddressForm) => {
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
      <h2>Address Details</h2>

      <input
        {...register("addressLine")}
        placeholder="Address Line"
        style={styles.input}
      />
      {errors.addressLine && (
        <p style={styles.error}>{errors.addressLine.message}</p>
      )}

      <input {...register("city")} placeholder="City" style={styles.input} />
      {errors.city && <p style={styles.error}>{errors.city.message}</p>}

      <input {...register("state")} placeholder="State" style={styles.input} />
      {errors.state && <p style={styles.error}>{errors.state.message}</p>}

      <input
        {...register("pincode")}
        placeholder="Pincode"
        style={styles.input}
        maxLength={6}
      />
      {errors.pincode && <p style={styles.error}>{errors.pincode.message}</p>}

      <button type="submit" style={styles.button}>
        Next
      </button>
    </form>
  );
};

export default AddressStep;
