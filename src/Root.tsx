import './tailwind.css';
import { Composition } from "remotion";
import Clip from './Clip';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AnimeJSTimelineDemo"
        component={Clip}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
