import { useTranslation } from "react-i18next";

export default function Numbers() {
  const {t} = useTranslation();

  return (
    <section className="container bg-[#f4f4f4]">
      <div className="title-container">
        <h2></h2>
        <h3></h3>
      </div>
    </section>
  );
}
