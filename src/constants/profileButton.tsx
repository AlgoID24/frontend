import { CiEdit } from "react-icons/ci";

export default function ProfileButton() {
  return (
    <div className="flex items-center justify-between gap-2 border border-dark-grey px-4 py-2 rounded-lg">
      <CiEdit />
      <span>Edit</span>
    </div>
  );
}
