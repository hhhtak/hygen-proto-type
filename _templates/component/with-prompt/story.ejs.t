---
to: src/<%= type %>/index.stories.tsx
---
import * as React from "react";
import <%= name %> from ".";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import * as info from "./info.md";

const storybookLayout = {
    inline: true,
    header: false,
    text: info
};

storiesOf("<%= type %>/<%= name %>", module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add(
        "title",
        () => {
            return <<%= name %> />;
        },
        { info: storybookLayout }
    );

