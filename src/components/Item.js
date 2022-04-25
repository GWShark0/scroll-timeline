import './Item.css';

export default function Item(props) {
  const { offset = 0, thumb = '', width = 0 } = props;

  const handleClick = (event) => {
    event.stopPropagation();
  };

  const itemStyle = {
    width,
    transform: `translateX(${offset}px)`,
  };
  const thumbnailStyle = { backgroundImage: `url(${thumb})` };

  return (
    <div className="item" style={itemStyle} onClick={handleClick}>
      <div className="thumbnails" style={thumbnailStyle} />
    </div>
  );
}
