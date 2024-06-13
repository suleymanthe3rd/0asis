import { useState, useEffect } from 'react';
import styled from 'styled-components';

const WatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 3em;
  color: #c6f7d3;
  font-weight: bold; /* Add this to make the text bold */
  border-top: 1px solid #c6f7d3;
  border-bottom: 1px solid #c6f7d3; /* Add this to add top and bottom borders */
  width: 100%;
`;

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Add this to display 24-hour clock
  });

  return (
    <WatchContainer>
      {formattedTime}
    </WatchContainer>
  );
};

export default Watch;