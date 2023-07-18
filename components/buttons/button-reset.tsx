import React from "react";

type Props = {
    handleReset: () => void
};

const ButtonReset = ({handleReset}: Props) => {
  return (
    <button className="btn btn-link no-underline" onClick={handleReset}>
      Reset all
    </button>
  );
};

export default ButtonReset;
