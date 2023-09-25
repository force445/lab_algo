class Linkedlist{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value){
        const headNode = {
            value: value,
            next: this.head,
            prev: null
        }
        this.head.prev = headNode
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
            next: null,
            prev: null
        }

        if (index === 0) {
            this.prepend(value)
            return this.printList()
        }
        if (index >= this.length) {
            this.append(value)
            return this.printList()
        }

        let currentNode = this.head;
        let i = 0;
        while(i < index-1){
            currentNode = currentNode.next
            i++
        }
        insertNode.prev = currentNode
        const holdingPointer = currentNode.next
        currentNode.next = insertNode
        insertNode.next = holdingPointer
        holdingPointer.prev = insertNode
        this.length++
        return this.printList()
    }
    remove(index){
        let i = 0;
        if (index === 0) {
            this.head = this.head.next
            this.head.prev = null
            this.length--
            return this.printList()
        }else if (index >= this.length) {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next
            }
            currentNode.next = null
            this.tail = currentNode
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
console.log(myLinkedList)
// myLinkedList.remove(2)
// myLinkedList.remove(0)
// console.log(myLinkedList.printList())