import React from "react";

const testimonials = [
  { name: "Priya Sharma", review: "Scored 8.5 in 6 weeks. Amazing mentors!" },
  { name: "Arjun Mehta", review: "Mock tests and feedback helped me excel!" },
  { name: "Sara Ali", review: "Love the online sessions and UI!" },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>Student Reviews</h2>
    <div className="review-container">
      {testimonials.map((t, i) => (
        <div className="review" key={i}>
          <p>“{t.review}”</p>
          <strong>- {t.name}</strong>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
