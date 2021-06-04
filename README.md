# DD2525-project-showcase
A showcase on a security vulnerability of LastPass Chrome extension v4.32.0
https://bugs.chromium.org/p/project-zero/issues/detail?id=1930

This is the social engineering attack version which does not use an iframe and does not bypass the dialog box or domain check.

* Requires LastPass v4.32.0.  
* Requires SSL certificate and key. Place in `key` folder in the root folder of the project with the names `showcase.crt` and `showcase.key` respectively.
* Requires a `.env` in the root folder of the project with `FACEBOOK_APP_ID`and `FACEBOOK_APP_SECRET` to use Facebook authentication.

`npm install`  
`npm start`

This is made for educational purposes.