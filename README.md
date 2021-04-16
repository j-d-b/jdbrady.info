# jdbrady.info
[![Netlify Status](https://api.netlify.com/api/v1/badges/a9f62c62-5328-4b3f-9192-7e4d757f4275/deploy-status)](https://app.netlify.com/sites/jdbrady/deploys)

My personal website, created in 2017 and content updated a few times throughout the past few years.

I wrote the following line three years ago and still have not gotten to it, so I'll be maintaining this mini-mess of a site for the time being:

> I'm going to rewrite my personal site as soon as I have time... I learned **a lot** since I did this.

The repo is very disorganized currently as I just threw some stuff together in the process of *updating* my old personal site, which was my second web project *ever*, back in the day. 

Didn't even get to organizing the files, as I started learning React when I was partway through this, so I go it to an acceptable point and published it. Since then I have learned often there is not time to refactor, so here it stays.

## Usage
`index.html` can be opened directly in the browser. There are no automated build steps. All the needs to be done is precompiling the Handlebars templates which is done from the CLI with globally installed handlebars:

```
npm i -g handlebars@4.0.11
handlebars templates -f compiled-templates.js
```