# photos.now.sh
Let's try keep this domain for site

_development_

```bash
git clone https://github.com/daggerok/photos.now.sh.git
cd photos.now.sh/
npm i
npm start
# do some coding...
```

_publishing_

```bash
npm i
vuepress build src --dest .vuepress/dist

brew install now
now login

now --static --public ./vuepress/dist
now alias ls
now alias set dist-bftlbaykbm.now.sh photos.now.sh
```

<!-- 
this is multiline
comment block
-->
