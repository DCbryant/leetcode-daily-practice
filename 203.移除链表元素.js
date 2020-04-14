/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head
  let prev = dummyHead
  while (prev.next !== null) {
    if (prev.next.val === val) {
      // 当前元素指到下下一个元素就删除了
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
      // prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }
  return dummyHead.next
};
// @lc code=end

