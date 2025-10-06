"use client";

import { useState } from "react";

const WorkDescription = ({ description }: { description: string[] }) => {
  const [isShow, setIsShow] = useState(false);

  const shouldShowToggle = description.length > 1;

  return (
    <ul className="space-y-2 mt-2">
      {description
        .slice(0, isShow && shouldShowToggle ? description.length : 1)
        .map((desc, id) => (
          <li key={id} className="flex items-start text-gray-400">
            <span className="text-primary mr-2">•</span>
            <span>{desc}</span>
          </li>
        ))}

      {shouldShowToggle && (
        <span
          onClick={() => setIsShow(!isShow)}
          className="text-primary cursor-pointer text-sm font-medium hover:underline"
        >
          {isShow ? "Show Less" : "Show More"}
        </span>
      )}
    </ul>
  );
};

export default WorkDescription;
