// export default function scrrolledTo(position) {

//   const screenRezol = document.documentElement.clientWidth;
//   const targetPos = document.documentElement.scrollTop;
//   let interval;
//   if ( document.documentElement.scrollTop < document.documentElement.clientHeight ) {
//     document.documentElement.scrollTop += 20;
//     interval = setTimeout(() => scrrolledTo(), 4);
//   } else clearTimeout(interval);
// }
    


export default function scrrolledTo(position) {
  // const teargetScroll = position;
  // const clients = document.querySelector(".happy-clients-container")
  
  // const screenRezol = document.documentElement.clientHeight;
  // const targetPos = document.documentElement.scrollTop;
  // clients.getBoundingClientRect().y = 0;
  
  let interval;
  if ( document.documentElement.scrollTop < document.documentElement.clientHeight ) {
    document.documentElement.scrollTop += 20;
    interval = setTimeout(() => scrrolledTo(), 4);
  } else clearTimeout(interval);
}