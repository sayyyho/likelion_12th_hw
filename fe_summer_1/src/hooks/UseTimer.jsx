import { useEffect, useState } from 'react';

export const UseTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = getNextWednesday18h30();

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ d: days, h: hours, m: minutes, s: seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getNextWednesday18h30 = () => {
    const now = new Date();
    const nextWednesday = new Date();
    nextWednesday.setDate(now.getDate() + ((3 + 7 - now.getDay()) % 7)); // 다음 수요일로 설정
    nextWednesday.setHours(18, 30, 0, 0);

    if (nextWednesday < now) {
      nextWednesday.setDate(nextWednesday.getDate() + 7);
    }
    return nextWednesday;
  };

  return (
    <>
      <h2>다음 주 수요일 18시 30분까지 남은 시간</h2>
      <p>
        {timeLeft.d}일 {timeLeft.h}시간 {timeLeft.m}분 {timeLeft.s}초
      </p>
    </>
  );
};
