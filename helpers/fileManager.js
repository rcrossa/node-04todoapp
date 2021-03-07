const fs = require('fs');
const { title } = require('process');

const name = './database/data.json';

const saveData = (data) => {
    fs.writeFileSync(name, JSON.stringify(data));
}

const getData = () => {
    
    if( !fs.existsSync(name)) {
        return null;
    }

    const data = fs.readFileSync(name, {encoding: 'utf8'});

    if(data){
        const datos = JSON.parse (data);
        // for (let index = 0; index < datos.length; index++) {
        // //    console.log( datos[index]);
        //     if (datos.title) {
        //         return datos.title;
        //     }
            
        // }
        for (const iterator of datos) {
            return + '\nTitle: ' + iterator.title + '\nDone: ' + iterator.done + '\nCreated: ' + iterator.created;
        }
       
    //    return datos.title;
    }
    return null;

}

module.exports = {
    saveData,
    getData
}