import BannerImg from "../../assets/banner.png";
import Banner from "../../components/Banner";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";

export default function Home() {

  const {datas, isLoading} = useFetch("../logements.json")

  return(
    <div className="home">
      <Banner
      text="Chez vous, partout et ailleurs"
      picture={BannerImg}
      />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="home__card">
          {datas.map((Lodging) => (
            <Link to={`/logements/${Lodging.id}`} key={Lodging.id}>
              <Card 
              title={Lodging.title}
              picture={Lodging.picture[0]}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}