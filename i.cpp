#include <stdio.h>
class Vector {

public:
	int x, y, z;
	Vector() {}
	Vector(int m, int n) {
		x = m;
		y = n;
		z = 0;
	}
	Vector(int m, int n, int p) {
		x = m;
		y = n;
		z = p;
	}
	void print() {
		printf("Vector(%d,%d,%d)", x, y, z);

	}
	
	int dot_mutip(Vector v) {
		int t = x * v.x + y * v.y + z * v.z;
		return t;
	}
	Vector cross_mutip(Vector v) {
		Vector v1 = Vector();
		v1.x = y * v.z - v.y * z;
		v1.y = x * v.z - v.x * z;
		v1.z = x * v.z - v.x * y;
		return v;

	}

};

int main()
{
	/*  Write C code in this online editor and run it. */

	Vector v = Vector(1,2,3);
	Vector v1 = Vector(1, 2,3);
	(v.cross_mutip(v)).print();

	return 0;
}