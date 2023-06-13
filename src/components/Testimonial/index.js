import Avatar from "../../img/avatar.png"

const Testimonial = ({ rating, name, reviewText, img }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-header center-row" style={{gap: "10px"}}>
        <img style={{borderRadius: "12px"}} src={img ? img : Avatar} />
        <div style={{display: "block"}}>
          <h3>{name}</h3>
          <p style={{margin: "0px"}}>{rating}/5</p>
        </div>
      </div>
      <p style={{textAlign: "justify"}}>{reviewText}</p>
    </div>
  )
}

export default Testimonial
