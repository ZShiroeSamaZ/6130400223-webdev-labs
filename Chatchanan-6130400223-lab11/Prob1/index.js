const express = require('express')
const img = './public/profile_resume.jpg'
const app = express()
app.set('view engine', 'pug')
app.set('views', './views')


app.get('/info', (req, res) => {
    res.render('info', {
        name: "Chatchanan Pimpanon",
        urlGit: "https://zshiroesamaz.github.io/profile/",
        profilePic: "https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/38051023_1909532692438734_3467665855016337408_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_eui2=AeHYQMRjV_PUtsrvgaUoNR99kcAGTukfe5KRwAZO6R97khgyiXoxBsB8Su5qFhurwrrrEfXdD8A1MaetSS4I3ZDe&_nc_ohc=YA2wxhmOUc4AX9w5LU_&_nc_ht=scontent.fbkk2-3.fna&oh=059346cf1cc36453b9cbd9371db9b059&oe=5FCD5DF5",
        internshipComs: [{name:"Apple", url:"https://www.apple.com/"}, {name:"Agoda", url:"https://www.agoda.com/"}, {name:"Garena", url:"https://www.garena.co.th"}]
    })
})

app.listen(3000)