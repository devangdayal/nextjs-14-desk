import Card from "@/app/_components/Card";
import { notFound } from "next/navigation";
import React from "react";

export default function FolderPage({
  params,
}: {
  params: { folderId: String };
}) {
  const { folderId } = params;

  const folderIdNum = Number(folderId);

  if (folderIdNum >= 100) {
    notFound();
  }
  return (
    <Card
      title={`Folder Details Page - ${params.folderId}`}
      text={`This is the Folder Details Page for folder - ${params.folderId}`}
    />
  );
}
