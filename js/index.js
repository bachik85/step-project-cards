
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function LoadNextPage() {
    const logInput = document.getElementById("L").value;
    const passwordInput = document.getElementById("P").value;
    if (logInput === "admin" && passwordInput === '123') {
        // alert('welcome');
        // document.getElementById('myCreate').style.display = 'block';
    }
    else {
        alert('wrong data');
    }
}

function openCardForm() {
    document.getElementById('createForm').style.display = 'block';
}
function closeCreateForm() {
    document.getElementById('createForm').style.display = 'none';
}


// function populate(s1,cardio) {
//     let s1 = document.getElementById(s1);
//     let cardio = document.getElementById(cardio);
//     cardio.innerHTML = "";
//     if(s1.value === 'Кардиолог'){
//         const  optionArray = [' ','цель визита|справка','цель визита|ежегодная проверка','цель визита|по направлению']
//     }
//     for (const option in optionArray){
//         const pair = optionArray[option].split("|");
//         const newOption = document.createElement("option");
//         newOption.value = pair[0];
//         newOption.innerHTML = pair[1];
//         cardio.options.add(newOption);
//     }
// }

function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if(s1.value == "Chevy"){
        var optionArray = ["|","camaro|Camaro","corvette|Corvette","impala|Impala"];
    } else if(s1.value == "Dodge"){
        var optionArray = ["|","avenger|Avenger","challenger|Challenger","charger|Charger"];
    } else if(s1.value == "Ford"){
        var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

//
// //
// const API = 'http://cards.danit.com.ua/cards';
// const token = sessionStorage.getItem('token');
//
// function  getLogin(email, password) {
//     return fetch( {
//         url: `${API}/login`,
//         method: 'POST',
//         body: JSON.stringify({
//             email: email,
//             password: password
//         })
//     })
// }

// export function  createCard(card) {
//     return fetch({
//         url: `${API}/cards`,
//         method: 'POST',
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(card)
//     })
// }
//
// export  function  getCards() {
//     return fetch({
//         url: `${API}/cards`,
//         method: 'POST',
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// }
//

