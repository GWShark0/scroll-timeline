import { useRef } from 'react';

import Cursor from './Cursor';
import Ruler from './Ruler';
import TrackContainer from './TrackContainer';

import './Timeline.css';

export default function Timeline() {
  const timelineRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <div className="timeline" ref={timelineRef}>
      <Ruler scrollRef={scrollRef} />
      <TrackContainer ref={scrollRef} />
      <Cursor scrollRef={scrollRef} timelineRef={timelineRef} />
    </div>
  );
}
