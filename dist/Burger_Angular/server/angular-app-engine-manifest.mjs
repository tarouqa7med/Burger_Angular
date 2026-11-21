
export default {
  basePath: "/Burger_Angular",
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    "": () => import('./main.server.mjs')
  },
};
