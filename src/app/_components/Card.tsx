function Card({
  title,
  text,
  children,
}: Readonly<{
  title: string;
  text: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col my-6 bg-black dark:bg-white border-slate-200 border-2 rounded-lg m-5 p-5 shadow-lg dark:shadow-slate-400 shadow-black">
      <span className="text-4xl text-blue-800">{title}</span>
      <div className="w-3/4 border-2 border-indigo-200 my-4" />
      <span className="text-2xl text-slate-800">{text}</span>
      {children}
    </div>
  );
}

export default Card;
