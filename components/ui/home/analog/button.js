import "./buttonPopular.css";
const ButtonPopular = () => {
  return (
    <div className="buttonPopular">
      <div className="radio-wrapper">
        <input className="input" name="btn" id="value-1" type="radio" />
        <div className="btn">
          Featured
          <span className="btn__glitch" aria-hidden="">
            Featured
          </span>
          <label className="number">r1</label>
        </div>
      </div>
      <div className="radio-wrapper">
        <input
          className="input"
          name="btn"
          id="value-2"
          defaultChecked="true"
          type="radio"
        />
        <div className="btn">
          Popular
          <span className="btn__glitch" aria-hidden="">
            Popular
          </span>
          <label className="number">r2</label>
        </div>
      </div>
      <div className="radio-wrapper">
        <input className="input" name="btn" id="value-3" type="radio" />
        <div className="btn">
          Newest
          <span className="btn__glitch" aria-hidden="">
            Newest
          </span>
          <label className="number">r3</label>
        </div>
      </div>
    </div>
  );
};

export default ButtonPopular;
