const FB = require('fb')
const facebook = new FB.Facebook({
    appId:process.env.APPID,
    appSecrete:process.env.APPSECRETE
})

module.exports= function (req,res,next) {
    let accessToken = req.body.accessToken
    if(accessToken){
        facebook.api('me',{
        fields : ['id','name','email'],
        access_token:req.body.accessToken
    }).then(response=>{
        req.fbProfile = response
        next()
    }).catch(err=>{
        res.status(500).json({message:err})
    })
    } else{
        res.status(403).json({message:'require access token'})
    }
    
}