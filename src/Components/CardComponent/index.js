export default function CardComponent({ note }) {
  return (
    <div className="border border-slate-500 flex flex-col gap-4 rounded-md shadow-md px-4 py-2">
      <div className="font-semibold">{note.title}</div>
      <div>
        {note.description.length > 100
          ? note.description.slice(0, 100) + "..."
          : note.description}
      </div>
      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag, i) => {
          return (
            <div
              key={i}
              className="bg-slate-500 rounded-full text-white text-sm px-2 py-1"
            >
              {tag}
            </div>
          );
        })}
      </div>
      <div>Due on: {note.dueDate.toString().slice(0, 10)}</div>
    </div>
  );
}
