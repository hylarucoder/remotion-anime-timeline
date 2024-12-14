import React from "react";
import { useAnimeTimeline } from "./useAnimeTimeline";
import anime from "animejs/lib/anime.es";

const NestScopedEL: React.FC = () => {
  return (
    <div
      className={
        "scoped-el text-center text-lg flex justify-center top-[600px] items-center bg-amber-400 absolute w-[200px] h-[200px]"
      }
    >
      Nest Scoped
    </div>
  );
};

export const AnimeJSDemo: React.FC = () => {
  const scopeRef = useAnimeTimeline(() => {
    const tl = anime.timeline({});
    tl.add({
      // You can add more anime logic here, even for nested components
      targets: scopeRef.current?.querySelectorAll(".scoped-el"),
      left: "1000px",
      backgroundColor: "#888",
      borderRadius: ["0%", "50%"],
      color: "#EEE",
      fontSize: "40px",
      easing: "easeInOutElastic",
      duration: 1,
    });
    // You can add more anime logic here, for global elements
    tl.add({
      targets: ".global-el",
      left: "1000px",
      color: "#0E0",
      backgroundColor: "#AAA",
      borderRadius: ["0%", "50%"],
      fontSize: "40px",
      easing: "easeInOutElastic",
      duration: 1,
    });
    return tl;
  });
  return (
    <>
      <div className={"absolute w-full h-full"} ref={scopeRef}>
        <div
          className={
            "scoped-el text-lg flex justify-center items-center bg-amber-400 absolute w-[200px] h-[200px]"
          }
        >
          Scoped
        </div>
        <NestScopedEL/>
      </div>
      <div className="absolute w-full h-full">
        <div
          className={
            "global-el text-lg bg-amber-400 flex justify-center items-center absolute top-[300px] w-[200px] h-[200px]"
          }
        >
          Global
        </div>
      </div>
    </>
  );
};

export default AnimeJSDemo;
