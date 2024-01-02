import { useState, useEffect } from "react";
import { SVGimage } from "../images";
import cars from "../advertsCars.json";

const CarModal = ({ carId, onClose }) => {
  const [car, setCar] = useState({});

  useEffect(() => {
    const carsData = JSON.parse(cars);
    console.log(carsData);
    const carData = carsData.find((car) => car.id === carId);
    setCar(carData);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={onClose}>
          <SVGimage name="close" />
        </button>
      </div>
      <img src={car.img} alt="" />
      <h3>
        <span>{car.make}</span>
        <span>{car.model}</span>, <span>{car.year}</span>
      </h3>
      <div>
        <div>{car.address.split(", ")[1]}</div>
        <div>{car.address.split(", ")[2]}</div>
        <div>
          Id:
          <span>{car.id}</span>
        </div>
        <div>
          Year:
          <span>{car.year}</span>
        </div>
        <div>
          Type:
          <span>{car.type}</span>
        </div>
        <div>
          Fuel Consumption:
          <span>{car.fuelConsumption}</span>
        </div>
        <div>
          Engine Size:
          <span>{car.engineSize}</span>
        </div>
      </div>
      <h4>Accessories and functionalities:</h4>
      <ul>
        {car.accessories.map((item) => {
          <li>{item}</li>;
        })}
        {car.functionalities.map((item) => {
          <li>{item}</li>;
        })}
      </ul>
      <h4>Rental Conditions: </h4>
      <div>
        <div>
          Minimum age:
          <span>{car.rentalConditions.split("\n")[0].split(" ")[1]}</span>
        </div>
        <div>{car.rentalConditions.split("\n")[1]}</div>
        <div>{car.rentalConditions.split("\n")[2]}</div>
        <div>
          Mileage:
          <span>{car.mileage}</span>
        </div>
        <div>
          Price:
          <span>{car.rentalPrice}</span>
        </div>
      </div>
      <button>Rental car</button>
    </div>
  );
};

export { CarModal };
