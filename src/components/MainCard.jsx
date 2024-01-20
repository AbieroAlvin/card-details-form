import Logo from "../assets/images/card-logo.svg";

const MainCard = ({ name, cardNumber, expMonth, expYear }) => {
  return (
    <div className="px-5 py-4 rounded-md min-w-[350px] max-w-[350px] bg-[url(src/assets/images/bg-card-front.png)] bg-cover bg-no-repeat font-body min-h-[200px] relative md:left-[-5rem] z-[40] left-[-5%]">
      <div className="mb-10">
        {/* logo */}
        <img src={Logo} alt="Card Logo" />
      </div>
      {/* details */}
      <div className="text-White">
        {/* card number */}
        <div className="mb-4">
          <p className="md:text-2xl text-xl tracking-[.10em] font-medium">
            {cardNumber}
          </p>
        </div>
        {/* name & exp.date */}
        <div className="flex items-center justify-between w-full uppercase text-[11px]">
          <p className="tracking-[.10em]">{name}</p>
          <div className="flex">
            <p>{expMonth}</p>/<p>{expYear}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
