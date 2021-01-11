let nameArr = [
    "Woody",
    "RJ",
    "Micah",
    "Jeremy",
    "Chris",
    "Dan",
    "Cainan",
    "Michael"
]

router.get('/', async (req, res) => {

    res.render('index', {
        names: nameArr
    })
})

 
<% names.forEach(name => { %>
     
    <h2><%= name %> </h2>
<% }) %>