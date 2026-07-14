import { Composition } from "remotion";
import VlogComposition from "./VlogComposition";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="AutoVlog"
        component={VlogComposition}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};