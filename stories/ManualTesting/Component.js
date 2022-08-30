import React from "react";
import { Wrapper, Header, Section, Notes } from '../StyledComponents';

export const Component = ({ title, expectedLink, notes, details }) => {
    return (
        <Wrapper>
            <Header>
                <h1>{title}</h1>
                <h2>Expected Link: <code>{expectedLink}</code></h2>
            </Header>
            <Notes>
                {notes}
            </Notes>
            <Section>
                <h3>Parameter Details</h3>
                <pre>{details}</pre>
            </Section>
        </Wrapper>
    )
}