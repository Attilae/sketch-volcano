let f = 0;
let h = 0;

function setup() {
	createCanvas((W = 800), W);
}

function draw() {
	background(256);
	translate((w = 400), w);
	stroke((D = 200), 22);
	switch (keyCode) {
		case UP_ARROW:
			for (i = 0; i < TAU; i += PI / 2048) {
				F = f + i;
				line(
					cos(D) % (tan(F + i) * D),
					sin(D) % (sin(i + f) * D),
					tan(cos(i) * sin(i - f)),
					tan(sin(i) * sin(i - f)) * tan(((F * i) % PI) / 2) * D
				);
				f = 10 * atan((h += 0.001)) + 0.01;
			}
			break;
		case DOWN_ARROW:
			for (i = 0; i < TAU; i += PI / 2048) {
				F = f + i;
				line(
					(cos(f) * D) % (tan(F + i) * D),
					(sin(f) * D) % (sin(i + f) * D),
					tan(cos(i) * sin(i - f)),
					tan(sin(i) * sin(i - f)) * tan(((F * i) % PI) / 2) * D
				);
				f = 10 * atan((h += 0.001)) + 0.01;
			}
			break;
		case LEFT_ARROW:
			for (i = 0; i < TAU; i += PI / 2048) {
				F = f + i;
				line(
					(cos(i) * D) % (tan(F + i) * D),
					(sin(i) * D) % (sin(i + f) * D),
					tan(cos(i) * sin(i - f)),
					tan(sin(i) * sin(i - f)) * tan(((F * i) % PI) / 2) * D
				);
				f = 10 * atan((h += 0.001)) + 0.01;
			}
			break;
		case RIGHT_ARROW:
			for (i = 0; i < TAU; i += PI / 2048) {
				F = f + i;
				line(
					(cos(i) * D) % (tan(F + i) * D),
					(sin(i) * D) % (sin(i + f) * D),
					tan(cos(i) * sin(i - f)),
					tan(sin(i) * sin(i - f)) * tan(((F * i) % PI) / 2) * D
				);
				f = 10 * atan((h += 0.001)) + 0.01;
			}
			break;
		default:
			for (i = 0; i < TAU; i += PI / 2048) {
				F = f + i;
				line(
					(cos(f + i) * D) % (tan(F + i) * D),
					(sin(f + i) * D) % (sin(i + f) * D),
					tan(cos(i) * sin(i - f)),
					tan(sin(i) * sin(i - f)) * tan(((F * i) % PI) / 2) * D
				);
				f = 10 * atan((h += 0.001)) + 0.01;
			}
	}
}

function keyPressed() {
	h = 0;
	f = 0;
	clear();
}
