/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Link } from 'react-router-dom';
import Rover2 from '../../../Assets/Icons/rover2.png';

export default function Links({ roverName: currentRover }) {
  const rovers = {
    curiosity: 'Curiosity',
    opportunity: 'Opportunity',
    spirit: 'Spirit',
  };

  return Object.keys(rovers).map((key) => {
    if (rovers[key] === currentRover) return null;

    const roverName = rovers[key];

    return (
      <Link
        key={key}
        className="text-white"
        to={{
          pathname: `/mars-rovers/rover/${roverName}`,
          state: { roverName },
        }}>
        <div className="badge red">
          <div className="circle">
            <img src={Rover2} alt="rover-img" />
          </div>
          <div className="ribbon">
            <span>{roverName}</span>
          </div>
        </div>
      </Link>
    );
  });

  // if (roverName === 'Opportunity') {
  //   return (
  //     <>
  //       <Link
  //         className="text-white"
  //         to={{
  //           pathname: `/mars-rovers/rover/${rovers.curiosity}`,
  //           state: { roverName: rovers.curiosity },
  //         }}>
  //         <div className="badge red">
  //           <div className="circle">
  //             <img src={Rover1} alt="rover-img" />
  //           </div>
  //           <div className="ribbon">
  //             <span>Curiosity</span>
  //           </div>
  //         </div>
  //       </Link>

  //       <Link
  //         className="text-white"
  //         to={{
  //           pathname: `/mars-rovers/rover/${rovers.spirit}`,
  //           state: { roverName: rovers.spirit },
  //         }}>
  //         <div className="badge red">
  //           <div className="circle">
  //             <img src={Rover2} alt="rover-img" />
  //           </div>
  //           <div className="ribbon">
  //             <span>Spirit</span>
  //           </div>
  //         </div>
  //       </Link>
  //     </>
  //   );
  // }
  // if (roverName === 'Curiosity') {
  //   return (
  //     <>
  //       <Link
  //         className="text-white"
  //         to={{
  //           pathname: `/mars-rovers/rover/${rovers.opportunity}`,
  //           state: { roverName: rovers.opportunity },
  //         }}>
  //         <div className="badge red">
  //           <div className="circle">
  //             <img src={Rover1} alt="rover-img" />
  //           </div>
  //           <div className="ribbon">
  //             <span>Opportunity</span>
  //           </div>
  //         </div>
  //       </Link>

  //       <Link
  //         className="text-white"
  //         to={{
  //           pathname: `/mars-rovers/rover/${rovers.spirit}`,
  //           state: { roverName: rovers.spirit },
  //         }}>
  //         <div className="badge red">
  //           <div className="circle">
  //             <img src={Rover2} alt="rover-img" />
  //           </div>
  //           <div className="ribbon">
  //             <span>Spirit</span>
  //           </div>
  //         </div>
  //       </Link>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <Link
  //       className="text-white"
  //       to={{
  //         pathname: `/mars-rovers/rover/${rovers.curiosity}`,
  //         state: { roverName: rovers.curiosity },
  //       }}>
  //       <div className="badge red">
  //         <div className="circle">
  //           <img src={Rover1} alt="rover-img" />
  //         </div>
  //         <div className="ribbon">
  //           <span>Curiosity</span>
  //         </div>
  //       </div>
  //     </Link>

  //     <Link
  //       className="text-white"
  //       to={{
  //         pathname: `/mars-rovers/rover/${rovers.opportunity}`,
  //         state: { roverName: rovers.opportunity },
  //       }}>
  //       <div className="badge red">
  //         <div className="circle">
  //           <img src={Rover2} alt="rover-img" />
  //         </div>
  //         <div className="ribbon">
  //           <span>Opportunity</span>
  //         </div>
  //       </div>
  //     </Link>
  //   </>
  // );
}
