import { CommonOption } from "../CommonOption";
import { TweetEmbedOption } from "./TweetEmbedOption";

export type TweetEmbedProps = {
  /**
   * The ID of a Tweet to be rendered.
   * This should be provided as a String, since Twitter IDs are generated
   * from 64-bit integers, and JavaScript integers are limited to 53 bits.
   */
  tweetId: string;

  /**
   * Additional options
   */
  options?: CommonOption & TweetEmbedOption;

  /**
   * Placeholder while tweet is loading
   */
  placeholder?: ReactNode | string;

  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: HTMLDivElement) => void;
};
