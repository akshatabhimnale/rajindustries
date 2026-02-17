import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type AboutItem = {
  topline: string;
  title: string;
  description: string;
  image: string;
  to: string;
};

const aboutItems: AboutItem[] = [
  {
    topline: "About us",
    title: "Who we are and how we work",
    description:
      "Customer proximity is more than a word for us. We cultivate it on a daily basis. In this way, we can actively help shape the development and keep our finger on the pulse of the times.",
    image:
      "https://www.wewire-harness.com/fileadmin/_processed_/4/a/csm_ww-entwicklungskompetenz_d3781af347.jpg",
    to: "/about",
  },
  {
    topline: "About us",
    title: "Quality",
    description:
      "Quality is not just a meaningless phrase in our company - we live up to this claim.",
    image:
      "https://www.wewire-harness.com/fileadmin/_processed_/a/f/csm_coroplast-group-wuppertal-laborsituation_01_f6bc7c6663.jpg",
    to: "/about",
  },
  {
    topline: "Careers",
    title: "Become part of a powerful team!",
    description:
      "The combination of family-run company and global player provides you with a range of exciting career opportunities in Germany and abroad. Our dynamic growth means that we can offer you a secure job and a wide variety of tasks.",
    image:
      "https://www.wewire-harness.com/fileadmin/_processed_/6/a/csm_karriere-wewire_df9ab4ea11.jpg",
    to: "/contact",
  },
];

export default function AboutTeaserList() {
  return (
    <section className="home-list-section home-ref-font">
      <div className="home-list-wrap">
        <h2 className="home-list-title">About us</h2>

        <div className="home-teaser-grid-3">
          {aboutItems.map((item) => (
            <Link key={item.title} to={item.to} className="home-teaser-card">
              <div className="relative">
                <img src={item.image} alt={item.title} className="home-teaser-image" />
              </div>

              <div className="home-teaser-text-wrap">
                <div className="home-teaser-text-box">
                  <h3 className="home-teaser-headline">
                    <span className="home-teaser-topline">{item.topline}</span>
                    {item.title}
                  </h3>

                  <p className="home-teaser-copy">{item.description}</p>

                  <strong className="home-teaser-cta">
                    <span className="home-teaser-cta-line" />
                    Read more
                    <ArrowRight className="h-[14px] w-[14px]" />
                  </strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
