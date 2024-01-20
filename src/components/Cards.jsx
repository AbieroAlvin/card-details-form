import MainCard from "../components/MainCard";
import CvcCard from "../components/CvcCard";

const Cards = ({ cardNumber, name, expYear, expMonth, cvc }) => {
  return (
    <div>
      <div className="flex md:flex-col md:gap-12 flex-col-reverse">
        <MainCard
          cardNumber={cardNumber}
          name={name}
          expYear={expYear}
          expMonth={expMonth}
        />
        <CvcCard cvc={cvc} />
      </div>
    </div>
  );
};

export default Cards;
