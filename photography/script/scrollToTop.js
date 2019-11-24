export default function srcrollToTop(position, correction = 0) {
  const target = Number(position.toFixed(0));

  scroll();
  function scroll() {
    let interval;
    if (document.documentElement.scrollTop > target + correction) {
      document.documentElement.scrollTop -= 20;
      interval = setTimeout(() => scroll(), 4);
    } else clearTimeout(interval);
  }
}
