// import React from "react";
// import Fade from 'react-reveal/Fade';
// import SkillsBar from './SkillsBar';
// import "./style.css";

// const Skills = ({ label, per }) => {
//   return (
//     <React.Fragment>
//          <div className="row" id="Skills"> 
//                 <div className="col-12 skills">
//                     {SkillsBar.map((x) => 
//                         <Skills label={x.name} per={x.value}/>
//                     )}
//                 </div> 
//             </div>
//         <Fade delay={1000}> 
//         <div>
//             <div data-aos="zoom-in-up" className="progress-block">
//                 <h2>{label}</h2>
//             <div className="progress">
//                 <div className="progress-bar bg-danger progress-bar" role="progressbar" aria-valuenow={per} aria-valuemin="0" aria-valuemax="100" style={{width: per+"%"}}></div>
//             </div>
//             </div>
//         </div>
//         </Fade>
//     </React.Fragment>
//   );
// };

// export default Skills;