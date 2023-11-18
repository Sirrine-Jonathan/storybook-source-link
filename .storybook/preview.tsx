import React from 'react'
import { Preview } from '@storybook/react-webpack5';
import { ErrorBoundary } from "react-error-boundary";

const preview: Preview = {
  parameters: {
    sourceLinkPrefix: 'https://github.com/Sirrine-Jonathan/storybook-source-link/blob/main/stories/',
    sourceLink: 'ManualTesting/Component.js'
  },
  decorators: [(Story) => {
    return (
      <ErrorBoundary
        fallbackComponent={
          () => <p>Something went wrong</p>
        }
        onError={
          (error, errorInfo) => {
            console.log("Error caught!");  
            console.error(error);  
            console.error(errorInfo);
          }
        }
      >
        <Story />
      </ErrorBoundary>
    )
  }]
}

export default preview;