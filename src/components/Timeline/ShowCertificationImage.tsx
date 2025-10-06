"use client";

import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ShowCertificationImage = ({
  certificationImage,
}: {
  certificationImage: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-primary  hover:underline inline-flex items-center gap-1"
      >
        Certification <FaExternalLinkAlt />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-card p-10 rounded-2xl shadow-lg max-w-3xl w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 bg-primary w-8  h-8 rounded-full   flex items-center justify-center right-2 text-white text-xl font-bold"
            >
              ✕
            </button>

            <Image
              width={800}
              height={600}
              src={certificationImage}
              alt="Certification"
              className="max-h-[80vh] mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCertificationImage;
