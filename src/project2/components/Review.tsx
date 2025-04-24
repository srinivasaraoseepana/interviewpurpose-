import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { resetForm } from "../redux/formSlice";

const Review = ({ prev }: { prev: () => void }) => {
  const form = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("Submitted Data:", form);
    dispatch(resetForm());
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2>Review Your Info</h2>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <button onClick={prev}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Review;
