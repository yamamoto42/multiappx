# Bootstrap

This is bootstrap sample application.
It use DevOps on Azure and VSTS.

## Examples

- Azure <http://hy01app.azurewebsites.net/>

- Predix <https://hy01app.run.aws-usw02-pr.ice.predix.io>

## Getting Started

Download and push to Azure WebApp or Predix staticbuildpack

```
git clone https://github.com/yamamoto42/bootstrap.git
cd bootstrap
cf login
cf push *<APP_NAME>* -b staticfile_buildpack -m 64mb
```

## License

MIT
