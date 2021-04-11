const ngrok = 'https://07d401e6c239.ngrok.io'
function lo() {
    if (localStorage.getItem('username')) {
         username=localStorage.getItem('username')
    }
}
lo()
function txt() {
    var txt = document.getElementById('txt').value
    const url=ngrok+'/mandar'
    var d={
        u:username,
        m:txt
    }
         fetch(url, {
    method: 'PUT', // or 'PUT'
    mode:'cors',
    body: JSON.stringify(d), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(data=>{
    var r=''  
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
      r=`${r}<br>
${data[i].u}:${data[i].m}`
      document.getElementById('msj').innerHTML = r;
      console.log(r);
  } });
    
}
function pedir() {
    fetch(ngrok+'/pedir')
    .then(response => response.json())
    .then(data=>{
      var r=''  
      for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
        r=`${r}<br>
  ${data[i].u}:${data[i].m}`
        document.getElementById('msj').innerHTML = r;
        console.log(r);
    }
  });    
}
pedir()
setInterval(() => {
    pedir()
}, 3000);
console.log(username);
//localStorage.clear('username')
var username;