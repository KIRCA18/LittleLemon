import Testimonial from "../Testimonial"

const customers = [
  {
    name: "John",
    rating: 5,
    reviewText: `Little Lemon is a true hidden gem! This cozy 
    restaurant offers a burst of flavor with every bite. I tried their lemon-infused shrimp 
    dish, and it was simply exquisite. The shrimp were perfectly cooked, tender, and succulent, while the lemon added a 
    refreshing twist. The service was friendly and attentive, 
    making my dining experience even more enjoyable. I highly 
    recommend Little Lemon for a zesty delight!`,
  },
  {
    name: "Ava",
    rating: 4.3,
    reviewText: `Little Lemon is a must-visit for all food enthusiasts. 
    Their creative menu revolves around the enchanting flavor of lemon. 
    I indulged in their lemon-infused pasta, and it was a citrusy sensation. 
    The pasta was cooked to perfection, and the tangy lemon sauce was a delightful companion. 
    The restaurant's ambiance was cozy, and the staff went above and beyond to ensure a pleasant dining experience. 
    Little Lemon is a true gem for those seeking a unique culinary adventure.`,
  },
  {
    name: "Thomas",
    rating: 4.9,
    reviewText: `Little Lemon is a paradise for lemon lovers. 
    The restaurant's menu features a range of innovative lemon-inspired dishes that will tantalize your taste buds. 
    I opted for their lemon-infused grilled salmon, and it was a revelation. The salmon was flaky and moist, infused with the perfect balance of tangy lemon flavor. 
    The staff was friendly, offering prompt service and helpful suggestions. 
    Little Lemon is a haven for foodies seeking a refreshing and unforgettable dining experience.`,
  },
]

const CustomersSay = () => {
  return (
    <div className="wrapper">
      <section
        className="content flex column column-center"
        style={{ gap: "20px" }}
      >
        <div className="full-background"></div>
        <h1>Testimonials</h1>
        <div className="flex space-evenly" style={{ gap: "20px" }}>
          {customers &&
            customers.map((customer) => (
              <Testimonial
                name={customer.name}
                rating={customer.rating}
                reviewText={customer.reviewText}
                key={customer.name}
              />
            ))}
        </div>
      </section>
    </div>
  )
}

export default CustomersSay
