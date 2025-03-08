import { index } from "@react-router/dev/routes";
import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx")
] satisfies RouteConfig;