import Special from "../Special"
import GreekSalad from "../../img/greek salad.jpg"
import Bruchetta from "../../img/bruchetta.svg"
import LemonDesert from "../../img/lemon dessert.jpg"
import { Link } from "react-router-dom"
const specials = [
  {
    name: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "12.99",
    image: GreekSalad,
  },
  {
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    price: "5.99",
    image: Bruchetta,
  },
  {
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "5.00",
    image: LemonDesert,
  },
]

const Specials = () => {
  return (
    <div className="wrapper">
      <section
        className="flex content column column-center specials-wrapper"
        style={{ gap: "20px" }}
      >
        <div
          className="flex space-between center-row"
          style={{ width: "100%" }}
        >
          <h1 className="specials" style={{ fontSize: "40px" }}>
            Specials
          </h1>
          <Link
            to="/menu"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="call-to-action card-title"
          >
            Online Menu
          </Link>
        </div>
        <div className="flex space-evenly" style={{ gap: "20px" }}>
          {specials &&
            specials.map((special) => (
              <Special
                name={special.name}
                description={special.description}
                price={special.price}
                image={special.image}
                key={special.name}
              />
            ))}
        </div>
      </section>
    </div>
  )
}

export default Specials
