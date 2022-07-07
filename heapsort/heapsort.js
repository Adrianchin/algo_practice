class MaxHeap{
    constructor(){//First value is null, this makes the math easier. We could do empty, but then counter would be i-1
        this.vals = [null]
    }

    getLength(){
        return this.vals.length-1
    }

    getParent(i){//Gets parent of index i
        return Math.floor(i/2)
    }

    getLeft(i){//Gets left index of root
        return 2*i
    }

    getRight(i){//Gets right index of root
        return 2*i+1
    }

    getMax(){//Gets max value, this is the top value (didn't use)
        return (this.vals[1]) ? this.vals[1] : null
    }

    add(value){//Adds value to the heap
        this.vals.push(value)
        this.moveUp(this.getLength())//Heapify up
    }

    moveUp(i){//Heapify up
        if(this.getParent(i) >= 1 && this.vals[this.getParent(i)]<this.vals[i]){//if root is not correctly placed in tree, recurrsively calls heapify up and swaps with parent value
            let holder = this.vals[this.getParent(i)]
            this.vals[this.getParent(i)] = this.vals[i]
            this.vals[i] = holder
            this.moveUp(this.getParent(i))
        }
    }

    remove(){//Removes top of heap
        if(this.getLength() === 1){
            return null
        }else if(this.getLength() === 2){
            return this.vals.pop()
        }else{
            let maxVal = this.vals[1]
            this.vals[1] = this.vals[this.getLength()]
            //this.vals[this.getLength()] = maxVal <- Not needed
            this.vals.pop()
            this.moveDown(1)//Call heapify down
            return maxVal
        }
    }

    moveDown(i){//Heapify Down
        let maxVal = this.vals[i]
        let maxValIndex = i
        if(this.vals[this.getLeft(i)] > maxVal){//Compares left value to root value
            maxValIndex=this.getLeft(i)
        }
        if(this.vals[this.getRight(i)] > maxVal){//Compares left value to root value
            maxValIndex=this.getRight(i)
        }
        if(i !== maxValIndex){//if root value is not in correct spot, we go left/right recurrsively
            this.vals[i] = this.vals[maxValIndex]
            this.vals[maxValIndex] = maxVal
            this.moveDown(maxValIndex) 
        }
    }
}

class MinHeap{
    constructor(){//First value is null, this makes the math easier. We could do empty, but then counter would be i-1
        this.vals = [null]
    }
    getLength(){
        return this.vals.length-1
    }
    getParent(i){//Gets parent of index i
        return Math.floor(i/2)
    }
    getRight(i){//Gets right index of root
        return 2*i+1
    }
    getLeft(i){//Gets left index of root
        return 2*i
    }
    add(value){//Adds value to the heap
        this.vals.push(value)
        this.moveUp(this.getLength())
    }
    moveUp(i){//Heapify up
        if(this.getParent(i) <= 0) return
        let minValue = this.vals[i]
        if(this.vals[this.getParent(i)]>minValue){//if root is not correctly placed in tree, recurrsively calls heapify up and swaps with parent value
            this.vals[i] = this.vals[this.getParent(i)]
            this.vals[this.getParent(i)] = minValue
            this.moveUp(this.getParent(i))
        }
    }
    remove(){//Removes top of heap
        if(this.getLength() === 1){
            return null
        }else if(this.getLength() === 2){
            return this.vals.pop()
        }else{
            let minVal = this.vals[1]
            this.vals[1] = this.vals[this.getLength()]
            //this.vals[this.getLength()] = minVal <- Not needed
            this.vals.pop()
            this.moveDown(1)//Call heapify down
            return minVal
        }
    }
    moveDown(i){//Heapify Down
        let minVal = this.vals[i]
        let minValIndex = i
        if(this.vals[this.getLeft(i)] < minVal){//Compares left value to root value
            minValIndex = this.getLeft(i)
            minVal = this.vals[this.getLeft(i)]
        }
        if(this.vals[this.getRight(i)] < minVal){//Compares right value to root value
            minValIndex = this.getRight(i)
            minVal = this.vals[this.getRight(i)]
        }
        if(i !== minValIndex){//if root value is not in correct spot, we go left/right recurrsively
            this.vals[minValIndex] = this.vals[i]
            this.vals[i] = minVal
            this.moveDown(minValIndex)
        }
    }
}


/* MaxHeap testing*/
let maxHeap = new MaxHeap()
maxHeap.add(1)
console.log(maxHeap)
maxHeap.add(2)
console.log(maxHeap)
maxHeap.add(10)
console.log(maxHeap)
maxHeap.add(7)
console.log(maxHeap)
maxHeap.add(9)
console.log(maxHeap)
console.log(maxHeap.remove())
console.log(maxHeap.remove())
maxHeap.add(9)
console.log(maxHeap.remove())
console.log(maxHeap)

console.log("Min Heap:")
/* MinHeap testing*/
let minHeap = new MinHeap()
minHeap.add(1)
console.log(minHeap)
minHeap.add(2)
console.log(minHeap)
minHeap.add(10)
console.log(minHeap)
minHeap.add(7)
console.log(minHeap)
minHeap.add(9)
minHeap.add(8)
console.log(minHeap)
console.log(minHeap.remove())
console.log(minHeap.remove())
minHeap.add(9)
console.log(minHeap)
console.log(minHeap.remove())
console.log(minHeap)
