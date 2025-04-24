import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { step1Schema } from "../schemas/step1Schema";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { RootState } from "../redux/store";

const Step1 = ({ next }: { next: () => void }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      name: formData.name,
      email: formData.email,
      userType: formData.userType,
    },
  });

  const onSubmit = (data: z.infer<typeof step1Schema>) => {
    dispatch(updateForm(data));
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <select {...register("userType")}>
        <option value="">Select Type</option>
        <option value="salaried">Salaried</option>
        <option value="self-employed">Self-employed</option>
      </select>
      {errors.userType && <p>{errors.userType.message}</p>}

      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;