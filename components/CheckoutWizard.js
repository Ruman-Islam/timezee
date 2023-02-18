const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {["User Login","Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b  
          text-center text-sm lg:text-lg 
       ${
         index <= activeStep
           ? "border-primary text-primary"
           : "border-accent text-accent"
       }
       `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutWizard;
