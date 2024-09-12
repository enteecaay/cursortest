import React, { useState } from 'react';

function FishManager() {
  const [fish, setFish] = useState([]);

  const addFish = (newFish) => {
    setFish([...fish, newFish]);
  };

  return (
    <div className="fish-manager">
      <h2>Manage Your Fish</h2>
      {/* Add form to add new fish */}
      {/* Display list of fish */}
    </div>
  );
}

export default FishManager;