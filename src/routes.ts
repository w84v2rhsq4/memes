import FeedContainer from "./containers/FeedContainer";
import LovedFeedContainer from "./containers/LovedFeedContainer";
import ImageContainer from "./containers/ImageContainer";
import { resolve } from "path";

const FEED = resolve(window.location.pathname + "./");
const LOVED = resolve(window.location.pathname + "./loved");
const SINGLE_IMAGE = resolve(window.location.pathname + "./image/:id");
export const routes = {
  FEED,
  LOVED,
  SINGLE_IMAGE
};
export type RouteType = string;

export const getComponentByRoute = (route: RouteType) => {
  switch (route) {
    case routes.FEED:
      return FeedContainer;
    case routes.LOVED:
      return LovedFeedContainer;
    case routes.SINGLE_IMAGE:
      return ImageContainer;
    default:
      throw new Error("undefined route");
  }
};

export const getNavTitleByRoute = (route: RouteType) => {
  switch (route) {
    case routes.FEED:
      return "/";
    case routes.LOVED:
      return "<3";
    default:
      throw new Error("undefined nav item");
  }
};
