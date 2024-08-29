// components/CustomImage.tsx
import Image, { ImageProps } from "next/image";

const CustomImage = (props: ImageProps) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <Image
        {...props}
        fill // Use `fill` to make the image responsive
        alt={props.alt || "Image"} // Provide a default alt text if none is given
        style={{ objectFit: "cover" }} // Adjust object fit for better control
      />
    </div>
  );
};

export default CustomImage;
