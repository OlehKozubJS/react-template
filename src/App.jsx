import { useState /*useEffect*/ } from "react";
import { CarModal } from "./components/CarModal/CarModal";
//import cars from "./advertsCars.json";

function App() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
    </div>
  );
}

export { App };
