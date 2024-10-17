import Card from "@/app/_components/Card";
import React from "react";

export default function DocumentCatchAll({
  params,
}: Readonly<{
  params: { [key: string]: string };
}>) {
  return (
    <Card title={"Document Page"} text={"This is the Catch ALL Segment Page"}>
      <div className="text-lime-700 text-">
        <h2 className="text-lg font-bold text-red-700">Params:</h2>
        {JSON.stringify(params, null, 2)}
      </div>
    </Card>
  );
}
