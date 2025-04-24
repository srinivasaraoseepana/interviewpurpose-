import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { step2Schema } from "../schemas/step2Schema";
import { z } from "zod";
import { RootState } from "../redux/store";
import { updateForm } from "../redux/formSlice";

const Step2 = ({ next, prev }: { next: () => void; prev: () => void }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      income: formData.income,
      businessName: formData.businessName,
    },
  });

  const onSubmit = (data: z.infer<typeof step2Schema>) => {
    dispatch(updateForm(data));
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formData.userType === "salaried" && (
        <div>
          <input
            type="number"
            {...register("income", { valueAsNumber: true })}
            placeholder="Monthly Income"
          />
          {errors.income && <p>{errors.income.message}</p>}
        </div>
      )}

      {formData.userType === "self-employed" && (
        <div>
          <input {...register("businessName")} placeholder="Business Name" />
          {errors.businessName && <p>{errors.businessName.message}</p>}
        </div>
      )}

      <button type="button" onClick={prev}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
