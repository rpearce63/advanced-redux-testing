import React from "react";
import { mount, shallow } from "enzyme";
import { CommentBox } from "components/CommentBox";

let wrapped;
const mockSaveComment = jest.fn();
const props = { saveComment: mockSaveComment };
beforeEach(() => {
  wrapped = mount(<CommentBox {...props} />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapped.update();
  });

  it("has a textarea that user can type in ", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("clears the textarea when submit button is clicked", () => {
    wrapped.find("form").simulate("submit");
    expect(mockSaveComment).toHaveBeenCalledWith("new comment");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
