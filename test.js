function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applCount = 0;
    let orgCount = 0;
    const calc = (fruits, startPoint) => {
        const insideHome = fruits.filter((fruit, i) => {
            fruits[i] += startPoint;
            return fruits[i] >= s && fruits[i] <= t;
        });
        return insideHome.length;
    };
    console.log(calc(apples, a));
    console.log(calc(oranges, b));
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
