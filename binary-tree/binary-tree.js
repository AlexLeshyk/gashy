'use strict';

class BinaryTree {
	
	constructor() {
		this.root = null;
//		this.count = 0;
	}
	
	insertIntoNode(node, data){
//		console.log('insertIntoNode: ', node, data)
		if (node.data == null ) {
			node.data = data;
//			console.log('insertIntoNode: Select suitable place ')
		}
		else{
			if (data > node.data){
				if (node.right == null)
					node.right = new Node()
//				console.log('insertIntoNode: data > node.data. Go to rigth node ')
				this.insertIntoNode(node.right, data);
			}
			else{
				if (node.left == null)
					node.left = new Node()
//				console.log('insertIntoNode: data < node.data. Go to left node ')
				this.insertIntoNode(node.left, data);
			}
		}
	}
	
	insert(data) {
//		console.log('insert: ', data)
		if (this.root == null){
//			console.log('insert: Create rool node')
			this.root = new Node()
		}
		this.insertIntoNode(this.root, data)
//		this.count = this.count + 1;
	}

	containsInNode(node, data){
		
		if (node.data == data) {
			return true;
		}
		if (node.left && this.containsInNode(node.left, data)){
			return true;
		}
		if (node.right && this.containsInNode(node.right, data) ) { 
			return true;
		}
		return false;
		
	}
	
	contains(data) {
		return this.containsInNode(this.root, data)
	}

	removeFromNode(node, data){
		console.log('removeFromNode', node)
		if  (node.data == null){
			console.log('removeFromNode node.data == null')
			return
		}
		else if (node.data == data){
			console.log('removeFromNode node.data == data')
			
			if (node.left !== null){
				console.log('removeFromNode !node.left', node)
				node = node.left
			}
			else if (node.right !== null) {
				console.log('removeFromNode !node.right')
				node = node.right
			}
			else {
				console.log('removeFromNode node = null')
				node.data = null;
				console.log('removeFromNode node = null', node)
			}
//			this.count = this.count - 1;
		}
		else {
			if ((data > node.data) && !node.right) {
				this.removeFromNode(node.right, data);
			}
			else if (!node.left){
				this.removeFromNode(node.left, data);
			}
		}
	}
	
	remove(data) {
		
		console.log('remove', data)
		
		this.removeFromNode(this.root, data)
		console.log('remove End', this.root)
	}
	
	size() {
		return 0;
	}

	isEmpty() {
		if (this.root == null )	
			return true;
		if (this.root.data == null){
			return true;
		}
		return false;
	}
}
