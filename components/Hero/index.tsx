import { usePlayerContext } from "@/context/PlayerContext";

export default function Hero() {
  const { currentTrack } = usePlayerContext();
  const { title } = currentTrack;

  return (
    <section className="px-4 pt-36 lg:pt-30 xl:pt-24 border-b-2 border-black">
      <div className="container mx-auto py-6">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold uppercase">
          {title}
        </h1>
      </div>
    </section>
  );
}
