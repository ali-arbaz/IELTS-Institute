import React from "react";

const features = [
  { title: "Speaking Practice", desc: "Interactive sessions with certified trainers." },
  { title: "Mock Tests", desc: "Simulate real IELTS exam environment." },
  { title: "AI Band Score", desc: "Instant feedback to track improvement." },
  { title: "Flexible Schedule", desc: "Learn anytime from any device." },
];

const Features = () => (
  <section className="features">
    <h2>Our Features</h2>
    <div className="feature-cards">
      {features.map((f, i) => (
        <div className="card" key={i}>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
