function getDistance(x1, y1, x2, y2) {
	return Math.sqrt((x2-x1)**2 + (y2-y1)**2)
}
console.log(getDistance(10.0, 10.0, 30.0, 20.0));    // 22.360679774997898