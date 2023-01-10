export type TimelineEmbedOption = {
  /**
   * Toggle the display of design elements in the widget.
   * This parameter is a space-separated list of values
   *
   * Default: Undefined
   */
  chrome?: ["noheader" | "nofooter" | "noborders" | "transparent" | "noscrollbar"];

  /**
   * Set a fixed height of the embedded widget
   *
   * Default: 600
   */
  height?: numner;

  /**
   * Set a fixed width of the embedded widget
   *
   * Default: auto
   */
  width?: numner;

  /**
   * Render a timeline statically, displaying only n number of Tweets.
   * tweetLimit is allowed between 1 to 20.
   *
   * Default: Undefined
   */
  tweetLimit?: number;

  /**
   * Adjust the Hexadecimal color of borders inside the widget.
   *
   * Default: Varies by theme
   */
  borderColor?: string;

  /**
   * Apply the specified aria-polite behavior to the rendered timeline.
   * New Tweets may be added to the top of a timeline, affecting screen readers
   *
   * Default: polite
   */
  ariaPolite?: "polite" | "assertive" | "rude";
};
