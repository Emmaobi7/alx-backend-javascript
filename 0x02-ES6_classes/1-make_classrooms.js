import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const size = [19, 20, 34];
  const rooms = size.map((s) => new ClassRoom(s));
  return rooms;
}
