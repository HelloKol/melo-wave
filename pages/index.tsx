import Hero from "@/components/Hero";
import Player from "@/components/Player";
import TrackList from "@/components/TrackList";
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

export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <Player />
      <TrackList tracks={TRACK_LIST} />
    </main>
  );
}
