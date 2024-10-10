import { memo } from "react";

const Girl = () => {
  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      width={35}
    >
      <circle
        cx="64"
        cy="64"
        r="60"
        fill="#ffc1e8"
        className="fill-4bc190"
      ></circle>
      <circle
        cx="64"
        cy="64"
        r="48"
        fill="#fc62c3"
        opacity=".3"
        className="fill-356cb6"
      ></circle>
      <path
        d="M99 82a4 4 0 0 1-4-4V34a13 13 0 0 0-25.9 0l6 48a12 12 0 0 0 24 0Z"
        fill="#393c54"
        className="fill-393c54"
      ></path>
      <circle
        cx="75"
        cy="36"
        r="10"
        fill="#f85565"
        className="fill-f85565"
      ></circle>
      <path
        d="M63 28a29.41 29.41 0 0 1 29.41 29.41v6.12a10.94 10.94 0 0 1-10.94 10.94H44.53a10.94 10.94 0 0 1-10.94-10.94v-6.12A29.41 29.41 0 0 1 63 28Z"
        fill="#393c54"
        className="fill-393c54"
      ></path>
      <circle
        cx="85.98"
        cy="74.31"
        r="6.43"
        fill="#fbc0aa"
        className="fill-fbc0aa"
      ></circle>
      <path
        d="M64 124a59.62 59.62 0 0 0 33-9.92l-2.66-7.44A10 10 0 0 0 85 100H41.05a10 10 0 0 0-9.42 6.64L29.36 113A59.74 59.74 0 0 0 64 124Z"
        fill="#d61111"
        className="fill-f8dc25"
      ></path>
      <path
        d="M82.92 100H43.08a20 20 0 0 0 39.84 0Z"
        fill="#b00000"
        className="fill-f2bc0f"
      ></path>
      <path
        d="M72 101.25a9 9 0 0 1-18 0c0-5 4-3 9-3s9-1.97 9 3Z"
        fill="#ffffff"
        className="fill-ffffff"
      ></path>
      <path
        d="M63 87.75v13.75"
        strokeWidth="12px"
        strokeLinejoin="round"
        stroke="#fbc0aa"
        fill="none"
        strokeLinecap="round"
        className="stroke-fbc0aa"
      ></path>
      <circle
        cx="40.02"
        cy="74.31"
        r="6.43"
        fill="#fbc0aa"
        className="fill-fbc0aa"
      ></circle>
      <path
        d="M63 98.84a23 23 0 0 1-23-23V60.76a23 23 0 0 1 46 0v15.11a23 23 0 0 1-23 22.97Z"
        fill="#ffd8c9"
        className="fill-ffd8c9"
      ></path>
      <path
        d="M44.82 51A19.9 19.9 0 0 1 62.4 38.54"
        stroke="#ffffff"
        strokeMiterlimit="10"
        strokeWidth="3.68px"
        opacity=".1"
        fill="none"
        strokeLinecap="round"
        className="stroke-ffffff"
      ></path>
      <path
        d="M88.82 58.82A25.82 25.82 0 0 0 62.27 33c-14.06.39-25.09 12.28-25.09 26.35v4a4.83 4.83 0 0 0 1.48 3.51 5.93 5.93 0 0 0 1.36 1V64a4 4 0 0 1 4-4h5.38a1 1 0 0 0 .9-.55L52 56l1.72 3.45a1 1 0 0 0 .9.55H82a4 4 0 0 1 4 4v3.89a5.93 5.93 0 0 0 1.36-1 4.83 4.83 0 0 0 1.48-3.51Z"
        fill="#515570"
        className="fill-515570"
      ></path>
      <path
        d="M70.67 75.28a3 3 0 0 1 6 0"
        stroke="#515570"
        strokeWidth="2px"
        strokeLinejoin="round"
        fill="none"
        strokeLinecap="round"
        className="stroke-515570"
      ></path>
      <path
        d="M62.5 77.5v4"
        strokeWidth="4.71px"
        strokeLinejoin="round"
        stroke="#fbc0aa"
        fill="none"
        strokeLinecap="round"
        className="stroke-fbc0aa"
      ></path>
      <path
        d="M72 68h7"
        opacity=".2"
        stroke="#515570"
        strokeWidth="2px"
        strokeLinejoin="round"
        fill="none"
        strokeLinecap="round"
        className="stroke-515570"
      ></path>
      <path
        d="M55 75.28a3 3 0 0 0-6 0"
        stroke="#515570"
        strokeWidth="2px"
        strokeLinejoin="round"
        fill="none"
        strokeLinecap="round"
        className="stroke-515570"
      ></path>
      <path
        d="M54 68h-7"
        opacity=".2"
        stroke="#515570"
        strokeWidth="2px"
        strokeLinejoin="round"
        fill="none"
        strokeLinecap="round"
        className="stroke-515570"
      ></path>
      <path
        d="M70.55 86a1 1 0 0 1 .94 1.07 8.56 8.56 0 0 1-17 0 1 1 0 0 1 .96-1.07Z"
        fill="#393c54"
        className="fill-393c54"
      ></path>
      <path
        d="M58 92.91a8.52 8.52 0 0 0 10.08 0C67 91.16 65.17 91 63 91s-4 .16-5 1.91Z"
        fill="#f85565"
        className="fill-f85565"
      ></path>
      <path
        d="M68 88H58a1.84 1.84 0 0 1-1.73-2h13.5A1.84 1.84 0 0 1 68 88Z"
        fill="#ffffff"
        className="fill-ffffff"
      ></path>
    </svg>
  );
};

export const MemoizedGirl = memo(Girl);
export { Girl };
