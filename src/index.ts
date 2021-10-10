import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) =>{
	res.send("Works");
});

app.listen(port,() =>{
	// tslint:disable-next-line:no-console
	console.log(`server listening on port:${port}`);

});
