const ResCard = () => {
  return (
    <>
      <div className="card-container">
        <div>
          <div className="card">
            <img
              className="res-logo"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ae323f3a789910fbe37c3ccb464354ba"
              alt="res-logo"
            />
            <h2 className="item-name">barger</h2>
            <h4 className="item-cusine-name">Asian, narth food </h4>
            <h4>rating 4.4</h4>
            <button
              className="card-buttion"
              onClick={() => {
                alert("hello world");
              }}
            >
              order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResCard;
