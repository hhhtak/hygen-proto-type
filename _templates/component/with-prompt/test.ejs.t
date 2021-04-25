---
to: src/<%= type %>/index.test.tsx
---
import * as React from "react";
import { shallow } from "enzyme";
import <%= name %> from ".";

describe("<%= name %> <%= type %>", () => {
  it("コンポーネントが存在すること", () => {
    const wrapper = shallow(<<%= name %> />);
      expect(wrapper.instance()).toBeInstanceOf(<%= name %>);
    });
});

