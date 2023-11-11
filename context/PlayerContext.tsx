import React, { createContext, useContext, useEffect, useState } from "react";
const TRACK_LIST = [
  {
    id: "id1",
    title: "Gimme! Gimme! Gimme!",
    url: "/static/audio/ABBA - Gimme! Gimme! Gimme! (A Man After Midnight) (128 kbps).mp3",
  },
  {
    id: "id2",
    title: "I used to retouch",
    url: "/static/audio/lcd.mp3",
  },
  {
    id: "id3",
    title: "Me Gustas Tu",
    url: "/static/audio/me-gusta.mp3",
  },
  {
    id: "id4",
    title: "Interlude No.1",
    url: "/static/audio/Numbers - Interlude No.1 (128 kbps).mp3",
  },
  {
    id: "id5",
    title: "Dissan na mbera",
    url: "/static/audio/super mama djombo - dissan na mbera (128 kbps).mp3",
  },
  {
    id: "id6",
    title: "Money, Money, Money",
    url: "/static/audio/Abba - Money, Money, Money (Official Music Video) (128 kbps).mp3",
  },
  {
    id: "id7",
    title: "Psycho Killer",
    url: "/static/audio/Talking Heads - Psycho Killer (128 kbps).mp3",
  },
  {
    id: "id8",
    title: "Riders On The Storm",
    url: "/static/audio/The Doors - Riders On The Storm (128 kbps).mp3",
  },
  {
    id: "id9",
    title: "Paint It Black",
    url: "/static/audio/The Rolling Stones - Paint It, Black (Official Lyric Video) (128 kbps).mp3",
  },
  {
    id: "id10",
    title: "Seven Nation Army",
    url: "/static/audio/The White Stripes - Seven Nation Army (Official Music Video) (128 kbps).mp3",
  },
];

interface Track {
  id: string;
  title: string;
  url: string;
}

interface PlayerContextProps {
  audio: HTMLAudioElement | null;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
  currentTrack: Track;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track>>;
  currentPlaybackTime: number;
  setCurrentPlaybackTime: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handlePlayPause: (track: Track) => void;
  playRandomTrack: () => void;
  playPreviousTrack: () => void;
  playNextTrack: () => void;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(
      "usePlayerContext must be used within a PlayerContextProvider"
    );
  }
  return context;
};

export const PlayerContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACK_LIST[0]); // Set the first track as the initial currentTrack
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const initialAudio = new Audio();
    initialAudio.src = TRACK_LIST[0].url;
    setAudio(initialAudio);

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
      }
    };
  }, []);

  const updateTime = () => {
    audio && setCurrentPlaybackTime(audio.currentTime);
  };

  const handlePlayPause = async (track: Track) => {
    if (audio) {
      audio.removeEventListener("timeupdate", updateTime);
    }
    if (currentTrack?.id === track.id && audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
        audio.addEventListener("timeupdate", updateTime);
      }
    } else {
      if (audio) {
        audio.src = track.url;
        audio.load();
        audio.play();
        setIsPlaying(true);
        setCurrentTrack(track);
        audio.addEventListener("timeupdate", updateTime);
      } else {
        const newAudio = new Audio(track.url);
        newAudio.load();
        newAudio.play();
        setIsPlaying(true);
        newAudio.addEventListener("timeupdate", updateTime);
        setAudio(newAudio);
        setCurrentTrack(track);
      }
    }
  };

  const playRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * TRACK_LIST.length);
    const randomTrack = TRACK_LIST[randomIndex];
    handlePlayPause(randomTrack);
  };

  const playNextTrack = () => {
    const nextIndex = (currentIndex + 1) % TRACK_LIST.length;
    setCurrentIndex(nextIndex);
    const nextTrack = TRACK_LIST[nextIndex];
    handlePlayPause(nextTrack);
  };

  const playPreviousTrack = () => {
    const previousTrack =
      (currentIndex - 1 + TRACK_LIST.length) % TRACK_LIST.length;
    setCurrentIndex(previousTrack);
    const nextTrack = TRACK_LIST[previousTrack];
    handlePlayPause(nextTrack);
  };

  return (
    <PlayerContext.Provider
      value={{
        audio,
        setAudio,
        currentTrack,
        setCurrentTrack,
        currentPlaybackTime,
        setCurrentPlaybackTime,
        currentIndex,
        setCurrentIndex,
        isPlaying,
        setIsPlaying,
        searchTerm,
        setSearchTerm,
        handlePlayPause,
        playRandomTrack,
        playNextTrack,
        playPreviousTrack,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
