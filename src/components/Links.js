import "./Links.css";
import flux from "../flux";

function Links() {
  return (
    <>
        <p  className="Title">Les immanquables</p >
      <div className="Categories">
        {flux[0].blocks[0].links.map((link) => (
          <div className="Container">
            <img
              alt=""
              src={link.thumbnail}
              className='Photo'
            ></img>
            <h1 className="Name">{link.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Links;
