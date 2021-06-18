var result = [];
listDiv = document.getElementById("listItems");

var combination = function (str) {
  var words = [];
  if (str.length == 1) return str;
  for (var k in str) {
    var character = str[k];
    combination(str.join("").replace(character, "").split(""))
      .concat("")
      .map(function (subcombination) {
        words.push([character].concat(subcombination));
      });
  }
  return words;
};
function dobasics(){
  result=[]
  listDiv.innerHTML=''
  givenString = document.getElementById("textInput").value;

  space = givenString.split("").findIndex((element) => {
    return element === " ";
  });

  if (space > -1) {
    newgivenString = givenString.split("");
    newgivenString.splice(space, 1);
  } else {
    newgivenString = givenString.split("");
  }
}

function doFunction() {
  dobasics()
  var fun = combination(newgivenString.join("").split("")).map(function (str) {
    return str.join("");
  });

  for (var i in fun) {
    if (space > -1) {
      indexToPush = Math.ceil(fun[i].length / 2);

      funSplit = fun[i].split("");
      funSplit.splice(indexToPush, 0, " ");
      if (funSplit.length === givenString.length) {
        result.push(funSplit.join(""));
      }
    } else {
      if (fun[i].length === givenString.length) {
        result.push(fun[i]);
      }
    }
  }
  for (var x in result) {
    listDiv.innerHTML += "<li>" + result[x] + "</li>";
  }
}
