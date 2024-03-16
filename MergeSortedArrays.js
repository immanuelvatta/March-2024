function mergeSortedArrays(nums1, m, nums2, n){

    let index1 = m - 1; // index of last element in nums1
    let index2 = n - 1; // index of last element in nums2
    let mergedIndex = m + n - 1; // index to merge elements

    //merge from the end of both arrays

    while (index1 >=0 && index2 >=0){
        if(nums1[index1] > nums2[index2]){
            nums1[mergedIndex] = nums1[index1];
            index1--;
        }else{
            nums1[mergedIndex] = nums2[index2];
            index2--;
        }
        mergedIndex--;
    }

    // merge remaining elements from nums2

    while(index2 >= 0){
        nums1[mergedIndex] = nums2[index2];
        index2--;
        mergedIndex--;
    }

    return nums1;

}

//examples


let nums1 = [1,3,5,7,0,0];
let m = 4;
let nums2 = [2,4,6];
let n = 3;

console.log(mergeSortedArrays(nums1, m, nums2, n));
