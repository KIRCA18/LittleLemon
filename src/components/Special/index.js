import bike from "../../img/bike.svg"

const Special = ({ name, price, description, image }) => {
  return (
    <div className="special-food-wrapper">
      <img src={image} />
      <div
        className="flex column space-between"
        style={{
          padding: "10px",
          width: "100% !important",
          boxSizing: "border-box",
        }}
      >
        <div>
          <div className="flex space-between">
            <h3 className="card-title">{name}</h3>
            <h3 className="price">${price}</h3>
          </div>
        </div>
        <p style={{ textAlign: "justify" }}>{description}</p>
        <button
          className="price"
          style={{
            display: "inline-flex",
            gap: "10px",
            color: "black",
            alignItems: "center",
            outline: "none",
            border: "none",
            cursor: "pointer"
          }}
        >
          Order a delivery <img src={bike} style={{ width: "24px" }} />
        </button>
      </div>
    </div>
  )
}

export default Special
