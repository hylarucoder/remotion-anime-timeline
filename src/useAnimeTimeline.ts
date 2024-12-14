import { useEffect, useRef } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { AnimeTimelineInstance } from "animejs";

export const useAnimeTimeline = <T extends HTMLElement>(
  animeTimelineFactory: () => AnimeTimelineInstance,
) => {
  const animationScopeRef = useRef<T>(null);
  const timelineRef = useRef<AnimeTimelineInstance | null>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  useEffect(() => {
    timelineRef.current = animeTimelineFactory();
    timelineRef.current.pause();
    return () => {};
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.seek(frame / fps);
    }
  }, [frame, fps]);

  return animationScopeRef;
};
