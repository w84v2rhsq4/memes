import FeedContainer from "./containers/FeedContainer";
import LovedFeedContainer from "./containers/LovedFeedContainer";
import ImageContainer from "./containers/ImageContainer";

export enum RouteType {
  FEED = "/",
  LOVED = "/loved",
  SINGLE_IMAGE = "/image/:id"
}

export const getComponentByRoute = (route: RouteType) => {
  switch (route) {
    case RouteType.FEED:
      return FeedContainer;
    case RouteType.LOVED:
      return LovedFeedContainer;
    case RouteType.SINGLE_IMAGE:
      return ImageContainer;
    default:
      throw new Error("undefined route");
  }
};

export const getNavTitleByRoute = (route: RouteType) => {
  switch (route) {
    case RouteType.FEED:
      return "/";
    case RouteType.LOVED:
      return "<3";
    default:
      throw new Error("undefined nav item");
  }
};
