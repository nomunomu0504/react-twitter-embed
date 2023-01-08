export type ButtonEmbedOption = {
  /**
   * The alignment of the button within an iframe;
   * use this to ensure flush layout when aligning buttons
   *
   * Default: locale dependent
   * (left or right, depending on the text direction of the language.)
   */
  align?: "left" | "right";

  /**
   * Default: medium
   */
  size?: "medium" | "large";
};
