import tick from "../assets/images/icon-complete.svg";

const ThankCard = ({ handleContinue }) => {
  return (
    <div>
      <div className="flex flex-col items-center max-w-[350px] gap-8 font-body">
        <img
          src={tick}
          alt="icon complete logo"
          className="w-[80px] h-[80px]"
        />
        <div className="text-center">
          <h1 className="text-2xl font-medium text-VeryDarkViolet uppercase mb-2">
            Thank You!
          </h1>
          <p className="text-DarkGrayishViolet">
            We've added your card details
          </p>
        </div>
        <button
          onClick={handleContinue}
          className="bg-VeryDarkViolet px-6 py-2 text-White rounded-md w-full cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ThankCard;
