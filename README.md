# Bootstrap App

This is bootstrap sample application.
It use DevOps on Azure.

## Examples

- Azure <http://hy01app.azurewebsites.net/>

- AWS <http://hy01env.3rwrm5immp.us-west-2.elasticbeanstalk.com/>

- Predix <https://hy01app.run.aws-usw02-pr.ice.predix.io>

- IBM Cloud <https://hy01app.mybluemix.net/>

- IBM Cloud Docker Container type <http://hy01apc.mybluemix.net/>

## Getting Started

Download and push to Azure WebApp or Predix staticbuildpack

```
git clone https://github.com/yamamoto42/bootstrap.git
cd bootstrap
cf login
cf push <APP_NAME> -b staticfile_buildpack -m 64mb
```

```
cf push <APP_NAME> -m 64m --docker-image yamamoto42/bootstrap
```

## License

MIT

