import { TwitterLanguageType } from "./SupportedLanguage";

export type CommonOption = {
  /**
   * The language in which to render a widget,
   * if supported (see the Translation Center.)
   *
   * Default: en
   *
   * - [Translation Center](http://translate.twitter.com/)
   */
  lang?: TwitterLanguageType;

  /**
   * When set to true, the embed and its embedded page on your site are not used
   * for purposes that include personalized suggestions and personalized ads
   *
   * Default: false
   *
   * - [personalized suggestions](https://support.twitter.com/articles/20169421)
   * - [personalized ads](https://support.twitter.com/articles/20170405)
   */
  dnt?: true | false;

  /**
   * A list of Twitter screen names to be suggested
   * for following after a Tweet or Tweet action is posted.
   *
   * Default: Undefined
   */
  related?: string;

  /**
   * A Twitter user mentioned in the default Tweet text as `via@user` where appropriate.
   *
   * Default: Undefined
   */
  via?: string;
};
