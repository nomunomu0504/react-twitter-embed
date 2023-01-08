import { mount } from "cypress/react18";
import { TweetEmbed } from "../../src/components/TweetEmbed";

describe("TwitterEmbed Components", () => {
  it("renders", () => {
    mount(<TweetEmbed tweetId="933354946111705097" />);
    cy.wait(5000);
    cy.getIframeBody().contains("Joe Wright");
  });

  it("should render tweet embed with tweetId 2", () => {
    mount(<TweetEmbed tweetId="1083592734038929408" />);
    cy.wait(5000);
    cy.getIframeBody().contains("Cassidy");
  });

  it("should render tweet embed with placeholder", () => {
    mount(<TweetEmbed tweetId="1083592734038929408" placeholder="Loading" />);
    cy.contains("Loading");
    cy.wait(5000);
    cy.getIframeBody().contains("Cassidy");
  });

  it("should render tweet embed with custom placeholder", () => {
    mount(
      <TweetEmbed
        tweetId="1083592734038929408"
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
    cy.wait(5000);
    cy.getIframeBody().contains("Cassidy");
  });

  it("should render tweet embed with onLoad", () => {
    const callback = cy.stub();
    mount(<TweetEmbed tweetId="1083592734038929408" onLoad={callback} />);
    cy.wait(5000);
    cy.getIframeBody().contains("Cassidy");
    cy.waitUntil(() => expect(callback.callCount).to.eq(1));
  });
});
