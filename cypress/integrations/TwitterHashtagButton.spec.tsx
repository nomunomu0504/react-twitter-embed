import { mount } from "cypress/react18";
import React from "react";
import { TwitterHashtagButton } from "../../src/components/TwitterHashtagButton";

describe("Twitter Hashtag Button", () => {
  it("should render hashtag button with tag", () => {
    mount(<TwitterHashtagButton hashtag="cybersecurity" />);
    cy.wait(1500);
    cy.getIframeBody().contains("cybersecurity");
  });

  it("should render hashtag button with options", () => {
    mount(<TwitterHashtagButton hashtag="cybersecurity" options={{ size: "large" }} />);
    cy.wait(1500);
    cy.getIframeBody().contains("cybersecurity");
  });

  it("should render hashtag button with placeholder", () => {
    mount(
      <TwitterHashtagButton
        hashtag="cybersecurity"
        options={{ size: "large" }}
        placeholder="Loading"
      />
    );
    cy.contains("Loading");
    cy.wait(1500);
    cy.getIframeBody().contains("cybersecurity");
  });

  it("should render hashtag button with custom placeholder", () => {
    mount(
      <TwitterHashtagButton
        hashtag="cybersecurity"
        options={{ size: "large" }}
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
    cy.getIframeBody().contains("cybersecurity");
  });

  it("should render hashtag button with onLoad", () => {
    const callback = cy.stub();
    mount(
      <TwitterHashtagButton hashtag="cybersecurity" options={{ size: "large" }} onLoad={callback} />
    );
    cy.wait(1500);
    cy.getIframeBody().contains("cybersecurity");
    cy.waitUntil(() => expect(callback.callCount).to.eq(1));
  });
});
