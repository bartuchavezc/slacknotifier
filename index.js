const app = require("./src/app");

app.listen(process.env.PORT || 4000, () => {
    console.log("running on port 4000");
})