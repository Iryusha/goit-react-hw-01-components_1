import st from "./container.modul.css";

export default function Container({ children }) {
  return <div className={st.container}>{children}</div>;
}
