import { PiSteeringWheelFill } from "react-icons/pi";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-90 z-50">
      <PiSteeringWheelFill className="text-white text-8xl animate-spin" />
    </div>
  );
};

export default Loader;
