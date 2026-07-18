import './skeleton.css';

const Skeleton = ({ type = 'text', width, height, count = 1 }) => {
  const items = Array.from({ length: count });
  return (
    <>
      {items.map((_, i) => (
        <div
          key={i}
          className={`skeleton skeleton--${type}`}
          style={{ width, height }}
        />
      ))}
    </>
  );
};

export default Skeleton;
