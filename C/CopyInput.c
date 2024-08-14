#include <stdio.h>

/*  part 1 of copy input to output
main() 
{
    int c;
    while (c = getchar() != EOF) {
        printf("%d",c = getchar() != EOF);
    }

}
*/ 

/* excercise 1-9 */

int main(void)
{
	int c;
	while ((c = getchar()) != EOF) {
		 if (c == ' ') {
			putchar(c);
		 	while((c = getchar()) == ' ' && c != EOF)
				;
		}
		if (c == EOF)
			break; /* the break keyword is mentioned
				* in the introduction... 
				* */

		putchar(c);
	}
	return 0;
}
