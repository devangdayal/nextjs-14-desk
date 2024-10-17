import Card from "@/app/_components/Card";
import React from "react";

export default function FolderPage({
  params,
}: {
  params: { folderId: String };
}) {
  return (
    <Card
      title={`Folder Details Page - ${params.folderId}`}
      text={`This is the Folder Details Page for folder - ${params.folderId}`}
    />
  );
}
