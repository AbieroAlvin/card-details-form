import { useState } from "react";
import Form from "./components/Form";
// import ThankCard from "./components/ThankCard";
import Cards from "./components/Cards";

function App() {
  const initialFormData = {
    name: "",
    cardNumber: "0000 0000 000 000",
    expMonth: "00",
    expYear: "00",
    cvc: "000",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // validate name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // validate card number
    // const cardRegex = /^(4[0-9]{15}|5[1-5][0-9]{14}|6(?:011|5[0-9]{14}))$/;
    const cardRegex = /^(?:\d[ -]*?){13,16}$/;
    // const cardRegex = /^\d{16}$/;
    if (!cardRegex.test(formData.cardNumber)) {
      newErrors.cardNumber = "Wrong format, numbers only";
      isValid = false;
    }

    // validate exp month
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    if (!monthRegex.test(formData.expMonth)) {
      newErrors.expMonth = "Can't be blank";
      isValid = false;
    }

    // validate exp year
    // const yearRegex = /^[2-9]d$/;
    const yearRegex =
      /^(0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$/;
    if (!yearRegex.test(formData.expYear)) {
      newErrors.expYear = "Can't be blank";
      isValid = false;
    }

    // validate cvc
    // const cvcRegex = /^[0-9]{3, 4}$/;
    const cvcRegex = /^\d{3}$/;
    if (!cvcRegex.test(formData.cvc)) {
      newErrors.cvc = "Can't be blank";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission logic here
      console.log("Form submitted successfully!", formData);
      setIsSubmitted(true);
    } else {
      console.log("Form submission failed. Please check the errors.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleContinue = () => {
    // Reset form submission status
    setIsSubmitted(false);
    // Reset form data
    setFormData(initialFormData);
    // Reset validation errors
    setErrors({});
  };
  return (
    <>
      <div className="w-full md:h-screen h-full md:bg-[url(src/assets/images/bg-main-desktop.png)] bg-[url(src/assets/images/bg-main-mobile.png)] md:bg-left bg-top bg-no-repeat bg-contain flex items-center justify-center">
        {/* <ThankCard /> */}
        <div className="flex md:flex-row flex-col items-center md:gap-12 gap-8">
          <Cards
            cardNumber={formData.cardNumber}
            name={formData.name}
            expYear={formData.expYear}
            expMonth={formData.expMonth}
            cvc={formData.cvc}
          />
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            errors={errors}
            handleContinue={handleContinue}
            isSubmitted={isSubmitted}
          />
        </div>
      </div>
    </>
  );
}

export default App;
