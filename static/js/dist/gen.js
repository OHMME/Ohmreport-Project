var total_sent = 0;
var total_clicked = 0;
var total_submitted = 0;
var cam_name = null
var cam_status = null
//var isClicked = false
function appendData(data){

    data.map((data) => {
        if(data.id === 2){
            // var mainContainer =document.getElementById("myData");
            cam_name = data.name
            cam_status = data.status
            data.timeline.map((timeline) =>{
                if(timeline.message === "Email Sent"){
                    total_sent += 1
                    
                }
                if(timeline.message === "Clicked Link"){
                    total_clicked += 1
                }
                if(timeline.message === "Submitted Data"){
                    total_submitted += 1
                }
    
        })
        }
        
        
       
    })
      
   
    document.getElementById('cam_name').innerHTML = "Campaign Results For: " +  cam_name
    document.getElementById('cam_status').innerHTML = "Status:  " +  cam_status
    document.getElementById('total_sent').innerHTML = "Emails Sent:" + total_sent
    document.getElementById('total_clicked').innerHTML = "Total Click Events: " + total_clicked
    document.getElementById('total_submitted').innerHTML = "Total Submitted Data Events: " + total_submitted
  
    //document.write("Emails Sent:" + total_sent)  
    
}


fetch('https://127.0.0.1:3333/api/campaigns/?api_key=3bc76836853b9fdc1adc57001761ae1578ab86b4b1257f4f97174b12858f079c')
 .then(response => response.json())
 .then(data => appendData (data))
 .catch(err =>console.log('error: ' +err))
 function generateReport(id, word) {
    const url = `http://localhost:8080/report?id=${id}&word=${word}`
    axios({ method: 'get', url }).then((res) => {
        alert('ddddddddddd')
    })

}
function generateReport(id) {
    const url = `http://13.250.18.159:8080/report?id=${id}`
    const response = axios({ method: 'get', url })
   
}  
function get_id(callback) {
     const id = document.getElementById("rid").value
     generateReport(id) 
     window.open('http://13.250.18.159:8080/download-file')
}
