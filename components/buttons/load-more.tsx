import React from "react";

type Props = {
    handleMore: () => void
};

const LoadMore = ({handleMore}: Props) => {
  return (
    <button
      onClick={handleMore}
      className="btn btn-accent text-base mx-auto block mt-8 mb-20"
    >
      Load More
    </button>
  );
};

export default LoadMore;
