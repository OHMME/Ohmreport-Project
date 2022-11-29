
async function get_id() {
    const id = document.getElementById("rid").value
    const url = `http://13.250.18.159:8080/report?id=${id}`
    const response = axios({ method: 'get', url })
    setTimeout(function() {
    	window.open('http://13.250.18.159:8080/download-file');
    },  4000)   
}


