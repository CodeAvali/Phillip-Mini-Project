function fn_random(){
  let colours = Math.floor(Math.random() * 3);
  if (colours == 0){
    return "R"
  }
  if (colours == 1){
    return "B"
  }
  if (colours == 2){
    return "Y"
  }
}

function fn_answerR(){
  const colours = 3 
  let New = ""
  let Old = ""
  let Set = ""
  let Stack = 0
  let Ans = ""
  for(length = 10; length != 0; length--) {
    New = fn_random()
    Set += New
    if (New == Old){
      Stack += 1 
    }
    if (New != Old){
      Ans += (Stack + Old)
      Stack = 1 
    }
    Old = New
  }
  Ans += (Stack + Old)
  Ans = Ans.replace('0','')

  //Output to HTML var//
  console.log(Set)
  console.log(Ans)
  document.getElementById("id_rle0").innerHTML = Set;
}

