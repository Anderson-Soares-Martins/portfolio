import Image from "next/image";
import React from "react";

interface TimelineEventProps {
  description: string;
  images: string[];
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  description,
  images
}) => {
  return (
    <div className="relative pl-20 pr-4 md:pl-4 w-full">
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={`Event image ${index + 1}`}
              src={image}
              loading="lazy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
