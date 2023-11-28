/* eslint-disable */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/   === // 🉑🉑[SIGN UP ACCOUNTS]🉑🉑 this "REGEX" email regex will check if the email is a valid email adress.  So down in the "email" <Input/> we must add the "pattern" wich will contain 2 properties: "value" and "message", please check bellow 👇

function SignupForm() {
  const { signup, isLoading } = useSignup(); //📶📶[USER SIGN UP]📶📶 calling the data from "useSignup" HOOK
  const { register, formState, getValues, handleSubmit, reset } = useForm(); //🉑🉑[SIGN UP ACCOUNTS]🉑🉑 //📶📶[USER SIGN UP]📶📶 in this destructured variable we need for our [USER SIGN UP] to include here the "reset", check the function "onSubmit" from bellow 👇
  const { errors } = formState; //🉑🉑[SIGN UP ACCOUNTS]🉑🉑

  //📶📶[USER SIGN UP]📶📶
  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset });
  } //"onSettled" means that will reset everything no matter what action was, a succes or error
  //📶📶[USER SIGN UP]📶📶

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
        {/* 🉑🉑[SIGN UP ACCOUNTS]🉑🉑 in all the <Input's/> this one and the others from bellow we added "{...register(...etc...)}", very important */}
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
            // 🉑🉑[SIGN UP ACCOUNTS]🉑🉑 checking for a valide email adress, "pattern"
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
            // 🉑🉑[SIGN UP ACCOUNTS]🉑🉑 including a rulle for minimum of 8 characters for passwords, "minLength"
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
            // 🉑🉑[SIGN UP ACCOUNTS]🉑🉑 "validate" this is how we check if the repetead password is equal with thw "password" itself
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
