var confirmation=[];
confirmation.push(parseFloat(prompt("Enter first side: ")));
  if (isNaN(confirmation[0])=== true){
    alert("Please enter a number in the field");
  }else{
  confirmation.push(parseFloat(prompt("Enter second side: ")));
    if (isNaN(confirmation[1])=== true){
        alert("Enter a valid number in the field");
      }else{
      confirmation.push(parseFloat(prompt("Enter third side: ")));
        if (isNaN(confirmation[2])=== true){
            alert("Enter a valid number in the field");
        }else{
        if((confirmation[0]+confirmation[1])<=confirmation[2] || (confirmation[1]+confirmation[2])<=confirmation[0] || (confirmation[0]+confirmation[2])<=confirmation[1]){
            alert("Not Triangular in Shape");
        }
        else if(confirmation[0]===confirmation[1] && confirmation[0]===confirmation[2] && confirmation[1]===confirmation[2]){
            alert("The triangle is Equilateral");
        }
        else if(confirmation[0]===confirmation[1] || confirmation[1]===confirmation[2] || confirmation[0]===confirmation[2]){
            alert("The triangle is Isosceles");
        }
        else if((confirmation[0]+confirmation[1])>=confirmation[2] || (confirmation[1]+confirmation[2])>=confirmation[0] || (confirmation[0]+confirmation[2])>=confirmation[1]){
            alert("The triangle is Scalene");
        }
        else{
            alert("Please enter a number");
        }
      }
    }
  };
