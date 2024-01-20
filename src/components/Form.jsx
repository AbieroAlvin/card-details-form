import ThankCard from "./ThankCard";

const Form = ({
  handleChange,
  handleSubmit,
  errors,
  formData,
  handleContinue,
  isSubmitted,
}) => {
  return (
    <div className="font-body max-w-[400px] p-6">
      {isSubmitted ? (
        <ThankCard handleContinue={handleContinue} />
      ) : (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-VeryDarkViolet text-[13px]">
              cardholder name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g.Jane Appleseed"
              className={`${
                errors
                  ? "outline-Red  border-[1.5px]"
                  : "outline-green-400 border-green-400 border-[1.5px]"
              } w-full rounded-md border-[1.5px] border-DarkGrayishViolet py-2 px-4 outline-DarkPurple`}
            />
            {errors.name && (
              <p className="text-[10px] text-Red">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-VeryDarkViolet text-[13px]">
              card number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="e.g.1234 5678 9123 000"
              className={`${
                errors
                  ? "outline-Red border-[1.5px]"
                  : "outline-green-400 border-green-400 border-[1.5px]"
              } w-full rounded-md border-[1.5px] border-DarkGrayishViolet py-2 px-4 outline-DarkPurple`}
            />
            {errors.cardNumber && (
              <p className="text-[10px] text-Red">{errors.cardNumber}</p>
            )}
          </div>
          <div className="w-full flex gap-3">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="uppercase text-VeryDarkViolet text-[13px]">
                Exp.Date(mm/yy)
              </label>
              <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="expMonth"
                    value={formData.expMonth}
                    onChange={handleChange}
                    placeholder="MM"
                    className={`${
                      errors
                        ? "outline-Red  border-[1.5px]"
                        : "outline-green-400 border-green-400 border-[1.5px]"
                    } w-full rounded-md border-[1.5px] border-DarkGrayishViolet py-2 px-4 outline-DarkPurple`}
                  />
                  {errors.expMonth && (
                    <p className="text-[9px] text-Red">{errors.expMonth}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="expYear"
                    value={formData.expYear}
                    onChange={handleChange}
                    placeholder="YY"
                    className={`${
                      errors
                        ? "outline-Red  border-[1.5px]"
                        : "outline-green-400 border-green-400 border-[1.5px]"
                    } w-full rounded-md border-[1.5px] border-DarkGrayishViolet py-2 px-4 outline-DarkPurple`}
                  />
                  {errors.expYear && (
                    <p className="text-[9px] text-Red ">{errors.expYear}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="uppercase text-VeryDarkViolet text-[13px]">
                cvc
              </label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="e.g.123"
                className={`${
                  errors
                    ? "outline-Red  border-[1.5px]"
                    : "outline-green-400 border-green-400 border-[1.5px]"
                } w-full rounded-md border-[1.5px] border-DarkGrayishViolet py-2 px-4 outline-DarkPurple`}
              />
              {errors.cvc && (
                <p className="text-[10px] text-Red">{errors.cvc}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-VeryDarkViolet px-6 py-2 text-White rounded-md w-full cursor-pointer"
          >
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
