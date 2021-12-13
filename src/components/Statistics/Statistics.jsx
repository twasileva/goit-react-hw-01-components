export const Statistics = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <li class="item" key={item.id}>
          <span class="label">{item.label}</span>
          <span class="percentage">{item.percentage}%</span>
        </li>
      ))}
    </>
  );
};
