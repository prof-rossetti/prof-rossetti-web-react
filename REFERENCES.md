# Credits, Notes, and References

## Setup

Reproduction from scratch:

```sh
npx create-react-app prof-rossetti-web-react

npm install react-router-bootstrap react-router-dom --save
npm install react-bootstrap bootstrap --save
npm install react-ga --save
npm install d3 --save
# npm install query-string --save
```

## Server Config

Servers from scratch:

```sh
heroku create -n prof-rossetti
heroku git:remote -a prof-rossetti
heroku buildpacks:remove heroku/nodejs -a prof-rossetti
heroku buildpacks:add mars/create-react-app -a prof-rossetti

heroku config:set REACT_APP_GA_TRACKING_ID="UA-XXXX-X" -a prof-rossetti

```

Configuring domains:

  + https://medium.com/@usama_asfar/how-to-set-up-a-domain-to-heroku-with-namecheap-54b5f13a1de5
  + https://devcenter.heroku.com/articles/custom-domains
  + https://www.namecheap.com/support/knowledgebase/article.aspx
  + https://stackoverflow.com/questions/19399477/setting-up-a-custom-domain-with-heroku-and-namecheap/25925332

```sh
# these don't work (needs to be www.)...
# heroku domains:add prof-rossetti.com -a prof-rossetti
# heroku domains:add prof-rossetti.org -a prof-rossetti
heroku domains:add www.prof-rossetti.com -a prof-rossetti
heroku domains:add www.prof-rossetti.org -a prof-rossetti
```

Then edit the CNAME records on the DNS to match the respective *.herokudns.com address.

JK JK set up domain forwarding with masking.

  +  https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-redirect-a-url-for-a-domain
