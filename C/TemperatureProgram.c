#include <stdio.h>
/* print fahrenheit-celsius table
for fahr = 0, 20, ..., 300 */

/* Part 1 
main()
{
    float fahr, celsius;
    int lower, upper, step;

    lower = 0;
    upper = 300;
    step = 20;

    fahr = lower;
    printf("This is the program of temperature\n");
    printf("Celsius\t | Farenheit\n");
    while (fahr <= upper)
    {
        celsius = (5.0/9.0) * (fahr-32.0);
        printf("%3.0f\t | %6.1f\n", fahr, celsius);
        fahr = fahr + step;
    }
} */

/* Part 2: Short version using a for loop with symbolic constants. ACTIVITY: PRINT IN REVERSE 

*/
#define LOWER 0
#define UPPER 300
#define STEP 20

main()
{
    int fahr;
    for (fahr = LOWER; fahr <= UPPER; fahr = fahr + STEP)
        printf("%3d %6.1f\n", fahr, (5.0/9.0) * (fahr-32));
}
