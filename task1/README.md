
# Task1
Solve each of the following coding exercises





## Problem


```bash
// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
   return new Promise( function (resolve, reject) {
      setTimeout(resolve, ms);
   }).then(function(){
      Console.log(“here resolve function “)
   })
)
} 



// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
	el.style.transform = ‘translate(“100px”)’;
	el.style.transition= ‘1s’
} 



// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
	let newArray = []
      xs.map(item=>{
		if(!newArray.includes(item))
			newArray.push(item)
})

return newArray;
} 


```


## Solutions

```bash


/**
 * Problem1
 * @param {ms}  milliseconds
 * @returns a Promise that is resolved after ms milliseconds
 */
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    }).then(function () {
        Console.log("here resolve function ")
    }).catch((e) => {
        console.log(e)
    })
}

/**
 * Problem2
 * @param {el}  element 
 * @action moves the element to the right by 100px over a duration of 1 second
 */
function animateRight(el) {
    el.style.transform = "translate(100px)"
    el.style.transition = "1s"
}


/**
 * Problem3
 * @param {xs}  array
 * @returns a new array, with unique items
 */
function removeDuplicates(xs) {
    let newArray = []
    xs.map(item => {
        if (!newArray.includes(item))
            newArray.push(item)
    })
    return newArray;
}



```

