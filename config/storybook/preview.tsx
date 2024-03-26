import React from "react";
import type { Preview } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="app light" style={{ width: "700px" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default preview;
