import Toast, { ToastPosition } from "react-native-toast-message";

interface Options {
  type: "success" | "error" | "info";
  position?: ToastPosition;
  text1: string;
  text2?: string;
  visibilityTime?: number;
  autoHide?: boolean;
  topOffset?: number;
  bottomOffset?: number;
  onShow?: () => void;
  onHide?: () => void; // called when Toast hides (if `autoHide` was set to `true`)
  onPress?: () => void;
  props?: any;
}

export const showToast = (options: Options) =>
  Toast.show({
    ...options,
    visibilityTime: 4000,
    position: "top",
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });

export const hideToast = () => Toast.hide();