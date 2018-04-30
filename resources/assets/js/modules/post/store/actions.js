/* ============
 * Actions for the post module
 * ============
 *
 * The actions that are available on the
 * post module.
 */

import {
  ARTICLE_ADD,
  ARTICLE_UPDATE,
  ARTICLE_REMOVE,
  ARTICLE_LIST,
} from './action-types';

export function add(payload) {
  return {
    type: ARTICLE_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: ARTICLE_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: ARTICLE_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: ARTICLE_LIST,
    payload
  }
}