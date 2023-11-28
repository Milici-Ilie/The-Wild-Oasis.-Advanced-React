import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  // const [showForm, setShowForm] = useState(false); //🦉🦉[REACT HOOK FORM]🦉🦉

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
        {/* 🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬 */}
      </Row>

      <Row type="vertical">
        <CabinTable />
        <AddCabin />
        {/* 💨💨[MODAL WINDOW]💨💨💨💨[MODAL WINDOW]💨💨 */}

        {/*🦉🦉[REACT HOOK FORM]🦉🦉 */}
        {/* <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />} */}
        {/* 🦉🦉[REACT HOOK FORM]🦉🦉 */}
      </Row>
    </>
  ); //🎫🎫[FETCHING CABIN DATA]🎫🎫
}

export default Cabins;
