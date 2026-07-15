// import React from "react";
// import { Link } from "react-router-dom";
// import "../assets/css/RestaurantCard.css";

// export default function RestaurantCard({ restaurant }) {
//   const { id, name, cuisine, rating, deliveryTime, priceForOne, image } = restaurant;

//   return (
//     <div className="rc-card">
//       <div
//         className="rc-thumb"
//         style={{
//           background: image ? `url(${image}) center/cover` : "linear-gradient(135deg,#e7c9a9,#8a5a3b)",
//         }}
//       >
//         <span className="rc-rating">⭐ {rating}</span>
//       </div>
//       <Link to={`/restaurants/${id}`} className="rc-info">
//         <h3>{name}</h3>
//         <p className="rc-cuisine">{cuisine}</p>
//         <p className="rc-meta">
//           {deliveryTime} • {priceForOne}
//         </p>
//       </Link>
//     </div>
//   );
// }

// export default function RestaurantCard({ restaurant }) {
//   const { id, name, cuisine, rating, deliveryTime, priceForOne, image } = restaurant;

//   return (
//     <div className="rc-card">
//       <div className="rc-thumb">
//         {image && (
//           <div
//             className="rc-thumb-bg"
//             style={{ backgroundImage: `url(${image})` }}
//           />
//         )}
//         {image ? (
//           <img src={image} alt={name} className="rc-thumb-img" />
//         ) : (
//           <div
//             className="rc-thumb-fallback"
//             style={{ background: "linear-gradient(135deg,#e7c9a9,#8a5a3b)" }}
//           />
//         )}
//         <span className="rc-rating">⭐ {rating}</span>
//       </div>
//       <Link to={`/restaurants/${id}`} className="rc-info">
//         <h3>{name}</h3>
//         <p className="rc-cuisine">{cuisine}</p>
//         <p className="rc-meta">
//           {deliveryTime} • {priceForOne}
//         </p>
//       </Link>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/RestaurantCard.css";

export default function RestaurantCard({ restaurant }) {
  const { id, name, cuisine, rating, deliveryTime, priceForOne, image } = restaurant;

  return (
    <div className="rc-card">
      <div
        className="rc-thumb"
        style={{
          background: image
            ? `url(${image}) center/cover no-repeat`
            : "linear-gradient(135deg,#e7c9a9,#8a5a3b)",
        }}
      >
        <span className="rc-rating">⭐ {rating}</span>
      </div>
      <Link to={`/restaurants/${id}`} className="rc-info">
        <h3>{name}</h3>
        <p className="rc-cuisine">{cuisine}</p>
        <p className="rc-meta">
          {deliveryTime} • {priceForOne}
        </p>
      </Link>
    </div>
  );
}