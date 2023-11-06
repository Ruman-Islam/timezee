import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Form = ({ arrayData, buttonText }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async () => {
    return toast.error("CRUD operation disabled!");
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(submitHandler)}>
      {arrayData.map(
        (
          { label, type, placeholder, defaultValue, requiredMessage },
          index
        ) => (
          <div
            className="mb-4 flex justify-between items-center w-full"
            key={index}
          >
            <label htmlFor={label} className="w-32 text-xs font-semibold">
              {label}*
            </label>
            <div className="flex-grow">
              <input
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
                id={label}
                {...register(label, {
                  required: { requiredMessage },
                })}
              />
              {errors[label] && (
                <div className="text-error text-xs mt-0.5 text-right">
                  {errors[label].message}
                </div>
              )}
            </div>
          </div>
        )
      )}

      <div className="text-center text-xs text-white uppercase bg-amazonBlue hover:bg-success duration-150 my-4">
        <button className="h-[4vh] flex justify-center items-center gap-x-1 uppercase mx-auto w-full">
          <span>{buttonText}</span>
          <ChevronRightIcon />
        </button>
      </div>
    </form>
  );
};

export default Form;
