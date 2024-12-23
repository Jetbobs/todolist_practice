import "./ListItem.scss";

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <div className="ListItem border-b border-gray-200 pb-[15px] flex items-center justify-between">
      <input type="checkbox" />
      <div className="item_title w-6/12 text-xl ">{text}</div>
      <div className="item_date">{new Date().toLocaleDateString()}</div>
      <button className="item_delete w-[50px] rounded-[5px] p-[5px] hover:bg-[rgb(200,200,200)] transition-all bg-[rgb(235,235,235)]">
        삭제
      </button>
    </div>
  );
};

export default ListItem;
