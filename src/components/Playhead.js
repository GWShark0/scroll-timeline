import { memo, useRef } from 'react';
import { DraggableCore } from 'react-draggable';

import { ReactComponent as PlayheadHandle } from '../assets/cursor.svg';

import './Playhead.css';

function Playhead(props) {
  const nodeRef = useRef(null);
  const { onDragStart, onDrag, onDragEnd, playheadX, scrollX } = props;

  const x = playheadX - scrollX;
  const style = { transform: `translate3d(${x}px, 0, 0)` };

  return (
    <DraggableCore
      onStart={onDragStart}
      onDrag={onDrag}
      onStop={onDragEnd}
      nodeRef={nodeRef}
    >
      <div className="playhead" style={style} ref={nodeRef}>
        <PlayheadHandle className="playhead-handle" />
      </div>
    </DraggableCore>
  );
}

export default memo(Playhead);
