const VolumeMute = (props: { className?: string }): JSX.Element => {
  const { className } = props;
  return (
    <svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
    <path d="M17.985 2.059c-0.326-0.173-0.721-0.154-1.028 0.053l-10.034 7.878-3.332 0.002c-1.704 0-3.090 1.208-3.090 2.7l0.053 6.598c0 1.486 1.386 2.695 3.089 2.695l3.331 0.002 9.981 7.898c0.168 0.113 0.363 0.171 0.559 0.171 0.161 0 0.323-0.039 0.469-0.117 0.327-0.173 0.532-0.512 0.532-0.883v-26.115c0-0.369-0.204-0.709-0.53-0.883zM16.516 27.176l-8.675-7.016c-0.165-0.111-0.36-0.171-0.559-0.171l-3.637-0.002c-0.642 0-1.090-0.366-1.090-0.702l-0.054-6.598c0-0.328 0.448-0.693 1.090-0.693l3.638-0.002c0.199 0 0.393-0.059 0.558-0.171l8.729-7v22.355zM27.938 16.016l3.269-3.308c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-3.261 3.299-3.261-3.299c-0.39-0.39-1.023-0.39-1.414 0s-0.39 1.024 0 1.414l3.268 3.308-3.238 3.276c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l3.229-3.267 3.229 3.267c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414z"></path>
    </svg>
  );
};

export default VolumeMute;