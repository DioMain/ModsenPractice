function sumIntervals(intervals) {
    if (!intervals || intervals.length === 0) return 0;

    intervals.sort((a, b) => a[0] - b[0]);

    console.log(intervals)

    let totalLength = 0;
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        if (start <= currentEnd) {
            currentEnd = Math.max(currentEnd, end);
        } else {
            totalLength += currentEnd - currentStart;
            currentStart = start;
            currentEnd = end;
        }
    }

    totalLength += currentEnd - currentStart;

    return totalLength;
}

console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));