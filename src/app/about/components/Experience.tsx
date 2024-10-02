import TimelineEvent from "@/components/TimeLineEvent";
import { Timeline } from "@/components/ui/timeline";

import timeLineImage1DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps.png";
import timeLineImage2DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps2.png";
import timeLineImage3DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps3.png";
import timeLineImage4DeppenMaps from "@/assets/timeline-images/timeline-image-deppen-maps4.png";

import timeLineImage1bilds from "@/assets/timeline-images/timeline-image-bilds.webp";
import timeLineImage2bilds from "@/assets/timeline-images/timeline-image-bilds2.webp";
import timeLineImage3bilds from "@/assets/timeline-images/timeline-image-bilds3.webp";
import timeLineImage4bilds from "@/assets/timeline-images/timeline-image-bilds4.webp";

import timeLineImage1resleeve from "@/assets/timeline-images/timeline-image-resleeve-auth.png";
import timeLineImage2resleeve from "@/assets/timeline-images/timeline-image-resleeve-auth2.png";
import timeLineImage3resleeve from "@/assets/timeline-images/timeline-image-resleeve-auth3.png";

import timeLineImage1lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls.png";
import timeLineImage2lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls2.png";
import timeLineImage3lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls3.png";
import timeLineImage4lottoBalls from "@/assets/timeline-images/timeline-image-lottoBalls4.png";
import { forwardRef } from "react";

export const Experience = forwardRef<
  HTMLDivElement,
  { ref: React.Ref<HTMLDivElement> }
>((props, ref) => {
  return (
    <div id="experience" className="space-y-6" ref={ref}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Experience
        </h1>
      </div>
      <ExperienceTimeline />

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Frontend Developer | Deepen
        </h3>
        <p className="text-sm text-muted-foreground">January 2023 - Present</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            Developed and maintained a web application using React and LeafletJS
            for map integration and visualization.
          </li>
          <li>
            Created a cross-platform social networking app with React Native.
          </li>
          <li>
            Collaborated with the back-end team to define and consume RESTful
            APIs.
          </li>
          <li>Actively participated in sprint planning and review meetings.</li>
        </ul>
      </div>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Frontend Developer | RESLEEVE
        </h3>
        <p className="text-sm text-muted-foreground">April 2024 – May 2024</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            Collaborated on implementing secure authentication flows using
            Auth0.
          </li>
          <li>Used Next.js to build a modern and scalable web application.</li>
          <li>
            Integrated Sentry for error monitoring and Amplitude/Segment for
            user analytics.
          </li>
        </ul>
      </div>
    </div>
  );
});

Experience.displayName = "Experience";

const ExperienceTimeline = () => (
  <Timeline
    data={[
      {
        title: "january 2023 - Deepen",
        content: (
          <TimelineEvent
            description="Developed and maintained a web application using React and
                  LeafletJS for map integration and visualization."
            images={[
              timeLineImage1DeppenMaps.src,
              timeLineImage2DeppenMaps.src,
              timeLineImage3DeppenMaps.src,
              timeLineImage4DeppenMaps.src
            ]}
          />
        )
      },
      {
        title: "March 2023 - Deepen",
        content: (
          <TimelineEvent
            description="Created a cross-platform social networking app with React Native."
            images={[
              timeLineImage1bilds.src,
              timeLineImage2bilds.src,
              timeLineImage3bilds.src,
              timeLineImage4bilds.src
            ]}
          />
        )
      },
      {
        title: "April 2024 - RESLEEVE",
        content: (
          <TimelineEvent
            description="Collaborated on implementing secure authentication flows using
                  Auth0."
            images={[
              timeLineImage1resleeve.src,
              timeLineImage2resleeve.src,
              timeLineImage3resleeve.src
            ]}
          />
        )
      },
      {
        title: "June 2024 - Deepen",
        content: (
          <TimelineEvent
            description="Used React Native to build a mobile application for a lottery game."
            images={[
              timeLineImage1lottoBalls.src,
              timeLineImage2lottoBalls.src,
              timeLineImage3lottoBalls.src,
              timeLineImage4lottoBalls.src
            ]}
          />
        )
      }
    ]}
  />
);
