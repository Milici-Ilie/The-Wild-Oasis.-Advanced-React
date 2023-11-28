/* eslint-disable */
import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin } from "../../services/apiCabins";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

//🚠🚠[CREATING NEW CABIN]🚠🚠
function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm(); //🦉🦉[REACT HOOK FORM]🦉🦉 here we are calling the REACT HOOK after we install it, check bellow in the <Input/> the {...register("name")}, "name" is equal with the "id="name"" from the same code, this is how we register all the Inputs data in to our Form ny using REACT HOOK FORM, and implementing this "...register("99999")", also check that all the </Inputs> and </Textarea> has this "...register..."🦉🦉[REACT HOOK FORM]🦉🦉

  const { errors } = formState; //🌋🌋[FORM ERRORS]🌋🌋 another HOOK "formState" with the roll of taking the "errors"////////////  we take the errors from the Input Fields/console and display them in our App. // ====// now go to "return" 👇 and check in the <FormRow> for {errors?.name ... etc} 🌋🌋[FORM ERRORS]🌋🌋
  // console.log(errors);

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  }); //🚠🚠[CREATING NEW CABIN]🚠🚠 "createCabin" is a function from "apiCabins.js" that have the roll to create a new cabin, after we created this function we need to implement those data's in the function bellow "onSubmit", the "reset()" function si imported from the "useForm" and will clear all the fields after the cabin was created 🚠🚠[CREATING NEW CABIN]🚠🚠

  function onSubmit(data) {
    mutate(data);
  } //🦉🦉[REACT HOOK FORM]🦉🦉

  function onError(errors) {
    console.log(errors);
  } //🌋🌋[FORM ERRORS]🌋🌋 so this function will be called if the "onSubmit" function from above 👆 will have an error, check the "return" => <Form onSubmit={handleSubmit( ... here ... )} 👇 🌋🌋[FORM ERRORS]🌋🌋

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* 🦉🦉[REACT HOOK FORM]🦉🦉 here "onSubmit" will be called every time when the user press the "Edit cabin" button, when he wants to create a cabin/new content. This will call the "handleSubmit" that will call our function "onSubmit" 🦉🦉[REACT HOOK FORM]🦉🦉 */}
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          disabled={isCreating} //this will reset the Input Field
          {...register("name", {
            required: "This field is required",
          })} //🌋🌋[FORM ERRORS]🌋🌋 so here in the "...register" we can add a second argument, in our case is "required" where we want to tell the user that the field need to be filled, you can checkk al the {...register} from bellow, all of them have this "required" argument, ofc if is need it to the App  🌋🌋[FORM ERRORS]🌋🌋
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
        {/* 🌋🌋[FORM ERRORS]🌋🌋the "name?." is taken from the {... register("name")}, from here, so if the "error" exist than the "&&" and method will display the <Error> .... </Error> message 🌋🌋[FORM ERRORS]🌋🌋 */}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating} //this will reset the Input Field
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            }, //🌋🌋[FORM ERRORS]🌋🌋here, in the {...register} we can specifie the "min:{...}" value, but also the "max:{...}" value if is need it, and also a message like we did it. ==== check also the "price" from bellow for another exemple 🌋🌋[FORM ERRORS]🌋🌋
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating} //this will reset the Input Field
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            }, //🌋🌋[FORM ERRORS]🌋🌋
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          disabled={isCreating} //this will reset the Input Field
          defaultValue={0} //here we want to make sure that the "discount" is sett by default to "0"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })} //🌋🌋[FORM ERRORS]🌋🌋 here we sett the "discount" to display an error if he is greater than the "regularPrice", "getValues" is a HOOK from "React Query" that also needs to be included in the function to take effect, "CreateCabinForm" from above, otherwise the App will display the error string 👆 🌋🌋[FORM ERRORS]🌋
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          disabled={isCreating} //this will reset the Input Field
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          disabled={isCreating} //this will reset the Input Field accept="image/*"
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
