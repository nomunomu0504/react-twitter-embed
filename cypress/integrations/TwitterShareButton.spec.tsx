import { mount } from "cypress/react18";
import React from "react";
import { TwitterShareButton } from "../../src/components/TwitterShareButton";

describe("Twitter Share Button", () => {
  it("should render Share button with url", () => {
    mount(
      <TwitterShareButton
        url="https://twitter.com/nomunomu0504"
        options={{ text: "#react-twitter-embed", via: "nomunomu0504" }}
      />
    );
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet");
  });

  it("should render Share button with large", () => {
    mount(
      <TwitterShareButton
        url="https://twitter.com/nomunomu0504"
        options={{
          text: "#react-twitter-embed",
          via: "nomunomu0504",
          size: "large",
        }}
      />
    );
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet");
  });

  it("should render Share button with placeholder", () => {
    mount(
      <TwitterShareButton
        url="https://twitter.com/nomunomu0504"
        options={{
          text: "#react-twitter-embed",
          via: "nomunomu0504",
          size: "large",
        }}
        placeholder="Loading"
      />
    );
    cy.contains("Loading");
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet");
  });

  it("should render Share button with placeholder", () => {
    mount(
      <TwitterShareButton
        url="https://twitter.com/nomunomu0504"
        options={{
          text: "#react-twitter-embed",
          via: "nomunomu0504",
          size: "large",
        }}
        placeholder={
          <div
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "red",
              color: "white",
            }}
          >
            Hello I am custom placeholder
          </div>
        }
      />
    );
    cy.contains("Hello I am custom placeholder");
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet");
  });

  it("should render Share button with onLoad", () => {
    const callback = cy.stub();
    mount(
      <TwitterShareButton
        url="https://twitter.com/nomunomu0504"
        options={{
          text: "#react-twitter-embed",
          via: "nomunomu0504",
          size: "large",
        }}
        onLoad={callback}
      />
    );
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet");
    cy.waitUntil(() => expect(callback.callCount).to.eq(1));
  });
});
