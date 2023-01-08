import { mount } from "cypress/react18";
import React from "react";
import { TwitterMentionButton } from "../../src/components/TwitterMentionButton";

describe("Twitter Mention Button", () => {
  it("should render mention button with screenName", () => {
    mount(<TwitterMentionButton screenName="nomunomu0504" />);
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet to");
  });

  it("should render mention button with option", () => {
    mount(<TwitterMentionButton screenName="nomunomu0504" options={{ size: "large" }} />);
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet to");
  });

  it("should render mention button with placeholder", () => {
    mount(
      <TwitterMentionButton
        screenName="nomunomu0504"
        options={{ size: "large" }}
        placeholder="Loading"
      />
    );
    cy.contains("Loading");
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet to");
  });

  it("should render mention button with custom placeholder", () => {
    mount(
      <TwitterMentionButton
        screenName="nomunomu0504"
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
    cy.getIframeBody().contains("Tweet to");
  });

  it("should render mention button with onLoad", () => {
    const callback = cy.stub();
    mount(
      <TwitterMentionButton
        screenName="nomunomu0504"
        options={{ size: "large" }}
        onLoad={callback}
      />
    );
    cy.wait(1500);
    cy.getIframeBody().contains("Tweet to");
    cy.waitUntil(() => expect(callback.callCount).to.eq(1));
  });
});
