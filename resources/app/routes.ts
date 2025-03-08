import { index, layout } from "@react-router/dev/routes";
import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("register", "./routes/register.tsx"),
] satisfies RouteConfig;