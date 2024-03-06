const app = require("./server")

let port = process.env.PORT;
if (port == null || port == "") {
    port=5000
}

console.log(port)
app.listen(port, async () => {
    console.log("listening on server ");

})