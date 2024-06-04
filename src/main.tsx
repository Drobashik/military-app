import ReactDOM from "react-dom/client";
import { Container } from "./components/Container/index.tsx";
import "./styles/main.scss";
import { MilitaryProvider } from "./context/military-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MilitaryProvider>
    <Container />
  </MilitaryProvider>
);
