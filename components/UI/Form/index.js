import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomButton from "../Button";
import Input from "../Input";

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
          <Input
            key={index}
            id={label}
            type={type}
            name={label}
            label={label}
            placeholder={placeholder}
            defaultValue={defaultValue}
            register={register}
            errors={errors}
            validationSchema={{
              required: requiredMessage,
            }}
            className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
          />
        )
      )}

      <div className="text-center text-xs text-white uppercase bg-amazonBlue hover:bg-success duration-150 my-4">
        <CustomButton className="h-[4vh] flex justify-center items-center gap-x-1 uppercase mx-auto w-full">
          <span>{buttonText}</span>
          <ChevronRightIcon />
        </CustomButton>
      </div>
    </form>
  );
};

export default Form;
