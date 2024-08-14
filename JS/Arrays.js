function oddOrEven(array) {
    if (array.length === 0){
      array = [0];
    }
  
    const sum = array.reduce((acc, num) => {return acc + num;}, 0);
    
    if (sum % 2 === 0){
      return "even";
    } else {
      return "odd";
    }
  }
/*   console.log(oddOrEven([0, -1, -5]))
 */
  function arrays(){
    const variable = ["a", "a", "b"];
    const final = []

    variable.forEach(n => final.push(n + "z"))
    console.log(final)
    return final
  }

  arrays()