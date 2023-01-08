import { mount } from "cypress/react18";
import React from "react";
import { TimelineEmbed } from "../../src/components/TimelineEmbed";

describe("Twitter Timeline", () => {
  it("should render timeline with screenName", () => {
    mount(
      <TimelineEmbed sourceType="profile" screenName="nomunomu0504" options={{ height: 400 }} />
    );
    cy.wait(4000);
    cy.getIframeBody().contains("Twitter");
    cy.getIframeBody().contains("@nomunomu0504");
  });

  it("should render timeline with userId", () => {
    mount(
      <TimelineEmbed sourceType="profile" userId="740893939977195520" options={{ height: 400 }} />
    );
    cy.wait(4000);
    cy.getIframeBody().contains("Twitter");
    cy.getIframeBody().contains("@nomunomu0504");
  });

  it("should render timeline list with owner screen name slug", () => {
    mount(
      <TimelineEmbed
        sourceType="list"
        ownerScreenName="palafo"
        slug="breakingnews"
        options={{ height: 400 }}
      />
    );
    cy.wait(4000);
    cy.getIframeBody().contains("Twitter");
    cy.getIframeBody().contains("BreakingNews");
  });

  it("should render timeline list with list id", () => {
    mount(<TimelineEmbed sourceType="list" id="8044403" options={{ height: 400 }} />);
    cy.wait(4000);
    cy.getIframeBody().contains("Twitter");
    cy.getIframeBody().contains("meetup-20100301");
  });

  it("should render timeline collection with profile url", () => {
    mount(
      <TimelineEmbed
        sourceType="url"
        url="https://twitter.com/nomunomu0504"
        options={{ height: 400 }}
      />
    );
    cy.wait(4000);
    cy.getIframeBody().contains("Twitter");
    cy.getIframeBody().contains("@nomunomu0504");
  });

  it("should render timeline collection with list url", () => {
    mount(
      <TimelineEmbed
        sourceType="url"
        url="https://twitter.com/mashable/lists/social-media"
        options={{ height: 400 }}
      />
    );
    cy.wait(4000);
    cy.getIframeBody().contains("Twitter");
    cy.getIframeBody().contains("Social Media");
  });

  it("should render timeline collection with Likes url", () => {
    mount(
      <TimelineEmbed
        sourceType="url"
        url="https://twitter.com/nomunomu0504/likes"
        options={{ height: 400 }}
      />
    );
    cy.wait(4000);
    cy.getIframeBody().contains("Twitter");
    cy.getIframeBody().contains("liked by");
    cy.getIframeBody().contains("@nomunomu0504");
  });
});
