const now = new Date()
const hours = now.getHours();
if (hours >= 9 && hours<=22 ){
        document.getElementById('demo').innerHTML = ('We Are Open')
                document.getElementById('demo').style.backgroundColor = 'green'

}
else if(13<hours<17){
      document.getElementById('demo').innerHTML = ('We Are Closed')  
                document.getElementById('demo').style.backgroundColor = 'red'
}

else{
              document.getElementById('demo').innerHTML = ('We Are Closed')  
                document.getElementById('demo').style.backgroundColor = 'red'
}
