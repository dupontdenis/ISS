const express = require('express');
const app = express();

const path = require('path');
const getJson = require("async-get-json");
const axios = require("axios");
const ISS_API = "http://api.open-notify.org/iss-now.json";

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get("/", (req,res) => {
    
    main().catch(err => console.log(" Huston, we have a pb ! "+ err));
    
    async function main() {
        var location = await getJson(ISS_API);
        console.log(location.iss_position)  
        //const query = await axios.get("http://api.open-notify.org/iss-now.json");
        //console.log(query.iss_position)

        res.render('index', { location:location.iss_position });
   
    }

    
    
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app: http://localhost:3000/`));




