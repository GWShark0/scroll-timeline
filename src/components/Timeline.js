import { clamp } from 'lodash';
import { useCallback, useRef, useState } from 'react';
import { useScroll } from 'react-use';

import { CONTENT_WIDTH, TIMELINE_LEFT_PADDING } from '../constants';
import Cursor from './Cursor';
import Playhead from './Playhead';
import Ruler from './Ruler';
import ScrollContainer from './ScrollContainer';

import './Timeline.css';

export default function Timeline() {
  const timelineRef = useRef(null);
  const scrollRef = useRef(null);
  const [playheadX, setPlayheadX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const { x: scrollX } = useScroll(scrollRef);

  const handlePlayhead = useCallback(
    (event) => {
      const { clientX } = event;
      const x = clamp(
        clientX + scrollX - TIMELINE_LEFT_PADDING,
        0,
        CONTENT_WIDTH - TIMELINE_LEFT_PADDING
      );
      setPlayheadX(x);
    },
    [scrollX]
  );

  const handleDragStart = useCallback((event) => setDragging(true), []);

  const handleDragEnd = useCallback((event) => setDragging(false), []);

  return (
    <div className="timeline" ref={timelineRef}>
      <Ruler scrollX={scrollX} />
      <ScrollContainer ref={scrollRef} onClick={handlePlayhead} />
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
