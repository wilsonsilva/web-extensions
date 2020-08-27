// @flow

import BookmarkTreeNode from './types/bookmark_tree_node'
import Signal from '../../../core/signal'

/**
 * Use the chrome.bookmarks API to create, organize, and otherwise manipulate bookmarks.
 */
class Bookmarks {
  mockData: Object
  onCreated: Signal
  onRemoved: Signal
  onChanged: Signal
  onMoved: Signal
  onChildrenReordered: Signal
  onImportBegan: Signal
  onImportEnded: Signal

  constructor () {
    this.mockData = {}
    this.onCreated = new Signal()
    this.onRemoved = new Signal()
    this.onChanged = new Signal()
    this.onMoved = new Signal()
    this.onChildrenReordered = new Signal()
    this.onImportBegan = new Signal()
    this.onImportEnded = new Signal()
  }

  /**
   * Retrieves the specified BookmarkTreeNode(s).
   *
   * @param {string|Array<string>} idOrIdList A single string-valued id, or an array of string-valued ids
   * @param {Function} callback The callback parameter should be a function that looks like this:
   *  function(array of BookmarkTreeNode results) {...};
   */
  get (idOrIdList: string | string[], callback: (results: BookmarkTreeNode[]) => any) {

  }

  /**
   * Retrieves the children of the specified BookmarkTreeNode id.
   *
   * @param {string} id ID of the parent bookmark tree node
   * @param {Function} callback The callback parameter should be a function that looks like this:
   *  function(array of BookmarkTreeNode results) {...};
   */
  getChildren (id: string, callback: (results: BookmarkTreeNode[]) => any) {

  }

  /**
   * Retrieves the recently added bookmarks.
   *
   * @param {number} numberOfItems The maximum number of items to return.
   * @param {Function} callback The callback parameter should be a function that looks like this:
   *  function(array of BookmarkTreeNode results) {...};
   */
  getRecent (numberOfItems: number, callback: (results: BookmarkTreeNode[]) => any) {

  }

  /**
   * Retrieves the entire Bookmarks hierarchy.
   *
   *
   */
  get Tree (callback: (results: BookmarkTreeNode[]) => any) {

  }

  // getTree − chrome.bookmarks.getTree(function callback)
  // getSubTree − chrome.bookmarks.getSubTree(string id, function callback)
  // search − chrome.bookmarks.search(string or object query, function callback)
  // create − chrome.bookmarks.create(object bookmark, function callback)
  // move − chrome.bookmarks.move(string id, object destination, function callback)
  // update − chrome.bookmarks.update(string id, object changes, function callback)
  // remove − chrome.bookmarks.remove(string id, function callback)
  // removeTree − chrome.bookmarks.removeTree(string id, function callback)
}

export default Bookmarks
