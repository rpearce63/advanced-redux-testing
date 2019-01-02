import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let app;

beforeEach(() => {
  app = shallow(<App />);
});

it("shows a CommentBox", () => {
  expect(app.find(CommentBox).exists()).toBe(true);
});

it("shows a CommentList", () => {
  expect(app.find(CommentList).length).toEqual(1);
});
