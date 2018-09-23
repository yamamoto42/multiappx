# Bootstrap App

This is Multi Cloud Sample application by Bootstrap.
These build and deploy are using Azure DevOps.

## Examples

- AWS <http://hy01env.3rwrm5immp.us-west-2.elasticbeanstalk.com/>

- Azure <http://hy01app.azurewebsites.net/>

- Google Cloud Platform (Node.js) <https://hy01pj1.appspot.com/>

- GE Digital Predix <https://hy01app.run.aws-usw02-pr.ice.predix.io>

- IBM Cloud <https://hy01app.mybluemix.net/>

- IBM Cloud (Docker Container) <http://hy01apc.mybluemix.net/>

## Getting Started

Download and push each cloud.
```
git clone https://github.com/yamamoto42/bootstrap.git
cd bootstrap
```

- Google Cloud Platform (Node.js)
```
gcloud app deploy
```

- GE Digital Predix / IBM Cloud
```
cf push <APP_NAME> -b staticfile_buildpack -m 64mb
```

- IBM Cloud (Docker Container)
```
cf push <APP_NAME> -m 64m --docker-image yamamoto42/bootstrap
```

## License

MIT
