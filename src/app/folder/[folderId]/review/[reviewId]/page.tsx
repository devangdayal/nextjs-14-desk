import Card from "@/app/_components/Card";
import { notFound } from "next/navigation";
import React from "react";

export default function FolderReviewPage({
  params,
}: Readonly<{
  params: Readonly<{
    folderId: string;
    reviewId: string;
  }>;
}>) {
  const { folderId, reviewId } = params;

  const folderIdNum = Number(folderId);
  const reviewIdNum = Number(reviewId);

  if (folderIdNum >= 100 || reviewIdNum > 10) {
    notFound();
  }

  return (
    <Card title={"Folder Review Page"} text={`This is the folder review page`}>
      <div className="flex flex-col space-y-2  bg-purple-200 text-black w-fit text-2xl p-4 ">
        <div>Folder ID: {params.folderId}</div>
        <div>Review ID: {params.reviewId}</div>
      </div>
    </Card>
  );
}
