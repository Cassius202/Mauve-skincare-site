import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="items-center min-h-screen pt-20 flex flex-col">
      <div className="title-container">
        <h2>{t("about-title")}</h2>
        <h3>{t("about-subtitle")}</h3>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default About;
