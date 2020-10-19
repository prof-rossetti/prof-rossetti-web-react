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

heroku config:set REACT_APP_GA_TRACKING_ID="UA-XXXX-X" -a prof-rossetti

heroku domains:add prof-rossetti.com -a prof-rossetti
heroku domains:add prof-rossetti.org -a prof-rossetti
```

Then edit the CNAME records on the DNS to match the *.herokudns.com address.

  + https://medium.com/@usama_asfar/how-to-set-up-a-domain-to-heroku-with-namecheap-54b5f13a1de5
  + https://devcenter.heroku.com/articles/custom-domains
  + https://www.namecheap.com/support/knowledgebase/article.aspx
