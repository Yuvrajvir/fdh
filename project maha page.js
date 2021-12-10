const firebaseConfig = {
    apiKey: "AIzaSyBR2z_TY_v4onpOKm-ZAjsTVWmt9I0j2RE",
    authDomain: "bhudda-mail.firebaseapp.com",
    databaseURL: "https://bhudda-mail-default-rtdb.firebaseio.com",
    projectId: "bhudda-mail",
    storageBucket: "bhudda-mail.appspot.com",
    messagingSenderId: "344204299412",
    appId: "1:344204299412:web:b419aeb39a26a568017881",
    measurementId: "G-DT6DH6J830"
  };
  
 
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data('name');
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ name+"<img class='user_tick' src='tick.png''></h4>"; 
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class = ' btn btn-warning' id="+ firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thums-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button +span_with_tag;
document.getElementById("output").innerHTML+= row;

function updateLike(message_id){
    console.log("")
}
firebase_message_id+" value="+like+">"

       function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
}

    } });  }); }
getData();


function logout()  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
         windows.location = "project maha.html";

}