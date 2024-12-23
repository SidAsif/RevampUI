import { useState } from "react";
import { useNavigation } from "../../context/NavigationContext";
import FileUpload from "../Common/FileUpload";

const HeroJobPortal = () => {
  const [preview, setPreview] = useState(null);
  const { isAdmin } = useNavigation();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    console.log("Selected file:", file);
  };
  return (
    <div className="bg-[#6A54DF] min-h-screen flex flex-col items-center justify-center p-4 md:pt-[100px] pt-[200px] lg:pt-[200px]">
      <div className="text-center max-w-[700px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          Empowering College Students to Discover Job Opportunities
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white">
          Starteryou is your go-to platform for college students seeking job
          listings that match their skills and aspirations. With a user-friendly
          interface and tailored opportunities, we make job hunting a breeze.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-[#D9502E] text-white py-3 px-8 rounded-lg font-semibold">
            Explore
          </button>
          <button className="bg-white text-[#D9502E] py-3 px-8 rounded-lg font-semibold">
            Signup
          </button>
        </div>
      </div>
      <div className="relative">
        {preview ? (
          <img
            src={preview}
            alt=" Job Opportunities Preview"
            className="relative w-[1500px] lg:h-[800px] md:px-20 lg:mt-10"
          />
        ) : (
          <img
            src="/JobPortalPage/portalHero.svg"
            alt="Job Opportunities"
            className="relative w-[1500px] lg:h-[800px] md:px-20 lg:mt-10"
          />
        )}
        {/* Admin file upload section */}
        {isAdmin && (
          <div className=" absolute right-1 top-0 md:top-14 md:right-20 ">
            {" "}
            <FileUpload handleFileChange={handleFileChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroJobPortal;
