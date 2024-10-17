function Card({
  title,
  text,
  children,
}: {
  title: String;
  text: String;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col my-6 bg-amber-100 border border-slate-200 rounded-lg w-fit m-5 p-5 shadow-lg dark:shadow-blue-400 shadow-black">
      <span className="text-3xl text-red-900">{title}</span>
      <span className="text-xl text-slate-800">{text}</span>
      {children}
    </div>
  );
}

export default Card;
