'use strict';

class BinaryTree {
	
	constructor() {
		this.root = null;
	}
	
	insertIntoNode(node, data){
		if (node.data == null ) {
			node.data = data;
		}
		else {
			if (data > node.data){
				if (node.right == null)
					node.right = new Node()
				this.insertIntoNode(node.right, data);
			}
			else {
				if (node.left == null)
					node.left = new Node()
				this.insertIntoNode(node.left, data);
			}
		}
	}
	
	insert(data) {
		if (this.root == null){
			this.root = new Node()
		}
		this.insertIntoNode(this.root, data)
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
		
		if (data > node.data && node.right !== null ){
			
			// right
			if (node.right.data == data){

				var tempright = null;
				if (node.right.left !== null ) {
					tempright = node.right.left
				}
				node.right = tempright;
			}
			else
			{
				this.removeFromNode(node.right, data);
			}
		}
		else if (node.left !== null)
		{
			
			// left
			if (node.left.data == data) {
				var tempLeft = null;
				if (node.left.left !== null ){
					tempLeft = node.left.left
				}
				node.left = tempLeft;
			} else {
				this.removeFromNode(node.left, data);
			}			
		} else {
			
		}
	}

	remove(data) {
		
		if (this.root == null)
			return 
		if (this.root.data == null)
			return 
		if (this.root.data == data)
		{
			this.root = null;		
			return 
		}
		
		this.removeFromNode(this.root, data)
	}
	
	sizeForNode(node){
		var i = 0;
		
		if (node == null){
			return i;
		} else{
			i = 1;
		}
		if (node.left !== null){
			
			i = i + this.sizeForNode(node.left)
		}
		if (node.right !== null){
			
			i = i + this.sizeForNode(node.right)
		}
		 return i;
	}
	
	size() {
		return this.sizeForNode(this.root);
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
