import Card from "@/app/_components/Card";
import React from "react";

export default function FolderReviewPage({
  params,
}: {
  params: {
    folderId: String;
    reviewId: String;
  };
}) {
  return (
    <Card title={"Folder Review Page"} text={`This is the folder review page`}>
      <div className="flex flex-col space-y-2  bg-purple-200 text-black w-fit text-2xl p-4 ">
        <div>Folder ID: {params.folderId}</div>
        <div>Review ID: {params.reviewId}</div>
      </div>
    </Card>
  );
}
