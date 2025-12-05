"use client";

import { useState } from "react";

function Counter({ totalUsers }) {
  const [count, setCount] = useState(totalUsers);

  return (
    <div className="mt-6 flex flex-col items-start gap-2">
      <p>Кількість користувачів: {totalUsers}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-accent-500 px-4 py-2 text-primary-900 rounded hover:bg-accent-600 transition-all"
      >
        Натиснуто: {count}
      </button>
    </div>
  );
}

export default Counter;
