import React from "react";
import "./Skeleton.css";

function Skeleton({ count = 5 }) {
  return (
    <section className="ss">
      <div className="skeleton__wrapper container ">
        {Array(count)
          .fill("")
          .map((_, inx) => (
            <div key={inx} className="skeleton__card">
              <div className="skeleton__image skeleton__anime"></div>
              <div className="skeleton__title skeleton__anime"></div>
              <div className="skeleton__price skeleton__anime"></div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skeleton;
