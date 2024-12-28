"use client"
import { Button } from "@/components/ui/button";
import { CarouselComponent } from "@/components/carousel";

export default function Home() {
  const boxContent = [
    {
      title:"Explore",
      header:"View, engage and excel.",
      content:"We provide a comprehensive archive of past questions to help you learn, practice, contribute answers, and suceed in your examinations.",
      button:"View questions",
      buttonFunction: ()=>{}
    },
    {
      title:"Contribute",
      header:"Submit, share, and empower",
      content:"Contribute past questions, share resources, and help others succeed in their examinations.",
      button:"Submit questions",
      buttonFunction: ()=>{}
    },
]
  return (
 <div className="py-10 sm:px-10 px-5 lg:flex max-w-max m-[0_auto] w-full">
  <div>
    <div className="py-6 space-y-2">
      <h2 className="text-4xl font-serif font-semibold max-w-2xl ">You Exam Companion: Practice, Prepare, Prevail!</h2>
      <p className="text-sm">We believe exam preparation should be simple.</p>
    </div>
    <div className="flex flex-col sm:flex-row gap-5 gap items-center w-full">
    {boxContent.map(({title,header,content,button},idx) => {
      return(
        <div key={idx} className="max-w-96 w-full sm:w-64 h-64 bg-red-500 px-3 pt-10 pb-3 rounded-lg">
        <span className="px-2 py-1 bg-white bg-opacity-20 rounded-md text-xs">{title}</span>
        <h2 className="mt-3">{header}</h2>
        <p className="text-sm mt-1">{content}</p>
        <Button className="text-xs mt-2">{button}</Button>
      </div>
      )
})}
    </div>

  </div>
  <div className="my-10 sm:my-0">
    <CarouselComponent/>
  </div>
 </div>
  );
}
