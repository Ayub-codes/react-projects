import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    settitle("");
    setdetail("");
  };


  const delBtn = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start gap-4 flex-col p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes Notes</h1>

        <input
          className="px-5 w-full font-medium outline-none bg-black py-2 border-2 rounded"
          type="text"
          placeholder="enter notes heading"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          className="px-5 flex flex-row font-medium items-start w-full outline-none h-32 bg-black py-2 border-2 rounded"
          type="text"
          placeholder="enter details"
          value={detail}
          onChange={(e) => {
            setdetail(e.target.value);
          }}
        />

        <button className="bg-white w-full outline-none active:bg-gray-500 text-black px-5 py-2 rounded">
          ADD NOTES
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 bg-gray-900   p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%]">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="flex justify-between flex-col items-start bg-cover pt-9 pb-4 bg-[url('https://tse3.mm.bing.net/th/id/OIP.rQE-2z4GsRRsCjlZrqiffwHaKX?pid=Api&P=0&h=220')] text-black rounded-xl p-4 w-40 h-52 overflow-auto"
            >
              <div>
                <h3 className="text-xl font-bold leading-tight">{elem.title}</h3>
                <p className="mt-2 text-gray-500 leading-snug">{elem.detail}</p>
              </div>
              <button onClick={(idx)=>{
                delBtn(idx)
              }} className="w-full active:bg-red-700 bg-red-500 text-white py-1 text-xs font-bold rounded ">delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
