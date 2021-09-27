import { useState } from 'react';
import './App.css';


function App() {
  
  const [likes, addLikes] = useState(0);

  function wordChange() {
    if (likes === 1) {
      return (likes + ' Like')
    } else {
      return (likes + ' Likes')
    }
  }

  return (
    <div className="App">
      <button onClick={() => addLikes(likes + 1)} type="button">
        {wordChange()}
      </button>
    </div>
  );
}

export default App;
