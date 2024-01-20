const CvcCard = ({ cvc }) => {
  return (
    <div className="px-5 py-4 rounded-md min-w-[350px] max-w-[350px]  bg-[url(src/assets/images/bg-card-back.png)] bg-cover bg-no-repeat font-body min-h-[200px] md:block relative md:top-0 md:right-0 top-[5rem] right-[-5%] z-[20]">
      <div>
        {/* cvc */}
        <p className="absolute top-[45%] right-[10%] font-body text-White font-medium">
          {cvc}
        </p>
      </div>
    </div>
  );
};

export default CvcCard;
