/* eslint-disable */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

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
    mutate({ ...data, image: data.image[0] }); ///📷📷[UPLOADING IMAGES]📷📷 here we destructured the data's that we are taking from the console and select what we need ///// also notice that the name of "image: ..." is from the "Supabase", meaning that those have the same name, that's why is called "name", bcs we also called it "name" in "Supabase" ==== also go and check the "apiCabins.js" file /📷📷[UPLOADING IMAGES]📷📷/📷📷[UPLOADING IMAGES]📷📷
  } //🦉🦉[REACT HOOK FORM]🦉🦉

  function onError(errors) {
    // console.log(errors);
  } //🌋🌋[FORM ERRORS]🌋🌋 so this function will be called if the "onSubmit" function from above 👆 will have an error, check the "return" => <Form onSubmit={handleSubmit( ... here ... )} 👇 🌋🌋[FORM ERRORS]🌋🌋

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* 🦉🦉[REACT HOOK FORM]🦉🦉 here "onSubmit" will be called every time when the user press the "Edit cabin" button, when he wants to create a cabin/new content. This will call the "handleSubmit" that will call our function "onSubmit" 🦉🦉[REACT HOOK FORM]🦉🦉 */}

      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating} //this will reset the Input Field
          {...register("name", {
            required: "This field is required",
          })}
        />
        {/* this code is reusable, to see the full lesson/aplication go to "CreateCabinForm2" */}
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            }, //🌋🌋[FORM ERRORS]🌋🌋
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0} //here we want to make sure that the "discount" is sett by default to "0"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          ///📷📷[UPLOADING IMAGES]📷📷 type="file" // go and check the "FileInput.jsx" to see how to implement the "type" /📷📷[UPLOADING IMAGES]📷📷
          {...register("image", {
            required: "This field is required",
          })}
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
