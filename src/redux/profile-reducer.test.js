import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
import React from "react";

it("post testing", () => {
  //data
  let action = addPostActionCreator("some text");
  let state = {
    posts: [
      { message: "hello everybody!", id: 1, like: "33" },
      { message: "hi!", id: 2, like: "10" },
      { message: "wazzup!!", id: 3, like: "77" },
    ],
  };
  //action
  let newState = profileReducer(state, action);
  //expect
  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe("some text");
});

it("check for deleting post", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
