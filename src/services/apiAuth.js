/* eslint-disable */
import supabase, { supabaseUrl } from "./supabase";
//👤👤[AUTHENTICATION - LOGIN]👤👤

//📶📶[USER SIGN UP]📶📶 this will sign up a user into Supabase application === now go and check the "useSignup.js" file
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: "" } },
  });

  if (error) throw new Error(error.message);

  return data;
}
//📶📶[USER SIGN UP]📶📶

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // console.log(data);
  return data;
}

//🆗🆗[AUTHORIZATION]🆗🆗
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
//🆗🆗[AUTHORIZATION]🆗🆗

//🧧🧧[USER LOGOUT]🧧🧧 🧧🧧[USER LOGOUT]🧧🧧
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
} //🧧🧧[USER LOGOUT]🧧🧧 🧧🧧[USER LOGOUT]🧧🧧

//🏉🏉[UPDATING USER DATA & AVATAR]🏉🏉
export async function updateCurrentUser({ password, fullName, avatar }) {
  // ❗❗❗1. Update password OR fullName/ bcs we can't update both of them at the same time
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData); //in this way will auttomatically know wich user is updated
  if (error) throw new Error(error.message);
  if (!avatar) return data; // if there is no avatar than return the actual data, but if there is an avatar to upload than the App will acces the data from bellow 👇

  // ❗❗❗2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar); //note that the "avatar" is coming from "UpdateUserDataForm.jsx" file, from the destructured variable where we have the "avatar" and "setAvatar" state, go and check there for more details to see how the avatar is uploaded
  if (storageError) throw new Error(storageError.message);

  // ❗❗❗3. Update avatar in the user IMG
  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  }); //uploading the IMG from supabase

  if (error2) throw new Error(error2.message);
  return updateUser;
}
//🏉🏉[UPDATING USER DATA & AVATAR]🏉🏉
