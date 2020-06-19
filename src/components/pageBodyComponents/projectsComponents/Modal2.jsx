// import React, { useState } from 'react';
// import M from 'materialize-css';

// const Modal2 = ({ detail }) => {
//   let sliderInstance = null;
//   let modalInstance = null;

//   console.log(detail);

//   //   const modalOnClose = () => {
//   //     if (detail) {
//   //       setDetail(null);
//   //     }
//   //   };
//   //   const modalOptions = {
//   //     onCloseEnd: modalOnClose,
//   //   };

//   document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.modal');
//     console.log(elems);
//     modalInstance = M.Modal.init(elems, {});
//     console.log(modalInstance);
//     // let elems = document.querySelector('.slider');
//     // console.log(elems);
//     // sliderInstance = M.Slider.init(elems, sliderOptions);
//   });

//   console.log(modalInstance);
//   const movePrevSlide = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     sliderInstance.prev();
//   };

//   const moveNextSlide = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     sliderInstance.next();
//   };

//   return (
//     <div id="modal-detail" className="modal">
//       <div className="modal-content">

//       </div>
//       {detail && (
//         <div className="modal-footer">
//           <div className="container-fluid">
//             <div className="work-title">{detail.title}</div>
//             <div className="work-subtitle">{detail.subtitle}</div>
//             <div className="work-explanation">{detail.description}</div>
//           </div>
//           <div className="link-quit container-fluid">

//           </div>
//         </div>
//       )}
//       ;
//     </div>
//   );
// };

// export default Modal2;
