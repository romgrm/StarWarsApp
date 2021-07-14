// import React, { useState, useEffect } from "react";
// import axios from "react-native-axios";
// import { Starship } from "../interface/starshipsInterface";
// import { View, Text, TouchableOpacity } from "react-native";
// import { CardStarships } from "../components/CardStarships";
// import { Pilots } from "../interface/pilotsInterface";

// export default function starshipRequest(props) {
//   const [fetchData, setFetchData] = useState<Starship[]>([]);

//   useEffect(() => {

//     axios.get("https://swapi.dev/api/starships/").then(async (res) => {
//       const vaisseauxBrut = res.data.results; // data vaisseaux
//       //pour chaque vaisseau
//       const vaisseaux = await axios.all(
//         vaisseauxBrut.map(async (vaisseau) => {
//           const pilotes = await getAllPilotesFrom(vaisseau)
//           vaisseau.pilots = await pilotes;
//           return await vaisseau
//         })
//       )
//       //do something with the vaisseaux
//       await setFetchData(vaisseaux);
//       await console.log(vaisseaux)
//     })
    
    
//     const getAllPilotesFrom = async (vaisseau) => {
//       // on remplace tous les url de pilots par le résultat du fetch de l'url,
//       // et on retourne rien tant qu'on les a pas tous récupérés
//       // (l'array de vaisseaux n'est pas modifié ici !)
//       return axios.all(vaisseau.pilots.map(async (url) =>{ 
//         const res = await axios.get(url);
//         return res.data; // pilots data
//       }))
//     }
    
//   }, []);

  
  
 
//   return (
//     <>
//       {fetchData.map((vaisseau, key) => (
        
//           <CardStarships
//             key={key}
//             index={key}
//             name={vaisseau["name"]}
//             model={vaisseau["model"]}
//             manufacturer={vaisseau["manufacturer"]}
//             cost={vaisseau["cost"]}
//             // pilots={vaisseau.pilots.map(p=>p.height)}
//             pilots={vaisseau.pilots}
//             navigation={props.navigation}
//           />
       
//       ))}
//     </>
//   );
// }
