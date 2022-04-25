import { forwardRef, memo } from 'react';

import TrackContainer from './TrackContainer';

const ScrollContainer = forwardRef((props, ref) => {
  const { onClick } = props;

  return (
    <div className="scroll-container" onClick={onClick} ref={ref}>
      <TrackContainer />
    </div>
  );
});

export default memo(ScrollContainer);
