/*
 * Created by dkel on 2018-06-09.
 */

// action은 어떤 변화가 일어나야 할지 알려주는 객체
// 첫번째 필드 type은 필수적으로 포함되야 합니다.

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value,
  };
}
