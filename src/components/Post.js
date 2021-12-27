import flux from "../flux";
import logo from "../assets/logo-ladress.svg";
import NewOrFav from "./NewOrFav";
import Promo from "./Promo";
import "./Post.css";
import Price from "./Price";

function Posts() {
  return (
    <>
      <div className="logo">
        <p className="Title">La sélection</p>
        <img  alt='' src={logo}></img>
      </div>
      <div className="CategoriesPost">
        {flux[0].blocks[1].posts.map((link) => (
          <div className="Container">
            <div className="Animation">
            <img alt="" src={link.thumbnail} className="PhotoPost"></img>
            <NewOrFav isNew={link.new} isHeart={link.coup_de_coeur}></NewOrFav>
            {link.discount && <Promo></Promo>}
            </div>
            <Price OldPrice={link.price} NewPrice={link.discount} Title={link.title}></Price>
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
