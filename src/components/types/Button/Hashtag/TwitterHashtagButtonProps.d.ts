import { CommonOption } from "~/components/types/CommonOption";
import { ButtonOption } from "~/components/types/ButtonEmbed/ButtonOption";

export type TwitterHashtagButtonProps = {
  /**
   * Hashtag to be Tweeted and displayed on the button.
   */
  hashtag: string;

  /**
   * Additional options
   */
  options?: CommonOption & ButtonOption;

  /**
   * Placeholder while tweet is loading
   */
  placeholder?: ReactNode | string;

  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: HTMLDivElement) => void;
};
