const Pause = (props: { className?: string }): JSX.Element => {
  const { className } = props;
  return (
    <svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 1920 1920"
    >
        <path d="M754.571 0v1920H206V0h548.571Zm960 0v1920H1166V0h548.571Z" fill-rule="evenodd"/>

    </svg>
  );
};

export default Pause;
