export default (ms: number) => {
  const result = [];

  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    result.push(hours);
  }
  minutes -= hours * 60;
  result.push(minutes);
  seconds -= minutes * 60;
  result.push(seconds);
  return result.map((el) => (el < 10 ? `0${el}` : el)).join(':');
};
