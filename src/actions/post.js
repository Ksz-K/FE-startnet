import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POST,
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};

//Add like
export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id: postId, likes: res.data.data },
    });
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};
//Remove like
export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id: postId, likes: res.data.data },
    });
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};

//Delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch({
      type: DELETE_POST,
      payload: { id: postId },
    });
    dispatch(setAlert("Post removed ", "dark"));
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};

//Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/posts", formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert("Post created ", "success"));
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};

//Get single post by its ID
export const getPost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};

//Add comment
export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert("Comment to post added ", "success"));
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};

//Remove comment
export const removeComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });
    dispatch(setAlert("Comment to the post deleted ", "dark"));
  } catch (error) {
    const errors = error ? error.response.data.error.split(",") : null;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.data.error,
        status: error.response.status,
      },
    });
  }
};
