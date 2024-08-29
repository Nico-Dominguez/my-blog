// components/CustomImage.tsx
import Image from "next/image";

const CustomImage = (props) => {
  return (
    <Image
      {...props}
      layout="responsive"
      width="100%" // Full width
      height="100%" // Full height or adjust accordingly
      alt={props.alt || "Image"} // Provide a default alt text if none is given
      style={{ objectFit: "cover", width: "100%", height: "auto" }} // Adjust object fit for better control
    />
  );
};

export default CustomImage;
