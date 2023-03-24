import { FaSpinner } from "react-icons/fa";

export const Loading = () => {
  return (
    <div className="w-full flex h-full justify-center items-center">
      <FaSpinner className="w-20 h-20 text-primary animate-spin animate-75" />
    </div>
  );
};
