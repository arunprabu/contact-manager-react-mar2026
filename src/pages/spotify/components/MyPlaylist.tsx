import { useContext } from "react";
import { PlaylistContext } from "../../../contexts/PlaylistContext";

const MyPlaylist = () => {
  // Let's access the context here to get the playlist and display it
  const { playlist } = useContext(PlaylistContext);
  console.log(playlist);

  return (
    <div>
      <h2 className="text-center py-4">My Playlist</h2>
      <div className="space-y-4">
        {/* List */}
        {playlist.map((song: any, index: number) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-300 p-2 rounded"
          >
            <div className="flex-1">
              <div className="font-bold">{song.title}</div>
              <div className="text-sm text-gray-600">
                Artists: {song.artist}
              </div>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaylist;
