import { forwardRef } from 'react';
import Item from './Item';
import bird from 'assets/bird.jpg';
import butterfly from 'assets/butterfly.jpg';
import cat from 'assets/cat.jpg';
import dog from 'assets/dog.jpg';
import squirrel from 'assets/squirrel.jpg';
import turtle from 'assets/turtle.jpg';

const TrackContainer = forwardRef((props, ref) => {
  return (
    <div className="scroll-container" ref={ref}>
      <div className="track-container">
        <div className="track">
          <Item offset={200} thumb={dog} width={300} />
        </div>
        <div className="track">
          <Item offset={400} thumb={cat} width={900} />
        </div>
        <div className="track">
          <Item offset={100} thumb={butterfly} width={700} />
        </div>
        <div className="track">
          <Item offset={700} thumb={squirrel} width={500} />
        </div>
        <div className="track">
          <Item offset={0} thumb={bird} width={1000} />
        </div>
        <div className="track">
          <Item offset={900} thumb={turtle} width={800} />
        </div>
      </div>
    </div>
  );
});

export default TrackContainer;
