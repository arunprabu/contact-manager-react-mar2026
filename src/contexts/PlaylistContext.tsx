//  Step 1: Create Context
import { createContext, useState } from "react";

export const PlaylistContext = createContext<any>(undefined);

// Step 2: Make it a ContextProvider component
export const PlaylistContextProvider = (props: any) => {
  // Let's manage the state of the playlist here and pass it down via context
  const [playlist, setPlaylist] = useState<any[]>([]);

  // lets send both the setter and getter via context
  const dataToBeSent = {
    playlist, // needed for MyPlaylist component to display the playlist and for AudioTracks to update the playlist
    setPlaylist, // needed for AudioTracks component to add songs to the playlist
  };

  return (
    <PlaylistContext.Provider value={dataToBeSent}>
      {props.children}
    </PlaylistContext.Provider>
  );
};
