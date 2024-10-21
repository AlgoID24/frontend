import { FileUploader } from "@/components/ui/dropzone";
import Stepper from "@/components/ui/stepper";
import { H3 } from "@/components/ui/typography";

const ProfileKYCPage = () => {
  return (
    <div className="w-full p-8">
      <div className="flex flex-col px-16 gap-8 items-center bg-white p-4 rounded-3xl">
        <Stepper steps={["Step 1", "Step 2", "Step 3"]} currentStep={2} />
        <H3>Upload a proof of your identity</H3>
        <FileUploader />
      </div>
    </div>
  );
};

export default ProfileKYCPage;
