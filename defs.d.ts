declare module "*.css" {
  var styles: { [key: string]: string };
  export = styles;
}
declare module "*.svg" {
  import { ComponentType, SVGAttributes } from "react";
  const content: ComponentType<SVGAttributes<SVGElement>>;
  export default content;
}
