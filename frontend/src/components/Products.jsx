// Products.jsx
import React from 'react';
import Product from './Product';

const Products = ({ posts, category, currentUserId, onDelete, onMakeOffer, userOffers, isTradedFilter }) => {
  // Filter posts based on category and traded status
  const filteredPosts = posts.filter(post => {
    const categoryMatch = category && category !== "ALL" ? post.category_id === category : true;
    const tradedMatch = (isTradedFilter === 'traded' && post.Is_Traded) || (isTradedFilter === 'notTraded' && !post.Is_Traded) || isTradedFilter === '';
    return categoryMatch && tradedMatch;
  });

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // This will create a responsive number of columns
      gap: '20px', // Adjust the gap as needed
      padding: '20px', // Add padding around the entire grid
      margin: '0 auto', // Center the grid container if needed
      maxWidth: '1200px', // Maximum width of the container
    }
  };

  return (
    <ul style={styles.container}>
      {filteredPosts.map(post => (
        <Product 
          key={post.post_id} 
          post={post} 
          currentUserId={currentUserId} 
          onDelete={onDelete}
          userOffers={userOffers}
          onMakeOffer={onMakeOffer}
          isTraded={post.Is_Traded}
        />
      ))}
    </ul>
  );
};

export default Products;
