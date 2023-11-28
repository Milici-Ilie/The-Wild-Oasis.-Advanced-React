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
import { createEditCabin } from "../../services/apiCabins";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

//🚠🚠[CREATING NEW CABIN]🚠🚠
function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  //🎐🎐[EDITING A CABIN]🎐🎐 here we added the prop from "CabinRow.jsx" file, we sett the "cabinToEdit={}" for times when there will be no value by default🎐🎐[EDITING A CABIN]🎐🎐
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId); //🎐🎐[EDITING A CABIN]🎐🎐 so if there is and "editId" than the result will be "true", if not the "Boolean" will convert it to "false" ==== check also the <Button/> from bellow 👇

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
    // 🎐🎐[EDITING A CABIN]🎐🎐here if the "isEditSession" will be set to "true" than activate the "editValues", otherwise display an empty object {} 🎐🎐[EDITING A CABIN]🎐🎐
  }); //🦉🦉[REACT HOOK FORM]🦉🦉 here we are calling the REACT HOOK after we install it, check bellow in the <Input/> the {...register("name")}, "name" is equal with the "id="name"" from the same code, this is how we register all the Inputs data in to our Form ny using REACT HOOK FORM, and implementing this "...register("99999")", also check that all the </Inputs> and </Textarea> has this "...register..."🦉🦉[REACT HOOK FORM]🦉🦉

  const { errors } = formState; //🌋🌋[FORM ERRORS]🌋🌋 another HOOK "formState" with the roll of taking the "errors"////////////  we take the errors from the Input Fields/console and display them in our App. // ====// now go to "return" 👇 and check in the <FormRow> for {errors?.name ... etc} 🌋🌋[FORM ERRORS]🌋🌋
  // console.log(errors);

  const { isCreating, createCabin } = useCreateCabin(); //⚽⚽[REFACTORING]⚽⚽
  const { isEditing, editCabin } = useEditCabin();

  const queryClient = useQueryClient();
  /*
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  }); //🚠🚠[CREATING NEW CABIN]🚠🚠 "createCabin" is a function from "apiCabins.js" that have the roll to create a new cabin, after we created this function we need to implement those data's in the function bellow "onSubmit", the "reset()" function si imported from the "useForm" and will clear all the fields after the cabin was created 🚠🚠[CREATING NEW CABIN]🚠🚠 */ // ⚽⚽[REFACTORING]⚽⚽ this code was refactored, check the "useCreateCabin.js" file to see the refactored code ⚽⚽[REFACTORING]⚽⚽

  /* const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  }); //🎐🎐[EDITING A CABIN]🎐🎐 🎐🎐[EDITING A CABIN]🎐🎐 */ // ⚽⚽[REFACTORING]⚽⚽ this code was refactored, check the "useEditCabin.js" file to see the refactored code ⚽⚽[REFACTORING]⚽⚽

  const isWorking = isCreating || isEditing; // here we created a variable that will check wich one from "isCreating" or "isEditing" is active. So the active one will become the "isWorking" variable

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        {
          newCabinData: { ...data, image },
          id: editId,
        },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal(); //💨💨[MODAL WINDOW]💨💨 here we are closing the Modal by pressing the Button
          },
        }
      );
    //🎐🎐[EDITING A CABIN]🎐🎐
    // console.log(data);
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.(); //💨💨[MODAL WINDOW]💨💨
          },
        }
      ); ///📷📷[UPLOADING IMAGES]📷📷 here we destructured the data's that we are taking from the console and select what we need ///// also notice that the name of "image: ..." is from the "Supabase", meaning that those have the same name, that's why is called "name", bcs we also called it "name" in "Supabase" ==== also go and check the "apiCabins.js" file /📷📷[UPLOADING IMAGES]📷📷/📷📷[UPLOADING IMAGES]📷📷
  } //🦉🦉[REACT HOOK FORM]🦉🦉

  function onError(errors) {
    // console.log(errors);
  } //🌋🌋[FORM ERRORS]🌋🌋 so this function will be called if the "onSubmit" function from above 👆 will have an error, check the "return" => <Form onSubmit={handleSubmit( ... here ... )} 👇 🌋🌋[FORM ERRORS]🌋🌋

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      {/* 💨💨[MODAL WINDOW]💨💨 check the "type="{...}"" */}
      {/* 🦉🦉[REACT HOOK FORM]🦉🦉 here "onSubmit" will be called every time when the user press the "Edit cabin" button, when he wants to create a cabin/new content. This will call the "handleSubmit" that will call our function "onSubmit" 🦉🦉[REACT HOOK FORM]🦉🦉 */}

      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking} //this will reset the Input Field
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
          defaultValue={0} //here we want to make sure that the "discount" is sett by default to "0"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
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
            required: isEditSession ? false : "This field is required", //🎐🎐[EDITING A CABIN]🎐🎐 here we dont want to display the "upload image" if the "isEditSession" is "true" only if is "false", meaning that when the use wants to edit a cabin there will be no "upload" image, this will be displayed only when the user whants to create from scratch a new cabin 🎐🎐[EDITING A CABIN]🎐🎐
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          {/* 💨💨[MODAL WINDOW]💨💨 here we added the function "onClick" */}
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
        {/* 🎐🎐[EDITING A CABIN]🎐🎐 the "Edit" Button🎐🎐[EDITING A CABIN]🎐🎐 */}
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
