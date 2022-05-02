import st from "./container.module.css";

export default function Container({ children }) {
  return <div className={st.container}>{children}</div>;
}
