import { MdPlayCircleOutline } from "react-icons/md";
import CartProduct from "./cardProduct";

const ListItem = ({ getData }) => {
  const data = getData;

  return (
    <>
      {data?.map((item) => (
        <>
          {/* <div className="item" onClick={() => handleIdProduct(item.id)}>
            <div className="overflow-hidden h-[300px] mb-[20px] rounded-[20px] ">
              <div
                className="box_image bg-center bg-cover  h-full "
                style={{ backgroundImage: `url(${item.images[0]})` }}
              >
                <MdPlayCircleOutline className="icon_play" />
              </div>
            </div>
            <div className="title text-white">
              <p className="text-[17px]">{item.title}</p>
              <p className="text-[12px]">{item.category}</p>
            </div>
          </div> */}
          <CartProduct item={item} />
        </>
      ))}
    </>
  );
};

export default ListItem;
