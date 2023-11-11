import { useState, useEffect } from "react";
import Play from "@/components/svg/Play";
import Pause from "@/components/svg/Pause";
import Favourite from "@/components/svg/Favourite";
import { usePlayerContext } from "@/context/PlayerContext";

type Track = {
  id: string;
  title: string;
  url: string;
};

type TrackList = {
  tracks: Track[];
};

export default function TrackList({ tracks }: TrackList) {
  const {
    searchTerm,
    currentTrack,
    setCurrentIndex,
    isPlaying,
    handlePlayPause,
  } = usePlayerContext();
  const [durations, setDurations] = useState<number[]>([]);
  const [filteredTracks, setFilteredTracks] = useState(tracks);

  useEffect(() => {
    setFilteredTracks(
      tracks.filter((track) =>
        track.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [tracks, searchTerm]);

  useEffect(() => {
    const fetchDurations = async () => {
      const durationPromises = filteredTracks.map(async (track) => {
        const audio = new Audio(track.url);
        audio.load();
        return new Promise<number>((resolve) => {
          audio.addEventListener("loadedmetadata", () => {
            resolve(audio.duration);
          });
        });
      });
      const trackDurations = await Promise.all(durationPromises);
      setDurations(trackDurations);
    };

    fetchDurations();
  }, [filteredTracks]);

  const handleTrackClick = (index: number, track: Track) => {
    setCurrentIndex(index);
    handlePlayPause(track);
  };

  const renderTrack = () =>
    filteredTracks.map((item, index) => {
      const { id, title } = item;
      const duration = durations[index];

      return (
        <li
          key={index}
          className="px-4 w-full h-16 p-2 flex items-center justify-between hover:bg-[#dadada] cursor-pointer border-b-2 border-black"
          onClick={() => handleTrackClick(index, item)}
        >
          <div className="h-full flex items-center gap-4">
            <button>
              {currentTrack?.id === id && isPlaying ? (
                <Pause className="h-6 fill-black" />
              ) : (
                <Play className="h-6 fill-black" />
              )}
            </button>
            <p>{title}</p>
          </div>
          <div className="flex items-center gap-4 md:gap-10">
            <p>{formatDuration(duration)}</p>
            <Favourite className="h-6" />
          </div>
        </li>
      );
    });

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="pb-24">
      <div className="container mx-auto">
        <div className="rounded-2xl">
          <ul className="flex flex-wrap">{renderTrack()}</ul>
        </div>
      </div>
    </section>
  );
}
