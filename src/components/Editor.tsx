import "./Editor.scss";
import { useState } from "react";

interface EditorProps {
  addItem: (item: string) => void;
}

const Editor: React.FC<EditorProps> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    if (inputValue.trim()) {
      addItem(inputValue); // 부모 컴포넌트에 값 전달
      setInputValue(""); // 입력창 초기화
    }
  };

  return (
    <form onSubmit={HandleSubmit} className="Editor flex gap-[10px]">
      <input
        className="w-4/5 rounded-[5px] p-[10px] outline-none"
        type="text"
        placeholder="새로운 Todo"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "새로운 Todo")}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="w-1/5 rounded-[5px] text-white font-bold cursor-pointer">
        추가
      </button>
    </form>
  );
};

export default Editor;
