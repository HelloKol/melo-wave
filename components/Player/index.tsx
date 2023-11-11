import Previous from "@/components/svg/Previous";
import Next from "@/components/svg/Next";
import Surprise from "@/components/svg/Surprise";
import VolumeMute from "@/components/svg/VolumeMute";
import VolumeMid from "@/components/svg/VolumeMid";
import VolumeHigh from "@/components/svg/VolumeHigh";
import { usePlayerContext } from "@/context/PlayerContext";

export default function Player() {
  const {
    audio,
    currentTrack,
    currentPlaybackTime,
    isPlaying,
    handlePlayPause,
    playRandomTrack,
    playPreviousTrack,
    playNextTrack,
  } = usePlayerContext();

  const formatPlaybackTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleVolume = () => {};

  return (
    <section className="px-4 border-b-2 border-black">
      <div className="container mx-auto relative py-14">
        <div className="md:flex items-center gap-14">
          {isPlaying ? (
            <button
              className="w-[180px] h-[180px] bg-black text-white rounded-full"
              onClick={() => handlePlayPause(currentTrack)}
            >
              Pause
            </button>
          ) : (
            <button
              className="w-[180px] h-[180px] bg-black text-white rounded-full"
              onClick={() => handlePlayPause(currentTrack)}
            >
              Play
            </button>
          )}
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold uppercase flex justify-end mb-4 md:mb-0">
            {formatPlaybackTime(currentPlaybackTime)}
          </h1>
          <div className="absolute bottom-8 right-0 flex items-center gap-6">
            <button onClick={playPreviousTrack}>
              <Previous className="h-6" />
            </button>
            <button onClick={playNextTrack}>
              <Next className="h-6" />
            </button>
            <button onClick={playRandomTrack}>
              <Surprise className="h-6" />
            </button>
            <button onClick={handleVolume}>
              <VolumeMute className="h-6" />
            </button>
            <button onClick={handleVolume}>
              <VolumeHigh className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
