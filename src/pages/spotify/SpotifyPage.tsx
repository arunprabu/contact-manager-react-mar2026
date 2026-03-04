import { PlaylistContextProvider } from "../../contexts/PlaylistContext";
import AudioTracks from "./components/AudioTracks";
import MyPlaylist from "./components/MyPlaylist";

const SpotifyPage = () => {
  return (
    <div>
      <h1 className="text-center py-4 text-3xl">Welcome to Spotify</h1>

      {/* create two columns with audio tracks on the left side and my playlist on the right*/}
      <div className="grid grid-cols-2 gap-4">
        <PlaylistContextProvider>
          <div className="bg-gray-200 p-4">
            <AudioTracks />
          </div>
          <div className="bg-gray-200 p-4">
            <MyPlaylist />
          </div>
        </PlaylistContextProvider>
      </div>
    </div>
  );
};

export default SpotifyPage;
