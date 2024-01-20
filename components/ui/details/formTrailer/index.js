import { useParams, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import "./formTrailer.css";
const FormTrailer = ({ formTrailer, closeFormTrailer }) => {
  const router = useRouter();
  console.log(router);
  const handleFormTrailer = () => {
    closeFormTrailer();
  };
  return (
    <>
      <div
        className={formTrailer ? "overlay" : ""}
        onClick={handleFormTrailer}
      ></div>
      <div className={formTrailer ? "formTrailer" : "form_none formTrailer"}>
        form trailer
      </div>
      ;
    </>
  );
};

export default FormTrailer;
