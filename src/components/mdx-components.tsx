// mdx-component.tsx
import * as runtime from "react/jsx-runtime";
import CustomImage from "./custom-image"; // Import the custom image component
import { Callout } from "./callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  img: CustomImage, // Use CustomImage instead of the default next/image
  Callout,
};

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
