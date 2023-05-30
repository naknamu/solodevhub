import styled from "styled-components";

const AllTopic = styled.div`
  background: var(--background-secondary);

  @media (min-width: 650px) {
    padding-block: var(--pad-2);
  }

  @media (min-width: 1024px) {
    padding-block: 2rem;

    .container {
      padding-inline: 0;
    }
  }
`;

const TopicWrapper = styled.div`
  background: var(--background-primary);
  display: grid;
  gap: 1rem;
  padding: 2rem;
  border-radius: var(--radius-6);

  @media (min-width: 650px) {
    margin-inline: 2rem;
  }
`;

const TopicListWrapper = styled.ul`
  display: grid;
  gap: 20px;
`;

export { AllTopic, TopicWrapper, TopicListWrapper };
