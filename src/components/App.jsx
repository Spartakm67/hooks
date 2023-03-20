export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
// import { useState, useMemo, useEffect } from "react";

//   export const App = ({ someProp }) => {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//     const filteredPlanets = planets.filter(planet => planet.includes(query));
    

//     return (
      
//     <div>
//       <div>Some prop: {someProp}</div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <div>
//           {filteredPlanets.map(planet => (
//           <div key={planet}>{planet}</div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export const App = ({ someProp }) => {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.includes(query)),
//     [planets, query],
//     console.log("Render was done")
//   );
 
//   return (
//     <div>
//       <div>Some prop: {someProp}</div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <div>
//         {filteredPlanets.map(planet => (
//           <div key={planet}>{planet}</div>
//         ))}
//       </div>
//     </div>
//   );
// };