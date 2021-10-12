import express from 'express';
import * as dotenv from 'dotenv';
import {Octokit} from '@octokit/rest'
import {createTokenAuth} from '@octokit/auth-token';


dotenv.config()
const app = express();
const port = 8080;


app.listen(port,() =>{
	// tslint:disable-next-line:no-console
	console.log(`server listening on port:${port}`);

});


const gh = new Octokit({
	auth: process.env.SECRET_KEY,
});

const owner = 'RyanSowden';
const repo = 'fsk';
const url =  '/repos/{owner}/{repo}/{path}';
const ref = 'heads/master';

const getContents = async () => {
	const { data } = await gh.request({
		owner,
		repo,
		url,
		method: 'GET',
		path: 'contents',
	});

	// tslint:disable-next-line:no-console
	console.log(data)
}

getContents();
