import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

import React from "react";
import { View } from "react-native";
import { DecoratorFunction } from "@storybook/client-api";

// Add global decorator that wraps the story with a visible padding. When updating Button story's
// text to something like "Hello world 1" you'll see the red background double
export const Container: DecoratorFunction<React.ReactElement> = (
  story,
  { parameters }
) => {
  return (
    <View style={{ backgroundColor: "red", padding: 5 }}>
      {React.createElement(story)}
    </View>
  );
};

export const decorators = [Container];

export const parameters = {
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
