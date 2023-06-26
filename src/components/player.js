import ReactPlayer from "react-player/youtube";

const Player = () => {
    const vidUrl = 'https://www.youtube.com/watch?v=gLTRQf6x7_A';
    return(
        <div>
            <ReactPlayer 
            playing={false}
            url={vidUrl}
            volume={0.5}
            />
        </div>
    );
};

export default Player

// import { Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import HomePage from './components/Homepage';
// import AboutMe from './components/AboutMe';
// import Player from './components/player';

// function App() {
//   return (
//     <div className='App'>
//       <nav className='nav'>
//         <Link to="/" className='nav-item'>Homepage</Link>
//         <Link to="/about-me" className='nav-item'>About Me</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about-me" element={<AboutMe />} />

//       </Routes>
//       <div>
//         <Player />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";

// function App() {

//   const bird1 = new Audio(
//     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
//   );

//   const bird2 = new Audio(
//     "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
//   );

//   function toggle1() {
//     if (bird1.paused) {
//       bird1.play();
//     } else {
//       bird1.pause();
//     }
//   };

//     function toggle2() {
//     if (bird2.paused) {
//       bird2.play();
//     } else {
//       bird2.pause();
//     }
//   };

//   return (
//     <div>
//       <button onClick={toggle1}>Caspian Tern 1</button>
//       <button onClick={toggle2}>Caspian Tern 2</button>
//     </div>
//   );
// }

// export default App;
