"use client"
import React  from 'react'
import { NotionRenderer } from 'react-notion-x'
import dynamic from 'next/dynamic'
import { ExtendedRecordMap } from 'notion-types'
import 'react-notion-x/src/styles.css'
import nextLink from "next/link";
import nextImage from "next/image";
import { TagItem } from '../card/tag/TagItem'


interface NotionPageRendererProps {
  recordMap : ExtendedRecordMap
}
export default function NotionPageRenderer ({recordMap} : NotionPageRendererProps) {
  const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
//   {
//     ssr: false
//   }
// )
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)

    return (
      <NotionRenderer 
      recordMap={recordMap} 
      fullPage={true} 
      disableHeader
      showTableOfContents
      previewImages = {!!recordMap?.preview_images}
      // darkMode={true}
      components={{
        Code
        ,Collection
        ,Equation
        ,Modal
        ,nextLink
        ,nextImage
        ,propertyDateValue: ({ data }) => data[0][1][0][1].start_date
        ,propertySelectValue : ({option : {id, color, value : name}}) => (
          <TagItem key={id} tagItem={{color, id, name}}/>
        )
      }}/>

    )
}
