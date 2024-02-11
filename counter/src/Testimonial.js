import { useState } from "react"
import './Testimonial.css'


function Testimonial(){
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Good product, its the best i have ever used",
      author: "Jane Doe"
    },
    {
      quote: "Bad product, did not worked for me",
      author: "Doe Jane"
    },
    {
      quote: "Okay product, i thought it would be better",
      author: "Ane Doe"
    },
  ]
  
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length-1) % testimonials.length
    )
  }
  
  const handleNextClick = () => { 
    setCurrentIndex(
      (currentIndex + 1) % testimonials.length
  )
}

  return(
    <>
    <div className="testimonials">      
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
      - {testimonials[currentIndex].author}
      </div>
      <testimonials className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </testimonials>
    </div>
    </>
  )
}

export default Testimonial    