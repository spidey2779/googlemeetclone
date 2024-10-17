import Player from "@/components/Player";
import { useSocket } from "@/context/socket";
import useMediaStream from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";
import { useEffect } from "react";
const Room = () => {
  const socket = useSocket();
  const { peer, myId } = usePeer();
  const { stream } = useMediaStream();
  return (
    <div className="flex w-screen justify-center">
      <Player url={stream} muted={true} playerId={myId} playing={true} />
    </div>
  );
};

export default Room;
