export function createCountdown(duration?: number) {
  let time = duration || 60;
  // eslint-disable-next-line no-undef
  let interval: NodeJS.Timer;

  return {
    start: () => {
      interval = setInterval(() => {
        time -= 1;
        if (time <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    },

    stop: () => {
      clearInterval(interval);
    },

    reset: () => {
      time = duration || 60;
    },

    getTime: () => time,

    isFinished: () => time <= 0,

    isRunning: () => !!interval,
  };
}
