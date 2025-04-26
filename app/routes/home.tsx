import type { Route } from "./+types/home";
import "../../public/imgs/logo.svg";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <>
            <p>home</p>
            <p>home</p>
        </>
    );
}
