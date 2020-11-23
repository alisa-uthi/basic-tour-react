import { data } from "./data";
import React, { useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const App = () => {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div>
      <h1 className="header">Our Tours</h1>
      <hr />
      {tours.map((tour) => {
        const { id, imgUrl, title, price, desc } = tour;
        return (
          <div key={id} className="tour-card">
            <img src={imgUrl} alt={title} loading="lazy" />
            <article>
              <h1>
                {title}
                <span className="price">{price}</span>
              </h1>
              <span className="description">
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more"}
                  readLessText={"Show less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  {desc}
                </ReactReadMoreReadLess>
              </span>
              <button className="btn" onClick={() => removeTour(id)}>
                not interested
              </button>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default App;
