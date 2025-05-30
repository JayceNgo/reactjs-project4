import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/hero.tsx"),
    route("header", "routes/header.tsx"),
    route("about", "routes/about.tsx"),
    route("service", "routes/service.tsx"),
    route("review", "routes/review.tsx"),
    route("footer", "routes/footer.tsx"),
] satisfies RouteConfig;
