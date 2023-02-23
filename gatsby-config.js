/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/indesign/dom/',
  siteMetadata: {
    pages: [
      {
        title: 'Guides',
        path: '/indesign/uxp/guides/'
      },
      {
        title: 'Plugins',
        path: '/indesign/uxp/plugins/'
      },
      {
        title: 'InDesign Server',
        path: '/indesign/uxp/server/'
      },
      {
        title: 'References',
        menu: [
          {
            title: 'UXP API',
            path: '/indesign/uxp/uxp_ref/',
          },
          {
            title: 'InDesign API',
            path: '/api/',
          },
          {
            title: 'Recipes',
            path: '/indesign/uxp/reference/recipes/'
          }
        ]
      },
      {
        title: 'Code Samples',
        path: '/indesign/uxp/reference/uxp-scripting-samples/'
      },
      {
        title: 'Support',
        path: '/indesign/uxp/support/'
      }
    ],
    subPages: [
      {
        title: "Indesign DOM reference",
        path: "/api/",
        header: true,
        pages: require("./reference-dom.js")
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
