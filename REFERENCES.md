# Credits, Notes, and References

Reproduction from scratch:

```sh
npx create-react-app prof-rossetti-web-react

npm install react-router-bootstrap react-router-dom --save
npm install react-bootstrap bootstrap --save
npm install react-ga --save
npm install d3 --save
# npm install query-string --save
```

Servers from scratch:

```sh
heroku create -n prof-rossetti
heroku git:remote -a prof-rossetti
heroku buildpacks:remove heroku/nodejs -a prof-rossetti
heroku buildpacks:add mars/create-react-app -a prof-rossetti
```
