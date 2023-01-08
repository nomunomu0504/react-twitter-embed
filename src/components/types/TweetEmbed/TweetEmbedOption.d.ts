export type TweetEmbedOption = {
  /**
   * Tweets in response to another Tweet will display
   * a compact version of the previous Tweet by default.
   * Use none to hide the parent Tweet in the conversation
   *
   * Default: all
   */
  conversation?: "none" | "all";

  /**
   * Hide photos, videos, and link previews powered by Cards.
   * Cards: https://dev.twitter.com/cards
   *
   * Default: visible
   */
  cards?: "hidden" | "visible";

  /**
   * Set the maximum width of the embedded Tweet
   *
   * Default: auto(derived from container size)
   */
  width?: number;

  /**
   * Float the embedded Tweet to the left or right so that text wraps around it
   * or align center so it floats in the middle of a paragraph
   *
   * Default: Undefined
   */
  align?: "left" | "right" | "center";

  /**
   * Toggle the default color scheme of the embedded Tweet
   *
   * Default: light
   */
  theme?: "dark" | "light";
};
