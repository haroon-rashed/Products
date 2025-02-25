import React from 'react'
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; // Check if there is a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="star-rating">
            {"★".repeat(fullStars)}
            {halfStar && "☆"}
            {"☆".repeat(emptyStars)}
        </div>
    );
};

export default StarRating
