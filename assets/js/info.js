async function getSebaran() {
    try {
        let response = await fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json', {
            method: 'GET',
        });
        let jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
}



async function renderPost() {
   
    let sebaran = await getSebaran()
    console.log(sebaran)
    // let datasebaran = sebaran.features
    let html = ''
    Array.from(sebaran).forEach(data => {
                var features = data.features;
                var jlh_terkonfirmasi = 0;
                var jlh_sembuh = 0;
                var jlh_meninggal = 0;
                for (i = 0; i < features.length; i++) {
                    var attributes = features[i].attributes;
                    jlh_terkonfirmasi += attributes.Kasus_Posi;
                    jlh_sembuh += attributes.Kasus_Semb;
                    jlh_meninggal += attributes.Kasus_Meni;
                }
                document.getElementById("total-kasus").innerHTML = jlh_terkonfirmasi;
                // document.getElementById("sembuh").innerHTML = jlh_sembuh;
                // document.getElementById("dirawat").innerHTML = jlh_terkonfirmasi - jlh_sembuh - jlh_meninggal;
                // document.getElementById("meninggal").innerHTML = jlh_meninggal;
    })
    
    console.log(jlh_terkonfirmasi)
}

renderPost();