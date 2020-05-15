
// Standard partition process of QuickSort. 
// It considers the last element as pivot 
// and moves all smaller element to left of 
// it and greater elements to right 
function partition(arr, l, r) {
    let x = arr[r], i = l;
    let temp = 0;
    for (let j = l; j <= r - 1; j++) {

        if (arr[j] <= x) {
            // Swapping arr[i] and arr[j] 
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
        }
    }

    // Swapping arr[i] and arr[r] 
    temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;

    return i;
}

// This function returns k'th smallest 
// element in arr[l..r] using QuickSort 
// based method. ASSUMPTION: ALL ELEMENTS 
// IN ARR[] ARE DISTINCT 
function kthSmallest(arr, l, r, k) {
    // If k is smaller than number 
    // of elements in array 
    if (k > 0 && k <= r - l + 1) {
        // Partition the array around last 
        // element and get position of pivot 
        // element in sorted array 
        const pos = partition(arr, l, r);

        // If position is same as k 
        if (pos - l == k - 1)
            return arr[pos];

        // If position is more, recur for 
        // left subarray 
        if (pos - l > k - 1)
            return kthSmallest(arr, l, pos - 1, k);

        // Else recur for right subarray 
        return kthSmallest(arr, pos + 1, r, k - pos + l - 1);
    }

    // If k is more than number 
    // of elements in array 
    return 0;
}

const arr = [12, 3, 5, 7, 4, 19, 26];
const k = 3;
console.log("K'th smallest element is " + kthSmallest(arr, 0, arr.length - 1, k)); 