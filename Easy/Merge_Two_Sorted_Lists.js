var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    
    while (list1!=null && list2 !=null) {
        if (list1.val < list2.val) {
            addToNode(head, new ListNode(list1.val));
            list1 = list1.next;
        } else {
            addToNode(head, new ListNode(list2.val));
            list2 = list2.next;
        }
    }
    
    while (list1!=null) {
        addToNode(head, new ListNode(list1.val));
        list1 = list1.next;

    }
    while (list2!=null) {
        addToNode(head, new ListNode(list2.val));
        list2 = list2.next;
    }
    return head.next;
};

function addToNode(node, element) {
    if(node.next != null) {
        return addToNode(node.next, element);
    }
    node.next = element;
    return node;
}