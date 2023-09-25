class Linkedlist{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value){
        const headNode = {
            value: value,
            next: this.head
        }
        this.head = headNode
        this.length++
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
    insert(index,value) {
        const insertNode = {
            value: value,
            next: null
        }
        let currentNode = this.head;
        let i = 0;
        while(i < index-1){
            currentNode = currentNode.next
            i++
        }
        const holdingPointer = currentNode.next
        currentNode.next = insertNode
        insertNode.next = holdingPointer
        this.length++
    }
    remove(index){
        let i = 0;
        if (index === 0) {
            this.head = this.head.next
            this.length--
            return this.printList()
        }
        let currentNode = this.head;
        while(i<index-1){
            currentNode = currentNode.next
            i++
        }
        const holdCurrentNode = currentNode
        const holdingPointer = currentNode.next
        const nextNode = holdingPointer.next
        holdCurrentNode.next = nextNode
        this.length--
        
        return this.printList()
}
}

let myLinkedList = new Linkedlist(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99)
myLinkedList.remove(2)
myLinkedList.remove(0)
console.log(myLinkedList.printList())