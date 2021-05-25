import { all, fork } from "redux-saga/effects";

import { charactersSaga } from "./characters";
import { filmsSaga } from "./films";

export function* rootSaga() {
  yield all([fork(charactersSaga), fork(filmsSaga)]);
}
