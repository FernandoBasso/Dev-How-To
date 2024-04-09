#include <stdio.h>
#include <math.h>

/**
 * Finds the next multiple of `n` given the
 * multiplier `m`.
 */
short next_mult_of(short m, short n) {
  return ceil(n / (double) m) * m;
}

int main(int argc, char* argv[]) {
  short xs[6] = { 3, 4, 5, 9, 89, 98 };

  for (short i = 0; i < 6; ++i)
    printf("%hd\n", next_mult_of(5, *(xs + i)));

  return 0;
}
