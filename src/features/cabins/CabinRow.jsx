/* eslint-disable */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
// import { useMutation } from "@tanstack/react-query"; // those imports are from the variables that was sett to OFF "// ..."
// import { deleteCabin } from "../../services/apiCabins"; // those imports are from the variables that was sett to OFF "// ..."
// import { useQueryClient } from "@tanstack/react-query"; // those imports are from the variables that was sett to OFF "// ..."
// import toast from "react-hot-toast"; // those imports are from the variables that was sett to OFF "// ..."
// import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  // const [showForm, setShowForm] = useState(false); //🎐🎐[EDITING A CABIN]🎐🎐 go and check also the button from bellow 👇
  const { isCreating, createCabin } = useCreateCabin(); // 🔂🔂[DUPLICATE CABIN]🔂🔂 🔂🔂[DUPLICATE CABIN]🔂🔂

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin; //🎫🎫[FETCHING CABIN DATA]🎫🎫 here we directly take the name of data's that we need from "React Query" devtools

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    }); //🔂🔂[DUPLICATE CABIN]🔂🔂 now we need to HOOK thi function down in the "Duplicate" Button 🔂🔂[DUPLICATE CABIN]🔂🔂
  }

  /* const queryClient = useQueryClient(); //⛔⛔[DELETING AN ELEMENT]⛔⛔ this is a HOOK that will take the info's from "queryClient" variable that is in "App.jsx" wich hase the roll to reset the App instantly. The logic behind this is that we want the React Quary to become "invalidate" when the Guest is deleting a cabin, this "invalidate" will "Refetch" all the data, so will automatically "refresh" the page with the selected cabin beeing deleted⛔⛔[DELETING AN ELEMENT]⛔⛔

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin, //⛔⛔[DELETING AN ELEMENT]⛔⛔ also check the "onClick" from bellow where we pass the "mutate" PROP ===== so down in the <button></button> we create "onClick" the will call the "mutate" prop for cabinId, also the "disabled" will activate the "isLoading" spinner when the cabin si deleted ⛔⛔[DELETING AN ELEMENT]⛔⛔

    onSuccess: () => {
      toast.success("Cabin successfully deleted"); // 🍄🍄[REACT TOASTER]🍄🍄 and here we setted the "toast" for "succes"

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      }); //⛔⛔[DELETING AN ELEMENT]⛔⛔ so here we calles the "["cabins"]" from the "CabinTable.jsx" file, function "CabinTable"
    },
    onError: (err) => toast.error(err.message), //🍄🍄[REACT TOASTER]🍄🍄 replacing the "alert" with "toast", so here we want an "error" toast 🍄🍄[REACT TOASTER]🍄🍄 ================ ERROR HANDLING ... connected with the "apiCabins.js" file from "deleteCabin" function (error) "Cabin could not be deleted"
  }); */ // ⚽⚽[REFACTORING]⚽⚽ this code was refactored, check the "useDeleteCabin.js" file to see the refactored code ⚽⚽[REFACTORING]⚽⚽

  const { isDeleting, deleteCabin } = useDeleteCabin(); //⚽⚽[REFACTORING]⚽⚽  we refactored the variable "queryClient" from above 👆 into a custom HOOK, reusable variable

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        {/* <button disabled={isCreating} onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>
        🔂🔂[DUPLICATE CABIN]🔂🔂 button that will duplicate the cabin/content ==== "disabled" when the cabin is duplicating the button will not be enable  */}

        {/* 💿💿[CABIN DELETIONS]💿💿 for deletions we included the <button/> from bellow inside of <Modal.Open> ... here ...</Modal.Open> 💿💿[CABIN DELETIONS]💿💿 */}
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            {/* <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>

              {/* <button>
                {/* before the calling of those <Modal's> bellow we used this code inside of the button above to call the function  "onClick={() => setShowForm((show) => !show)" */}
            {/* <HiPencil />
              </button> */}
            {/* 🎐🎐[EDITING A CABIN]🎐🎐 check the "Edit" button 👆, the "setShowForm" is a prop created at the beggining of the function 🎐🎐[EDITING A CABIN]🎐🎐*/}
            {/* </Modal.Open> */}

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            {/* 💿💿[CABIN DELETIONS]💿💿 for deletions we included the <button/> from bellow inside of <Modal.Open> ... here ...</Modal.Open> 💿💿[CABIN DELETIONS]💿💿 */}

            {/* ⛔⛔[QUESTION DELETE]⛔⛔ */}
            {/* <Modal.Open opens="delete">
              <button>
                <HiTrash />
              </button>
            </Modal.Open> */}
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
            {/* ⛔⛔[QUESTION DELETE]⛔⛔ */}

            {/* 🕎🕎[REUSABLE MENU]🕎🕎 */}
            {/* <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          
          <Menus.List id={cabinId}>
          <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
          Duplicate
          </Menus.Button>
          
          <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
          
          <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
        </Menus.List> */}
          </Menus.Menu>
        </Modal>
        {/* 🕎🕎[REUSABLE MENU]🕎🕎 */}
      </div>
    </Table.Row>
    //🎐🎐[EDITING A CABIN]🎐🎐 we added also the "{showForm && <CreateCabinForm />}"... here is "showForm" is getting the data from "setShowForm" that the "show" was activate than will display the content where the will be able to edit the cabin <CreateCabinForm/>.file, also in this file we have the prop "cabinToEdit" 🎐🎐[EDITING A CABIN]🎐🎐
  );
} //🎫🎫[FETCHING CABIN DATA]🎫🎫 here we created the content of our cabins, please check/read this code to understand it and also check the files that provides the style code

export default CabinRow;
