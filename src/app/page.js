"use client"


import TechBeastLoader from "@/components/TechbeastLoader";
import { useState } from "react";
import Portfolio from "@/components/Portfolio";

export default function Home() {

  const [loading, setLoading] =useState(true)
  return (

    <>
      {loading ? (
        <TechBeastLoader onComplete={() => setLoading(false)} />
      ) : (
        <Portfolio />
      )}
    </>
   
  );
}
