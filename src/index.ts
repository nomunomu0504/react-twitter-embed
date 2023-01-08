declare global {
  interface Window {
    twttr: any;
  }
}

export * from "./components/TweetEmbed";
export * from "./components/TimelineEmbed";
export * from "./components/TwitterFollowButton";
export * from "./components/TwitterHashtagButton";
export * from "./components/TwitterMentionButton";
export * from "./components/TwitterShareButton";
