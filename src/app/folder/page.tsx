import React from "react";
import Card from "../_components/Card";

export default function Folder() {
  return (
    <>
      <Card title={"Folder Page"} text={"This is the Folder Page"}>
        <div className="flex flex-col space-y-2  bg-sky-100 text-black w-fit ">
          <div className="text-2xl">Folder List</div>
          <div>Sub Folder - 1</div>
          <div>Sub Folder - 2</div>
          <div>Sub Folder - 3</div>
          <div>Sub Folder - 4</div>
          <div>Sub Folder - 5</div>
        </div>
      </Card>
    </>
  );
}
