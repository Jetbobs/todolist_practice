import "./Editor.scss";

const Editor = () => {
  return (
    <div className="Editor flex gap-[10px]">
      <input
        className="w-4/5 rounded-[5px] p-[10px] outline-none"
        type="text"
        placeholder="새로운 Todo"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "새로운 Todo")}
      />
      <button className="w-1/5 rounded-[5px] text-white font-bold cursor-pointer">
        추가
      </button>
    </div>
  );
};

export default Editor;
