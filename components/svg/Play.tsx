const Play = (props: { className?: string }): JSX.Element => {
  const { className } = props;
  return (
    <svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1920"
    >
    <path d="M175 .024V1920l1570.845-959.927z" fill-rule="evenodd"/>
    </svg>
  );
};

export default Play;
