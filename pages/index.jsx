import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
    
  };
  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`);
    else {
      alert("Please provide a valid RoomId");
    }
  };
  return (
    <div className="w-4/12 mx-auto p-2 border border-white rounded mt8 text-white flex flex-col items-center">
      <h1 className="text-xl text-center">Google Meet Clone</h1>
      <div className="flex flex-col items-center mt-3 w-full">
        <input
          className="text-black text-lg p-1 rounded w-9/12 mb-3"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button
          className="bg-buttonPrimary py-2 px-4 rounded "
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
      <span className="my-3 text-xl">-----------OR-----------</span>
      <button
        className="bg-buttonPrimary py-2 px-4 rounded "
        onClick={createAndJoin}
      >
        Create Room
      </button>
    </div>
  );
}
