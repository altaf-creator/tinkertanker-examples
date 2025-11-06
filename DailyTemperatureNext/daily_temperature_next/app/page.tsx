"use client";

import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import First from "@/app/components/first";

export default function Home() {
  const [page, setPage] = useState(0);
  const maxPage = 3;

  const handleButton = () => {
    setPage(page + 1);
    console.log(page);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <First onClick={handleButton} />
    </div>
  );
}
