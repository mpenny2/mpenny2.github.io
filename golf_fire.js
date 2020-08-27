

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDjHnNuZXzK0yeQZ9a2b8ZfmPD4-msDycs",
    authDomain: "golfcard-a47f7.firebaseapp.com",
    databaseURL: "https://golfcard-a47f7.firebaseio.com",
    projectId: "golfcard-a47f7",
    storageBucket: "golfcard-a47f7.appspot.com",
    messagingSenderId: "778304709091",
    appId: "1:778304709091:web:3a25ad92a700be2f1dc0d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var defaultDatabase = firebase.database();
  var rootRef = firebase.database().ref();
  // var adaRef = firebase.database().ref("https://golfcard-a47f7.firebaseio.com/");
  // var usersRef = rootRef.child("mikey");
  // var goldRef = rootRef.child("gold");
  // console.log(goldRef);
  pars = {"1":4, "2":4, "3":3, "4":4, "5":3, "6":5, "7":5, "8":4, "9":4, "10":5, "11":3, "12":4,"13":3, "14":5, "15":4, "16":4, "17":4, "18":3}
  console.log(pars["1"])
  titles = {};
  var ref = firebase.database().ref();
  ref.on("value", function(snapshot) {
      for (var i in snapshot.val()){
        console.log(i);
        console.log(snapshot.val()[i]);
        titles[i] = snapshot.val()[i];

      }

  for(var key in titles){
    console.log(key);
    var front = 0
    var back = 0
    var sum = 0
    for (i = 1; i < 19; i++){
      var element = document.getElementById(key.concat("-", i));
      console.log(element)
      element.innerHTML = titles[key]["gold"][i];
      if(titles[key]["gold"][i] < pars[i.toString()]){
        element.style.color = "red"
      }
      else if(titles[key]["gold"][i] == pars[i.toString()]){
        element.style.color = "green"
      }
      else{
        element.style.color = "black"
      }

      if(i< 10){
      //   console.log(key.concat("-front"))
      //   var element = document.getElementById(key.concat("-front"));
         front += titles[key]["gold"][i]
      
      }
      else{
        
      //   var element = document.getElementById(key.concat("-back"));
         back += titles[key]["gold"][i]
       }
      // var span = document.createElement ("span");
      // span.setAttribute('class', "score");
      // span.innerHTML = titles[key]["gold"][i];

      // element.appendChild(span);
      sum += titles[key]["gold"][i]

  }

  var element = document.getElementById(key.concat("-fs"));
  element.innerHTML = front
  var element = document.getElementById(key.concat("-bs"));
  element.innerHTML = back
  var element = document.getElementById(key.concat("-ts"));
  element.innerHTML = sum
  //   var span = document.createElement ("span");
  //     span.innerHTML = front;
  //     span.setAttribute('class', "sub");
  //     element.appendChild(span);
  //     var element = document.getElementById(key.concat("-back"));
  //   var span = document.createElement ("span");
  //     span.innerHTML = back;
  //     span.setAttribute('class', "sub");
  //     element.appendChild(span);
  //     var span = document.createElement ("span");
  //     span.innerHTML = sum;
  //     span.setAttribute('class', "total");
  //     element.appendChild(span);

  }
  
      
      

  }, 
  function (error) {
   console.log("Error: " + error.code);
  });