import { useState } from "react";
import BasicForm from "../../components/form/form";
import WhereFromForm from "../../components/whereFromForm/WhereFromForm";
import OrderCompleted from "../../components/orderCompleted/OrderCompleted";
import Steps from "../../components/steps/steps";

const OrderPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <div className="test">
        {step === 1 ? <BasicForm step={step} setStep={setStep} /> : null}
        {step === 2 ? <WhereFromForm step={step} setStep={setStep} /> : null}
        {step === 3 ? <OrderCompleted step={step} setStep={setStep} /> : null}
        <Steps step={step} />
      </div>
    </div>
  );
};

export default OrderPage;
