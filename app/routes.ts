import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("header", "routes/header.tsx"),
] satisfies RouteConfig;
