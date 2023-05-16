
This is the Atlas Headless CMS JS Client SDK (Preview)

**!!! NOTE !!!**

**AtlasCMS is planning to be RTM for all by Q3 '23.
We are currently on RC phase with just selected customers and professionals working with it.
We decided to don't have a WebSite or Documentation online as far as we go RTM.**

**If you want to try Atlas CMS and be part of the selected community, totally free, before the RTM, write to support@atlascms.io**

## What is Atlas CMS
**Atlas** is a Cloud based SaaS Headless CMS. It has been created by developers for Developers, Agencies and Content Creators  for the creation of their digital projects.

It wants to be simple, feature rich and with lighting speed performances and it contains the following features:

- RESTful APIs  
- GraphQL Content Delivery
- Powerful filters to search any part of the contents
- Visual Model Builder with automatic API creation
- Components
- 30+ ready to go field types
- Media Library and Media Analyzer
- Image Editor
- Image Server (resize, crop, format change, WebP)
- Admin Users and Permissions
- Project Users and Permission
- Multilanguage
- Webhooks
- ....many more



## Getting started

We recommend you use the Npm Package Manager to add the library to your Application.

  ```
  npm install atlascms-js
  ```
  or 
  
  ```
  yarn add atlascms-js
  ```
  
## Use the Client

```javascript
import * as Atlas from 'atlascms-js'

//settings
const options = {
  apiToken: "<api-key>",
  projectId: "<project>"
};

//create client
const client = Atlas.createClient(options);

```

Now you can use all the features exposed by the client. For Example if you want to read a content of type Posts you can

```javascript
const myPosts = await client.contents.getContents("posts");
```

If you want to filter them by one or more fields you can use the Content Filter Builder like the following:


```javascript

//filtering contents with category Sport and content's date greater or equals to January 1st 2023  
const filters = Atlas.createContentFilter()
                     .eq("category","sport")
                     .gte("date","2023-01-01T00:00:00")
                     .build();

const myPosts = await client.contents.getContents("posts", filters);

```

The client expose all the methods to interact with the project:

```
client.contents = for contents
client.models = for models and components
client.mediaLibrary = for assets and folders
client.users = for project's users and roles
```
