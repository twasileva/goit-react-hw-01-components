export const SectionTitle = props => {
  return (
    <section>
      {props.title && <h2>{props.title}</h2>}
      {<ul class="stat-list">{props.children}</ul>}
    </section>
  );
};
