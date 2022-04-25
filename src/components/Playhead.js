import { memo } from 'react';
import { DraggableCore } from 'react-draggable';

import { ReactComponent as PlayheadHandle } from 'assets/cursor.svg';

import './Playhead.css';

function Playhead(props) {
  const { onDragStart, onDrag, onDragEnd, playheadX, scrollX } = props;

  const x = playheadX - scrollX;
  const style = { transform: `translate3d(${x}px, 0, 0)` };

  return (
    <DraggableCore onStart={onDragStart} onDrag={onDrag} onStop={onDragEnd}>
      <div className="playhead" style={style}>
        <PlayheadHandle className="playhead-handle" />
      </div>
    </DraggableCore>
  );
}

export default memo(Playhead);
