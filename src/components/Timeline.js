import { clamp } from 'lodash';
import { useRef, useState } from 'react';
import { useScroll } from 'react-use';

import { CONTENT_WIDTH, TIMELINE_LEFT_PADDING } from '../constants';
import Cursor from './Cursor';
import Playhead from './Playhead';
import Ruler from './Ruler';
import TrackContainer from './TrackContainer';

import './Timeline.css';

export default function Timeline() {
  const timelineRef = useRef(null);
  const scrollRef = useRef(null);
  const [playheadX, setPlayheadX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const { x: scrollX } = useScroll(scrollRef);

  const handlePlayhead = (event) => {
    const { clientX } = event;
    const x = clamp(
      clientX + scrollX - TIMELINE_LEFT_PADDING,
      0,
      CONTENT_WIDTH - TIMELINE_LEFT_PADDING
    );
    setPlayheadX(x);
  };

  const handleDragStart = (event) => setDragging(true);

  const handleDragEnd = (event) => setDragging(false);

  return (
    <div className="timeline" ref={timelineRef}>
      <Ruler scrollX={scrollX} />
      <TrackContainer ref={scrollRef} onClick={handlePlayhead} />
      {!dragging && <Cursor scrollX={scrollX} timelineRef={timelineRef} />}
      <Playhead
        onDragStart={handleDragStart}
        onDrag={handlePlayhead}
        onDragEnd={handleDragEnd}
        playheadX={playheadX + TIMELINE_LEFT_PADDING}
        scrollX={scrollX}
      />
    </div>
  );
}
