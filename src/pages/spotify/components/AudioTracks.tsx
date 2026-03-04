import { useContext, useState } from "react";
import { PlaylistContext } from "../../../contexts/PlaylistContext";

const AudioTracks = () => {
  const { playlist, setPlaylist } = useContext(PlaylistContext);
  console.log(setPlaylist);

  const [songs] = useState<any[]>([
    {
      id: 132456,
      title: "Calm down",
      artist: "Selena Gomez",
      duration: "3:30",
    },
    {
      id: 324567,
      title: "Love Story",
      artist: "Taylor Swift",
      duration: "4:00",
    },
    {
      id: 9876543,
      title: "Roar",
      artist: "Katy Perry",
      duration: "4:30",
    },
    {
      id: 8765432,
      title: "Don't stop the music",
      artist: "Rihanna",
      duration: "3:45",
    },
    {
      id: 7654321,
      title: "Beat It",
      artist: "Michael Jackson",
      duration: "4:15",
    },
  ]);

  return (
    <div>
      <h2 className="text-center py-4">Recommended Tracks for you!</h2>
      <div className="space-y-4">
        {songs.map((song) => (
          <div
            key={song.id}
            className="flex justify-between items-center bg-gray-300 p-2 rounded"
          >
            <div className="w-48 truncate">{song.title}</div>
            <div className="flex-1 ml-4">
              <div className="text-sm text-gray-600">{song.artist}</div>
              <div className="text-sm text-gray-600">{song.duration}</div>
            </div>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => {
                setPlaylist([...playlist, song]);
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioTracks;
