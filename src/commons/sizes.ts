import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const SCREEN_WIDTH = Math.round(width) + 0.3;
export const SCREEN_HEIGHT = Math.round(height) + 0.3;

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const horizontalScale = (size: any) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

export const verticalScale = (size: any) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;
  
export const fontScale = (size: any, factor = 0.5) =>
  parseInt(size + (horizontalScale(size) - size) * factor, 10);
