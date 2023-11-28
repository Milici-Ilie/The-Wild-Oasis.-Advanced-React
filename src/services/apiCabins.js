/* eslint-disable */
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

//🚠🚠[CREATING NEW CABIN]🚠🚠🚠🚠[CREATING NEW CABIN]🚠🚠
export async function createEditCabin(newCabin, id) {
  // console.log(newCabin, id);
  //🎐🎐[EDITING A CABIN]🎐🎐 if we want to edit a cabin we need to pass in the new cabin data + the cabin "Id" 🎐🎐[EDITING A CABIN]🎐🎐
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl); //🎐🎐[EDITING A CABIN]🎐🎐 here we want to see if te URL from the current IMG (already uploaded) contains the URL from the supabase to know if there is an IMG and wich one ===== also go and check the variable from a litle bellow "imagePath" where we check if the variable "hasImagePatch" (this variable from here) is true than upload a new IMG, otherwise return the original supabase URL 🎐🎐[EDITING A CABIN]🎐🎐

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  ); //📷📷[UPLOADING IMAGES]📷📷 so here we need a unique name for every photo, so we use "Math.random" for this.==== also we must replace all the "/" with empty strings "", bcs. "Supabase" will create a new folder for every slash "/" 📷📷[UPLOADING IMAGES]📷📷

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`; //📷📷[UPLOADING IMAGES]📷📷 so the "supabaseUrl" is variable from "supabase.js" file that contains the link from "Supabase" ... here we mutate the IMG link that we uploaded in the Supabase site, the "${imageName}" is the variable from above 👆

  //https://whhzphwuiydxgncmteek.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg  === this link is from the "Supabase" after we uploaded the first img mannualy

  // 1. 1️⃣ Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id)
    //🎐🎐[EDITING A CABIN]🎐🎐 if there is no "!id" than we want to create the cabin, meaning that the user didn't make changes in the "edit" content 🎐🎐[EDITING A CABIN]🎐🎐
    query = query.insert([{ ...newCabin, image: imagePath }]); //📷📷[UPLOADING IMAGES]📷📷 we also need to include the "image: imagePath" here, initially only for the [CREATING NEW CABIN] that we first notes here we need to write only ".insert([newCabin])" and that's it, the destructured and "image ...." are for uploading the IMG

  // B) EDIT
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select(); //🎐🎐[EDITING A CABIN]🎐🎐

  const { data, error } = await query.select().single(); //here this "newCabin" will work bceause we have the same name in the "input fields" like the column from "Supabase", check the "CreateCabinForm.jsx" file, the "Label"'s to see the names 🚠🚠[CREATING NEW CABIN]🚠🚠

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  // 2. 2️⃣ 📷📷[UPLOADING IMAGES]📷📷 ❗❗ 2. Upload image ❗❗  📷📷[UPLOADING IMAGES]📷📷
  if (hasImagePath) return data; // here we sett the code if an IMG was already uploaded to one of the cabins, than this IMG should not be allowed to be loaded again to that cabin

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image); //📷📷[UPLOADING IMAGES]📷📷 this variable is from the "Supabase" back end site, to see how to get iti go and check the lesson 355, to see from where are the "imageName" and "newCabin" just "alt + click" on them 📷📷[UPLOADING IMAGES]📷📷

  // 3. 3️⃣ 📷📷[UPLOADING IMAGES]📷📷 Delete the cabin if there was an error uploading image

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
} //🚠🚠[CREATING NEW CABIN]🚠🚠🚠🚠[CREATING NEW CABIN]🚠🚠

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
} //⛔⛔[DELETING AN ELEMENT]⛔⛔ this code is from Supabase, "delete rows", we will call this function "deleteCabin" in the "CabinRow.jsx" file for the (id) of each cabin, inside of "CabinRow" function⛔⛔[DELETING AN ELEMENT]⛔⛔
