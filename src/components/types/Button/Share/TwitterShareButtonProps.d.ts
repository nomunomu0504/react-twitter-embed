import { CommonOption } from "~/components/types/CommonOption";
import { ButtonOption } from "~/components/types/ButtonEmbed/ButtonOption";
import { TwitterShareButtonOptions } from "~/components/types/Button/Share/TwitterShareButtonOptions";

export type TwitterShareButtonProps = {
  /**
   * The URL to be shared.
   */
  url: string;

  /**
   * Additional options
   */
  options?: CommonOption & ButtonOption & TwitterShareButtonOptions;

  /**
   * Placeholder while tweet is loading
   */
  placeholder?: ReactNode | string;

  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: HTMLDivElement) => void;
};
