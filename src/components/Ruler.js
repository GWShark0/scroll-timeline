import { range } from 'lodash';
import { memo } from 'react';
import { useScroll } from 'react-use';

import './Ruler.css';

function Ruler(props) {
  const { scrollRef } = props;

  const { x } = useScroll(scrollRef);

  const rulerStyle = {
    transform: `translate3d(-${x}px, 0, 0)`,
  };

  return (
    <div className="ruler-container">
      <div className="ruler" style={rulerStyle}>
        {range(30).map((index) => {
          return (
            <div className="interval" key={index}>
              <small className="label">{index}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Ruler);
