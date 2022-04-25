import { range } from 'lodash';
import { memo } from 'react';

import './Ruler.css';

function Ruler(props) {
  const { scrollX } = props;

  const rulerStyle = {
    transform: `translate3d(-${scrollX}px, 0, 0)`,
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
