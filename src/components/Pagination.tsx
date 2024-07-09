import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { PaginationProps } from "../Types/Types";

const Pagination: React.FC<PaginationProps> = ({
  offset,
  limit,
  onPrevious,
  onNext,
}) => {
  const [canNext, setCanNext] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const currentPage = Math.floor(offset / limit) + 1;
  const isFirstPage = offset === 0;

  const handleNext = () => {
    if (canNext) {
      setCanNext(false);
      onNext();

      const id = setTimeout(() => setCanNext(true), 5000);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div className="flex items-center justify-between px-4 border-t p-4 mt-16">
      {/* Previous Button */}
      <button
        className={`bg-purple-500 text-white  py-1 px-3 rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFirstPage || !canNext ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"}`}
        onClick={onPrevious}
        disabled={isFirstPage || !canNext}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Page Number */}
      <span className="text-lg font-bold text-purple-600 mx-4">
        Halaman {currentPage}
      </span>

      {/* Next Button */}
      <button
        className={`bg-purple-500 text-white py-1 px-3 rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!canNext ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"}`}
        onClick={handleNext}
        disabled={!canNext}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
