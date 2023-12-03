// module.exports ={
//     googleClientID :'395383214150-55epv47nr6gdroos2mbd9fuvsa5brv5f.apps.googleusercontent.com',
//     googleClientSecret: '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',
//     mongoURI:'mongodb+srv://davidebe63:OCTHXIbgwgvQ4SLD@cluster1.rhabcgx.mongodb.net/surveysystemdb?retryWrites=true&w=majority',
//     cookieKey:'ienjfviueruytebwecnworc8w38crhw',
// }

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}



//prod clientID-- 124216344803-9ptm0ivodrta4vetmfrijingvpdsqa0r.apps.googleusercontent.com

//prod client secret--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

