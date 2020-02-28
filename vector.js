function Vector(x, y) {
	this.x = x;
	this.y = y;

Vector.prototype.angle = function() {
	return Math.atan2(this.y, this.x);
};

this.clone = function() {
	return new Vector(this.x, this.y);
};

this.copy = function(vec) {
	this.x = vec.x;
	this.y = vec.y;
	return this;
};

this.cross = function(vec) {
	return this.x * vec.y - this.y * vec.x;
};

this.distance = function(vec) {
	return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2));
};

this.dot = function(vec) {
	return this.x * vec.x + this.y * vec.y;
};

this.equals = function(vec) {
	return this.x == vec.x && this.y == vec.y;
};

this.inverse = function() {
	this.x *= -1;
	this.y *= -1;
	return this;
};

this.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

this.normalize = function() {
	var length = this.length();

	if(length == 0) {
		this.x = 1;
		this.y = 0;
	} else {
		this.x /= length;
		this.y /= length;
	}

	return this;
};

this.rotate = function(angle) {
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);

	var nx = this.x * cos - this.y * sin;
	var ny = x * sin + this.y * cos;

	this.x = nx;
	this.y = ny;

	return this;
};

this.toString = function() {
	return 'x:' + this.x + ', y:' + this.y;
};

this.zero = function() {
	this.x = this.y = 0;
	return this;
};
}
