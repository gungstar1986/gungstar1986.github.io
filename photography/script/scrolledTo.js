export default function scrrolledTo( ) {
  let interval;
  if ( document.documentElement.scrollTop < document.documentElement.clientHeight ) {
    document.documentElement.scrollTop += 20;
    interval = setTimeout(() => scrrolledTo(), 4);
  } else clearTimeout(interval);
}
    
  

