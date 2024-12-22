import "./List.scss";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div className="List flex flex-col gap-[20px]">
      <div className="title">
        <h3>Todo List</h3>
      </div>

      <input
        className="py-[10px] outline-none"
        type="text"
        placeholder="검색어를 입력하세요"
        onFocus={(e) => {
          e.target.placeholder = "";
        }}
        onBlur={(e) => {
          e.target.placeholder = "검색어를 입력하세요";
        }}
      />

      <div className="flex flex-col item_list gap-[20px]">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </div>
    </div>
  );
};

export default List;
