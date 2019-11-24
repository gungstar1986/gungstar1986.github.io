export default function scrrolledTo(position, correction = 0) {
  const target = Number(position.toFixed(0));
  // document.documentElement.clientHeight => Клиетское расширение экрана оси Y
  // document.documentElement.scrollTop => текущая позиция относительно Top: 0 документа
  scroll();
  function scroll() {
    let interval;
    if (document.documentElement.scrollTop < target + correction) {
      document.documentElement.scrollTop += 20;
      interval = setTimeout(() => scroll(), 4);
    } else clearTimeout(interval);
  }
}
