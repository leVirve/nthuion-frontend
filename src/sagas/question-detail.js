import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  FETCH_QUESTION,
  FETCH_COMMENTS,
} from '../containers/QuestionDetailPage/actionTypes';
import {
  fetchQuestionSuccess,
  fetchQuestionFail,
  fetchCommentsSuccess,
  fetchCommentsFail,
} from '../containers/QuestionDetailPage/actions';

function* fetchQuestion({ id }) {
  try {
    const question = yield call(api.get, `/api/issues/${id}`);
    yield put(fetchQuestionSuccess(question));
  } catch (error) {
    yield put(fetchQuestionFail(error));
  }
}

function* watchFetchQuestion() {
  yield* takeEvery(FETCH_QUESTION, fetchQuestion);
}

function* fetchComments({ qid }) {
  try {
    const { data } = yield call(api.get, `/api/issues/${qid}/comments`);
    yield put(fetchCommentsSuccess(data));
  } catch (error) {
    yield put(fetchCommentsFail(error));
  }
}

function* watchFetchComments() {
  yield* takeEvery(FETCH_COMMENTS, fetchComments);
}

export default function* questionSagas() {
  yield fork(watchFetchQuestion);
  yield fork(watchFetchComments);
}

