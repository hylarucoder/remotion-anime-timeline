import React from "react";
import { useCurrentFrame,interpolateColors, useVideoConfig, Sequence, interpolate, spring } from "remotion";

const NestScopedEL: React.FC = () => {
  const frame = useCurrentFrame();
  
  const left = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1000,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });

  const borderRadius = spring({
    frame,
    fps: 30,
    from: 0,
    to: 50,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });

  const fontSize = spring({
    frame,
    fps: 30,
    from: 16,
    to: 40,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });
  
  return (
    <div
      className="scoped-el text-center flex justify-center items-center bg-amber-400 absolute w-[200px] h-[200px] top-[600px]"
      style={{
        left: `${left}px`,
        borderRadius: `${borderRadius}%`,
        fontSize: `${fontSize}px`,
        backgroundColor: interpolateColors(frame, [0, 30], ['rgb(251, 191, 36)', 'rgb(136, 136, 136)']),
        color: interpolateColors(frame, [0, 30], ['rgb(0, 0, 0)', 'rgb(238, 238, 238)']),
      }}
    >
      Nest Scoped
    </div>
  );
};

const ScopedElement: React.FC = () => {
  const frame = useCurrentFrame();
  
  const left = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1000,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });

  const borderRadius = spring({
    frame,
    fps: 30,
    from: 0,
    to: 50,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });

  const fontSize = spring({
    frame,
    fps: 30,
    from: 16,
    to: 40,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });
  
  return (
    <div
      className="scoped-el flex justify-center items-center bg-amber-400 absolute w-[200px] h-[200px]"
      style={{
        left: `${left}px`,
        borderRadius: `${borderRadius}%`,
        fontSize: `${fontSize}px`,
        backgroundColor: interpolateColors(frame, [0, 30], ['rgb(251, 191, 36)', 'rgb(136, 136, 136)']),
        color: interpolateColors(frame, [0, 30], ['rgb(0, 0, 0)', 'rgb(238, 238, 238)']),
      }}
    >
      Scoped
    </div>
  );
};

const GlobalElement: React.FC = () => {
  const frame = useCurrentFrame();
  
  const left = spring({
    frame: frame - 60,
    fps: 30,
    from: 0,
    to: 1000,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });

  const borderRadius = spring({
    frame: frame - 60,
    fps: 30,
    from: 0,
    to: 50,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });

  const fontSize = spring({
    frame: frame - 60,
    fps: 30,
    from: 16,
    to: 40,
    config: {
      damping: 10,
      mass: 0.5,
    },
  });
  
  return (
    <div
      className="global-el flex justify-center items-center bg-amber-400 absolute w-[200px] h-[200px] top-[300px]"
      style={{
        left: `${left}px`,
        borderRadius: `${borderRadius}%`,
        fontSize: `${fontSize}px`,
        backgroundColor: interpolateColors(frame - 60, [0, 30], ['rgb(251, 191, 36)', 'rgb(170, 170, 170)']),
        color: interpolateColors(frame - 60, [0, 30], ['rgb(0, 0, 0)', 'rgb(0, 238, 0)']),
      }}
    >
      Global
    </div>
  );
};

export const RemotionDemo: React.FC = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={150}>
        <ScopedElement />
      </Sequence>
      <Sequence from={0} durationInFrames={150}>
        <NestScopedEL />
      </Sequence>
      <Sequence from={0} durationInFrames={150}>
        <GlobalElement />
      </Sequence>
    </>
  );
};

export default RemotionDemo;
