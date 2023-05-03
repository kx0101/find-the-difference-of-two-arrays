function testPerformance() {
    const iterations = 1000;

    const sizes = [100, 1000, 10000, 50000];

    for (const size of sizes) {
        const nums1 = Array.from({ length: size }, (_, i) => i);
        const nums2 = Array.from({ length: size }, (_, i) => i + size);

        const start1 = performance.now();

        for (let i = 0; i < iterations; i++) {
            findDifference1(nums1, nums2);
        }

        const end1 = performance.now();
        const time1 = end1 - start1;

        const start2 = performance.now();

        for (let i = 0; i < iterations; i++) {
            findDifference2(nums1, nums2);
        }

        const end2 = performance.now();
        const time2 = end2 - start2;

        console.log(`size: ${size}`);
        console.log(`For each time: ${time1.toFixed(2)} ms`);
        console.log(`Array from time: ${time2.toFixed(2)} ms`);
    }
}

function findDifference1(nums1: number[], nums2: number[]): number[][] {
    const subsetOfOne = [];
    const subsetOfTwo = [];

    for (const num of nums1) {
        if (!nums2.includes(num)) {
            subsetOfOne.push(num);
        }
    }

    for (const num of nums2) {
        if (!nums1.includes(num)) {
            subsetOfTwo.push(num);
        }
    }

    return [subsetOfOne, subsetOfTwo];
}

function findDifference2(nums1: number[], nums2: number[]): number[][] {
    const setOne = new Set(nums1);
    const setTwo = new Set(nums2);

    const subsetOfOne = Array.from(setOne).filter(num => !setTwo.has(num));
    const subsetOfTwo = Array.from(setTwo).filter(num => !setOne.has(num));

    return [subsetOfOne, subsetOfTwo];
}

testPerformance();
