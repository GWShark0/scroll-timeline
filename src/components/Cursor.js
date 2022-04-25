import { clamp } from 'lodash';
import { useHoverDirty, useMouseHovered } from 'react-use';

import { CONTENT_WIDTH, TIMELINE_LEFT_PADDING } from 'constants';

import './Cursor.css';

export default function Cursor(props) {
  const { scrollX, timelineRef } = props;
  const isHovering = useHoverDirty(timelineRef);
  const { elX: mouseX } = useMouseHovered(timelineRef, { bound: true });

  if (!isHovering) {
    return null;
  }

  const offset = clamp(mouseX, TIMELINE_LEFT_PADDING, CONTENT_WIDTH - scrollX);
  const style = { transform: `translate3d(${offset}px, 0, 0)` };

  return <div className="cursor" style={style} />;
}
