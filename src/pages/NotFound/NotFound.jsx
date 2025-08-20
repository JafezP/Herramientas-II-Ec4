import Lottie from "lottie-react";
import animationData from "../../assets/Robot 404 Error.json";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center mx-auto justify-center">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ height: 300, width: 300 }}
      />
      <h1 className="mt-6 text-3xl font-bold text-gray-800">
        Página no encontrada
      </h1>
      <p className="mt-2 text-gray-600">
        Lo siento, pero la página que buscas no existe.
      </p>
    </div>
  );
};

export default NotFound;
