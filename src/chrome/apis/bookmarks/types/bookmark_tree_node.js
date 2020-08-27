// @flow

/**
 * A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder.
 */
class BookmarkTreeNode {
  id: string
  parentId: ?string
  index: number
  url: ?string
  title: string
  dateAdded: ?number
  dateGroupModified: ?number
  unmodifiable: ?BookmarkTreeNodeUnmodifiable
  children: ?BookmarkTreeNode[]

  /**
   * @param {Object} options
   * @param {number} options.id The unique identifier for the node. IDs are unique within the current profile,
   *  and they remain valid even after the browser is restarted.
   * @param {number} options.parentId The id of the parent folder. Omitted for the root node.
   * @param {number} options.index The 0-based position of this node within its parent folder.
   * @param {number} options.url The URL navigated to when a user clicks the bookmark. Omitted for folders.
   * @param {number} options.title The text displayed for the node.
   * @param {number} options.dateAdded When this node was created, in milliseconds since the
   *  epoch (new Date(dateAdded)).
   * @param {number} options.dateGroupModified When the contents of this folder last changed, in milliseconds
   *  since the epoch.
   * @param {number} options.unmodifiable Indicates the reason why this node is unmodifiable. The managed value
   *  indicates that this node was configured by the system administrator or by the custodian of a supervised user.
   *  Omitted if the node can be modified by the user and the extension (default).
   * @param {number} options.children An ordered list of children of this node.
   */
  constructor (options: {
    id: string,
    parentId: ?string,
    index: number,
    url: ?string,
    title: string,
    dateAdded: ?number,
    dateGroupModified: ?number,
    unmodifiable: ?BookmarkTreeNodeUnmodifiable,
    children: ?BookmarkTreeNode[]
  }) {

    this.id = options.id
    this.parentId = options.parentId
    this.index = options.index
    this.url = options.url
    this.title = options.title
    this.dateAdded = options.dateAdded
    this.dateGroupModified = options.dateGroupModified
    this.unmodifiable = options.unmodifiable
    this.children = options.children
  }
}

export default BookmarkTreeNode
