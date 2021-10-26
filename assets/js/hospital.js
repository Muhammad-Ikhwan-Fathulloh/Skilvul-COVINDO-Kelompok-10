// import { getHospital } from 'assets/js/helpers.js';

// const renderPost = async () => {
// let hospital = await getHospital()
//     console.log(hospital)
//     let dataHosital = hospital.features
//     let html = ''
//     Array.from(dataHosital).forEach(data => {
//         let htmlRender =
//             `<tr>
//  	 	<td>${data.attributes.nama}</td>
//  	 	<td>${data.attributes.wilayah}</td>
//  	 	<td>${data.attributes.telepon}</td>
//  	 	<td>${data.attributes.alamat}</td>
//  	 	</tr>`;
//         html += htmlRender
//     })

//     let container = document.querySelector('.tbody')
//     container.innerHTML = html
// }

async function getHospital() {
    try {
        let response = await fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/RS_Rujukan_Update_May_2020/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json', {
            method: 'GET',
        });
        let jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
}



async function renderPost() {
   
    let hospital = await getHospital()
    console.log(hospital)
    let dataHospital = hospital.features
    let html = ''
    Array.from(dataHospital).forEach(data => {
        let htmlRender =
            `<tr>
 	 	<td>${data.attributes.nama}</td>
 	 	<td>${data.attributes.wilayah}</td>
 	 	<td>${data.attributes.telepon}</td>
 	 	<td>${data.attributes.alamat}</td>
 	 	</tr>`;
        html += htmlRender
    })
    let container = document.querySelector('#tbody')
    container.innerHTML = html
    console.log(html)
}

renderPost();
