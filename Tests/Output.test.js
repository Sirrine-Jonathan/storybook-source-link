import React from 'react'
import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react';
import * as Stories from '../stories/Output/Output.stories';
import cases from './cases.json';

const stories = composeStories(Stories);
test.each(cases)(
    `Param Case $storyName`,
    ({ storyName, expectedLink }) => {
        const Story = stories[storyName];
        render(<Story />);
        const output = screen.getByTestId(storyName);
        const name = output.getAttribute('data-testid');
        const prefix = output.getAttribute('data-prefix');
        const link = output.getAttribute('data-link');
        const final = output.getAttribute('data-final');
        expect(storyName).toEqual(Story.args.title);
        expect(name).toEqual(storyName);
        expect(prefix).toEqual(Story.args.resolvedParams.sourceLinkPrefix || null);
        expect(link).toEqual(Story.args.resolvedParams.sourceLink || null);
        expect(final).toEqual(expectedLink);
    }
)