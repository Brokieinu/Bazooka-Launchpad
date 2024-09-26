// import React from 'react';
// import styles from '@/styles/viewCoinProgressIndicator.module.css';
// import { TIndicatorsItem } from '@/types/indicator';
// type TProgress = {
//   indicator: TIndicatorsItem;
// };

// const ViewCoinProgressIndicator = ({ indicator }: TProgress) => {
//   return (
//     <>
//       <div className={styles.indicator}>
//         <div
//           className={`${styles.indicatorCircle} ${
//             !indicator.lastChild ? styles.indicatorLine : ''
//           }
//           ${
//             indicator.active
//               ? styles.indicatorCircleActive
//               : styles.indicatorCircleInactive
//           }
//           `}
//         >
//           <div>
//             <span></span>
//           </div>
//         </div>

//         <div className={styles.indicatorText}>
//           <h3>{indicator.title}</h3>
//           <h5>{indicator.subtitle} </h5>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewCoinProgressIndicator;
